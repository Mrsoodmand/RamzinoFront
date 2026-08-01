import { useRouter } from "next/router";
import { useEffect } from "react";

export const handelLazyImage = () => {
  // const windowHeight = (window.innerHeight / 5) * 4;
  // const images = document.querySelectorAll("img");
  // images.forEach((e, i) => {
  //   const topSection = e.getBoundingClientRect().top;
  //   if (topSection < windowHeight + 250) {
  //     if (!e.dataset.src) return null;
  //     e.setAttribute("src", e.dataset.src);
  //     delete e.dataset.src;
  //   }
  // });
};

export const handelAddAnimations = () => {
  const bottomTopAnimations = document.querySelectorAll(".fade-in");

  const windowHeight = (window.innerHeight / 5) * 4;
  bottomTopAnimations.forEach((e) => {
    const topSection = e.getBoundingClientRect().top;
    if (topSection < windowHeight + 150) {
      e.dataset.animation = "active";
    }
  });
};

export default function useScroll() {
  const { pathname } = useRouter();

  useEffect(() => {
    if (typeof window != "undefined") {
      // handel added animation

      document.addEventListener("scroll", () => {
        handelAddAnimations();
        // handelLazyImage();
      });
      handelAddAnimations();
      // handelLazyImage();
      return () => {
        document.removeEventListener("scroll", () => {});
      };
    }
  }, [pathname]);

  return null;
}
