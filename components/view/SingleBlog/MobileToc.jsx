import classes from "hooks/classes";
import { useEffect, useRef, useState } from "react";
import TableOfContents from "./ReadingRail/TableOfContents";


const IconList = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>
);

// The desktop rail is off screen below lg, so mobile readers get the same
// headings and search from a sheet instead. Both are driven by the state the
// page already computes, so there is only ever one scroll listener.
function MobileToc({ headings, blocks, activeId, progress, minutes }) {
  const [open, setOpen] = useState(false);
  const unlocked = useRef("");

  useEffect(() => {
    if (!open) return undefined;

    // Locked inline rather than through the site's `html.modal` class: that
    // rule also pads 17px for a scrollbar above 800px, which would shift the
    // page sideways at the tablet widths this sheet still covers.
    const html = document.documentElement;
    const previous = html.style.overflow;
    unlocked.current = previous;
    html.style.overflow = "hidden";

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      html.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Unlock before scrolling rather than leaving it to the effect cleanup: that
  // cleanup runs after the next paint, and a smooth scroll kicked off while the
  // page is still locked is simply dropped.
  const navigate = (id, scroll) => {
    setOpen(false);
    document.documentElement.style.overflow = unlocked.current;
    scroll(id);
  };

  if (!headings?.length) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="فهرست مطالب"
        className={classes(
          "fixed bottom-5 left-1/2 z-40 h-11 -translate-x-1/2 center gap-2 rounded-full bg-primary px-5 text-[13px] font-semibold text-primaryText shadow-medium lg:hidden",
          open ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <IconList className="h-[18px] w-[18px]" />
        فهرست مطالب
        <span className="tabular-nums opacity-70">
          {Math.round(progress * 100)}٪
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            aria-label="بستن فهرست"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-[#00000080]"
          />

          <div className="animate-fade-in-up absolute inset-x-0 bottom-0 max-h-[82vh] overflow-hidden rounded-t-[16px] bg-white px-4 pb-6 pt-3">
            <span className="mx-auto mb-3 block h-1 w-10 rounded-full bg-[#DFE0E1] dark:bg-[#003E52]" />
            <TableOfContents
              headings={headings}
              blocks={blocks}
              activeId={activeId}
              progress={progress}
              minutes={minutes}
              onNavigate={navigate}
              bare
              navClassName="max-h-[52vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MobileToc;
