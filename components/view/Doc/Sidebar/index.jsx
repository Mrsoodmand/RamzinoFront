import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const IconSearch = dynamic(() => import("icons/Layout/IconSearch.svg"), {
  ssr: false,
});

function Sidebar() {
  const [indexOpen, setIndexOpen] = useState(null);

  return (
    <div className="bg-white h-svh lg:h-[96vh] -mb-20 overflow-auto none-scroll py-10">
      <div className="max-w-[290px] mx-auto">
        <div className="center bg-[#F5F5F6] dark:bg-[#02151B] rounded-lg w-full h-[51px] sm:h-[57px] px-3 sm:px-4 mb-6 sm:mb-[33px] z-50">
          <input
            placeholder="جستجو مورد مد نظر"
            className="h-full w-full bg-[#fff] bg-opacity-0 border-none outline-none font-semibold text-xs sm:text-sm text-[#373A41] placeholder:text-[#373A41] dark:text-[#f5f5f5] dark:font-medium dark:placeholder:text-[#f5f5f5]"
          />
          <IconSearch className="dark:[&>path]:stroke-[#f5f5f5] scale-90 sm:scale-100" />
        </div>
      </div>

      <div className="max-w-[290px] mx-auto">
        <ul>
          {[1, 2, 3, 4, 4, 5, 1, 2, 3, 4]?.map((e, i) => (
            <li
              key={i}
              className="text-[#373A41] dark:text-[#f5f5f5] dark:font-medium font-semibold text-sm sm:text-base mb-5 sm:mb-7 last:mb-0 cursor-pointer"
              onClick={() => setIndexOpen((c) => (c === i ? null : i))}
            >
              Api مورد نظر
              <ul
                className={classes(
                  "flex flex-col gap-[14px] overflow-hidden",
                  indexOpen === i ? "mt-[14px] max-h-screen" : "max-h-0"
                )}
              >
                {[1, 2, 3]?.map((e, i) => (
                  <li key={i}>
                    <Link
                      href={`/docs/2`}
                      className="text-[#373A41] dark:text-[#f5f5f5] text-[13px] sm:text-sm gap-[7px] center group hover:opacity-80"
                    >
                      <i className="bg-[#B1B1B1] dark:bg-[#ccccccd3] w-[14px] h-[2px] block group-hover:w-[20px]"></i>
                      ای پی های شماره یک
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
