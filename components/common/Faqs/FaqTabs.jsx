import { useCallback, useEffect, useRef, useState } from "react";
import classes from "hooks/classes";

// The FAQ category selector, shared by the home section and the FAQ page.
//
// A segmented track rather than separate pills: the categories are mutually
// exclusive, and one surface sliding between them says "pick exactly one"
// where five filled pills read as five toggles you might combine. It also
// keeps mint off the control, so the support CTA below is the only mint thing
// in the column.
//
// The thumb is positioned in two dimensions, not just horizontally, so the
// track can wrap. That matters: the home section gives this 320px, which fits
// about two labels per row, while the FAQ page gives it the full width on one
// row. A single-axis thumb would have forced a sideways scroller in the narrow
// slot.
//
// `items` is [{ id, label }]. Semantics stay `group` + `aria-pressed` rather
// than tablist/tab: this filters one list, it does not switch between panels.
function FaqTabs({ items, value, onChange, className }) {
  const trackRef = useRef(null);
  const [thumb, setThumb] = useState(null);
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const active = track?.querySelector('[data-active="true"]');

    if (!active) {
      setThumb(null);
      return;
    }

    setThumb({
      top: active.offsetTop,
      left: active.offsetLeft,
      width: active.offsetWidth,
      height: active.offsetHeight,
    });
  }, []);

  useEffect(() => {
    measure();
    // Only animate once the thumb has a real position — otherwise the first
    // paint slides it in from the track's origin.
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [measure, value, items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [measure]);

  // Label widths shift when the Persian face finishes loading, which moves the
  // segments out from under a thumb measured against the fallback font.
  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts?.ready) return;

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) measure();
    });
    return () => {
      cancelled = true;
    };
  }, [measure]);

  if (!items?.length) return null;

  return (
    <div
      ref={trackRef}
      role="group"
      aria-label="دسته‌بندی سوالات"
      className={classes(
        "relative inline-flex max-w-full flex-wrap gap-1 rounded-[8px] bg-[#EEF2F2] p-1 dark:bg-[#012730]",
        className
      )}
    >
      {thumb && (
        <span
          aria-hidden="true"
          style={{
            top: thumb.top,
            left: thumb.left,
            width: thumb.width,
            height: thumb.height,
          }}
          className={classes(
            "pointer-events-none absolute z-0 rounded-[6px] bg-white",
            "shadow-[0_0_14px_rgba(0,0,0,0.05)] dark:bg-[#04384A] dark:shadow-none",
            ready
              ? "transition-[top,left,width,height] duration-[320ms] ease-[cubic-bezier(.2,.8,.25,1)] motion-reduce:transition-none"
              : ""
          )}
        />
      )}

      {items.map((item) => {
        const active = value === item.id;

        return (
          <button
            key={item.id}
            type="button"
            data-active={active}
            aria-pressed={active}
            onClick={() => onChange(item.id)}
            className={classes(
              "relative z-10 rounded-[6px] px-[15px] py-2 text-[13px]",
              "transition-colors duration-200",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary",
              active
                ? "font-medium text-title"
                : "text-primaryText hover:text-title dark:text-[#8BA1A5] dark:hover:text-title",
              // Until the thumb has been measured — server-rendered HTML, or a
              // client where the effect has not run yet — the active segment
              // paints its own surface. Identical fill and radius to the thumb,
              // so the handover when it mounts is invisible.
              active &&
                !thumb &&
                "bg-white shadow-[0_0_14px_rgba(0,0,0,0.05)] dark:bg-[#04384A] dark:shadow-none"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default FaqTabs;
