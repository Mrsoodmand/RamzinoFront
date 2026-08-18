import { useMemo } from "react";
import { useRouter } from "next/router";
import classes from "hooks/classes";
import BlogCard from "components/common/BlogCard";
import { ALL_CATEGORY, filterByCategory } from "../taxonomy";

function ArticleGrid({ blogs, categories, active }) {
  const router = useRouter();

  const visible = useMemo(
    () => filterByCategory(blogs, active),
    [blogs, active],
  );

  const select = (name) => {
    const query = { ...router.query };
    if (name === ALL_CATEGORY) delete query.category;
    else query.category = name;

    router.push({ pathname: "/blogs", query }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <section aria-labelledby="blogs-latest">
      <h2
        id="blogs-latest"
        className="mb-[18px] text-xl font-semibold text-title sm:text-2xl"
      >
        آخرین مقالات
      </h2>

      {categories?.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((item) => {
            const isActive = item.name === active;
            return (
              <button
                key={item.name}
                type="button"
                aria-pressed={isActive}
                onClick={() => select(item.name)}
                className={classes(
                  "h-9 rounded-md px-4 text-[13px] transition-all duration-300",
                  isActive
                    ? "border border-primary bg-primary font-semibold text-primaryText"
                    : "border border-[#DFE0E1] bg-white font-medium text-[#383838] hover:bg-themeColor dark:border-[#003E52] dark:text-[#D3DADD]",
                )}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}

      {/* Explicit column counts, not auto-fit: auto-fit collapses empty tracks,
          so a single card would stretch across the whole row. */}
      {visible.length ? (
        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {visible.map((blog, i) => (
            <BlogCard key={blog?.id ?? i} data={blog} index={i} />
          ))}
        </div>
      ) : (
        <div className="rounded-[5px] bg-white px-6 py-14 text-center shadow-[0px_0px_75px_0px_#0000000B]">
          <p className="text-[15px] font-semibold text-title">
            مقاله‌ای در این دسته‌بندی نیست
          </p>
          <button
            type="button"
            onClick={() => select(ALL_CATEGORY)}
            className="btn btn-accent mt-4 h-11"
          >
            نمایش همه مقالات
          </button>
        </div>
      )}
    </section>
  );
}

export default ArticleGrid;
