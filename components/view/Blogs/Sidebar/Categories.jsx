import { useMemo } from "react";
import Link from "next/link";
import classes from "hooks/classes";
import { ALL_CATEGORY } from "../taxonomy";

function Categories({ items, active }) {
  const total = useMemo(
    () => items?.find((item) => item.name === ALL_CATEGORY)?.count ?? 0,
    [items],
  );

  // Only "همه" means nothing was categorised on the server yet.
  if (!items || items.length < 2) return null;

  return (
    <section
      aria-labelledby="blogs-cats"
      className="rounded-[5px] bg-white px-[18px] pb-5 pt-[18px] shadow-[0px_0px_75px_0px_#0000000B]"
    >
      <h2 id="blogs-cats" className="text-base font-semibold text-title">
        دسته‌بندی‌ها
      </h2>
      <p className="mb-3.5 mt-1 text-[12px] text-[#5C6165] dark:text-[#8FA3AB]">
        {items.length - 1} دسته · {total} مقاله
      </p>

      <nav className="flex flex-col">
        {items.map((item) => {
          const isActive = item.name === active;
          return (
            <Link
              key={item.name}
              href={
                item.name === ALL_CATEGORY
                  ? "/blogs"
                  : { pathname: "/blogs", query: { category: item.name } }
              }
              scroll={false}
              aria-current={isActive ? "true" : undefined}
              className={classes(
                "flex items-center justify-between gap-3 rounded-[4px] px-3 py-[11px] text-[13px] transition-colors duration-300",
                isActive
                  ? "bg-primary font-semibold text-primaryText"
                  : "font-medium text-[#383838] hover:bg-themeColor dark:text-[#D3DADD] dark:hover:text-[#F5F5F5]",
              )}
            >
              <span className="truncate">{item.name}</span>
              <span
                className={classes(
                  "text-[12px] tabular-nums",
                  isActive
                    ? "text-primaryText opacity-75"
                    : "text-[#5C6165] dark:text-[#8FA3AB]",
                )}
              >
                {item.count}
              </span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export default Categories;
