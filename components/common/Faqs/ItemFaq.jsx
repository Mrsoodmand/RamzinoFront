import { useId } from "react";
import classes from "hooks/classes";

// One FAQ row, shared by the home, gateway, buy/sell and FAQ-page lists.
//
// Closed, the row is a hairline rule — the design system keeps surfaces
// strokeless and lets rules carry a list. Open, it becomes a tinted panel with
// a filled marker, so the expanded answer reads as its own surface rather than
// as loose text hanging under a heading. Both states share the same padding so
// nothing shifts sideways when it opens.
//
// The answer stays in the DOM when collapsed — these are the answers search
// engines index — but `inert` keeps it out of the tab order and the
// accessibility tree, so a screen reader no longer reads every answer as open.
function ItemFaq({ open, setOpen, i, data }) {
  const uid = useId();
  const isOpen = open === i;

  return (
    <li className="border-b border-solid border-[#E6E8E8] dark:border-[#0F3F4E]">
      <div
        className={classes(
          "rounded-[8px] transition-colors duration-300 motion-reduce:transition-none",
          isOpen ? "bg-[#F3F7F7] dark:bg-[#02222C]" : "bg-transparent"
        )}
      >
        <button
          type="button"
          id={`${uid}-q`}
          aria-expanded={isOpen}
          aria-controls={`${uid}-a`}
          onClick={() => setOpen((c) => (c === i ? null : i))}
          className={classes(
            "grid w-full grid-cols-[minmax(0,1fr)_28px] items-center gap-4 rounded-[8px]",
            "px-3 py-[18px] text-start transition-colors duration-200 sm:px-4 sm:py-5",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            isOpen
              ? "text-primaryDark dark:text-primary"
              : "text-title hover:text-primaryDark dark:hover:text-primary"
          )}
        >
          <span className="text-sm font-medium leading-relaxed sm:text-base">
            {data?.question}
          </span>

          <span
            aria-hidden="true"
            className={classes(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-solid",
              "transition-colors duration-300 motion-reduce:transition-none",
              isOpen
                ? "border-primary bg-primary text-[#0C2B2F]"
                : "border-[#D9DDDD] text-title dark:border-[#0F3F4E]"
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={classes(
                "h-3 w-3 transition-transform duration-300",
                "ease-[cubic-bezier(.2,.8,.25,1)] motion-reduce:transition-none",
                isOpen ? "rotate-180" : "rotate-0"
              )}
            >
              <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <div
          id={`${uid}-a`}
          role="region"
          aria-labelledby={`${uid}-q`}
          {...(isOpen ? {} : { inert: "" })}
          className={classes(
            "grid transition-[grid-template-rows] duration-[360ms]",
            "ease-[cubic-bezier(.2,.8,.25,1)] motion-reduce:transition-none",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <p className="max-w-[65ch] px-3 pb-5 text-xs leading-[1.85] text-primaryText dark:text-[#C4D2D4] sm:px-4 sm:text-sm">
              {data?.answer}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemFaq;
