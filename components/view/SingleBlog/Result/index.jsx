import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const IconButton = dynamic(() => import("icons/Layout/IconArrowBottom.svg"), {
  ssr: false,
});

function Result() {
  const [open, setOpen] = useState(true);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (typeof window != "undefined") {
      // استخراج تگ‌های تیتر و ساختن یک متن جدید

      const doc = document.querySelector("#main-blog");
      if (doc) {
        const elements = doc.querySelectorAll("h2, h3, h4");

        const extractedHeadings = Array.from(elements).map(
          (heading, index) => ({
            top: heading.getBoundingClientRect().top + window.scrollY - 100,
            text: heading.textContent,
            tag: heading.tagName,
          }),
        );

        setHeadings(extractedHeadings);
      }
    }
  }, []);

  if (!headings?.length) return null;

  return (
    <div className="fade-in mt-3 sm:mt-5 border border-solid border-[#C2C3C5] dark:border-[#10333E] rounded-[4px] sm:rounded-[5px] px-3 sm:px-4 pt-2 sm:pt-3 pb-3 sm:pb-4">
      <button
        onClick={() => setOpen((c) => !c)}
        aria-label="آنچه در این خبر می‌خوانید"
        title="نمایش"
        className="center-between w-full hover:opacity-80"
      >
        <div className="text-xs sm:text-base text-[#262931] dark:text-[#fff]">
          آنچه در این خبر می‌خوانید
        </div>
        <IconButton className="dark:[&>path]:stroke-[#fff] scale-90 sm:scale-100" />
      </button>
      <div
        className={classes(
          open ? "max-h-screen mt-[7px] sm:mt-[13px]" : "max-h-0",
          "overflow-hidden",
        )}
      >
        <div className="">
          {headings?.map((e, i) => (
            <button
              key={i}
              onClick={() =>
                window.scrollTo({ top: e?.top, behavior: "smooth" })
              }
              className={classes(
                "center gap-[7px] group hover:opacity-80 text-[#262931] dark:text-[#FAFAFA] text-xs sm:text-base",
                e?.tag !== "H2" ? "sm:pr-4" : "",
              )}
            >
              <i className="bg-primary w-[3px] sm:w-1 h-[22px] sm:h-7 rounded-[5px] group-hover:w-1.5"></i>
              {e.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Result;
