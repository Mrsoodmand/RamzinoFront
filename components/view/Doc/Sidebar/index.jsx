import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import { apiDocs } from "../data";

const IconSearch = dynamic(() => import("icons/Layout/IconSearch.svg"), {
  ssr: false,
});

function Sidebar({ activeSlug }) {
  const [search, setSearch] = useState("");
  const [closedCategories, setClosedCategories] = useState([]);

  const sections = useMemo(() => {
    const term = search.trim();
    if (!term) return apiDocs;
    return apiDocs
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.title.includes(term)),
      }))
      .filter((section) => section.items.length);
  }, [search]);

  return (
    <div className="bg-white h-svh lg:h-[96vh] -mb-20 overflow-auto none-scroll py-10">
      <div className="max-w-[290px] mx-auto">
        <div className="center bg-[#F5F5F6] dark:bg-[#02151B] rounded-lg w-full h-[51px] sm:h-[57px] px-3 sm:px-4 mb-6 sm:mb-[33px] z-50">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو در مستندات API"
            className="h-full w-full bg-[#fff] bg-opacity-0 border-none outline-none font-semibold text-xs sm:text-sm text-[#373A41] placeholder:text-[#373A41] dark:text-[#f5f5f5] dark:font-medium dark:placeholder:text-[#f5f5f5]"
          />
          <IconSearch className="dark:[&>path]:stroke-[#f5f5f5] scale-90 sm:scale-100" />
        </div>
      </div>

      <div className="max-w-[290px] mx-auto">
        <ul>
          {sections?.map((section, i) => {
            const isClosed = closedCategories.includes(section.category);
            return (
              <li
                key={section.category}
                className="text-[#373A41] dark:text-[#f5f5f5] dark:font-medium font-semibold text-sm sm:text-base mb-5 sm:mb-7 last:mb-0 cursor-pointer"
                onClick={() =>
                  setClosedCategories((c) =>
                    isClosed
                      ? c.filter((e) => e !== section.category)
                      : [...c, section.category]
                  )
                }
              >
                {section.category}
                <ul
                  className={classes(
                    "flex flex-col gap-[14px] overflow-hidden",
                    isClosed ? "max-h-0" : "mt-[14px] max-h-screen"
                  )}
                >
                  {section.items?.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={classes(
                          "text-[13px] sm:text-sm gap-[7px] center group hover:opacity-80",
                          item.slug === activeSlug
                            ? "text-[#003E52] dark:text-primary font-semibold"
                            : "text-[#373A41] dark:text-[#f5f5f5]"
                        )}
                      >
                        <i
                          className={classes(
                            "w-[14px] h-[2px] block group-hover:w-[20px]",
                            item.slug === activeSlug
                              ? "bg-primary"
                              : "bg-[#B1B1B1] dark:bg-[#ccccccd3]"
                          )}
                        ></i>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
