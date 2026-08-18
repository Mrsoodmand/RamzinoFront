import { useRouter } from "next/router";
import { useEffect } from "react";

const SELECTOR = '.fade-in:not([data-animation="active"])';
const PENDING = "reveal-pending";

export const handelLazyImage = () => {};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const reveal = (el) => {
  el.classList.remove(PENDING);
  el.dataset.animation = "active";
};

// Already on screen: show it straight away. Hiding it first and animating it
// back in would flash on hydration, since the server-rendered markup is
// visible before this runs.
const isOnScreen = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < (window.innerHeight || 0);
};

let observer;

const getObserver = () => {
  if (observer) return observer;
  if (typeof IntersectionObserver === "undefined") return null;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 },
  );

  return observer;
};

/**
 * Marks `.fade-in` elements for reveal. Safe to call repeatedly — elements
 * already revealed are skipped, so data-driven renders can re-scan cheaply.
 */
export const handelAddAnimations = () => {
  if (typeof document === "undefined") return;

  const elements = document.querySelectorAll(SELECTOR);
  if (!elements.length) return;

  // Bail out to "just show it" whenever the reveal can't be driven reliably:
  // no observer support, reduced motion, or a hidden document. Hidden
  // documents (background tabs, headless renderers, print) never receive
  // IntersectionObserver callbacks, so observing there would leave every
  // below-the-fold section stuck at opacity 0.
  const canObserve =
    !prefersReducedMotion() && document.visibilityState !== "hidden";
  const io = canObserve ? getObserver() : null;

  if (!io) {
    elements.forEach(reveal);
    return;
  }

  elements.forEach((el) => {
    if (isOnScreen(el)) {
      reveal(el);
      return;
    }
    el.classList.add(PENDING);
    io.observe(el);
  });
};

export default function useScroll() {
  const { pathname } = useRouter();

  useEffect(() => {
    handelAddAnimations();

    // Late-arriving layout (fonts, images, lazy sections) can shift elements
    // into view before the observer has anything to report.
    const onResize = () => handelAddAnimations();
    window.addEventListener("resize", onResize, { passive: true });

    // A page opened in a background tab reveals everything up front; re-scan
    // once it is looked at so later sections can still animate in.
    const onVisibility = () => handelAddAnimations();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (observer) {
        observer.disconnect();
        observer = undefined;
      }
    };
  }, [pathname]);

  return null;
}
