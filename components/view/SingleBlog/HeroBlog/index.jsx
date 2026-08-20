import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const IconSave = dynamic(() => import("icons/Blog/IconSave.svg"), {
  ssr: false,
});
const IconDate = dynamic(
  () => import("components/common/LastBlogs/IconDate.svg"),
  { ssr: false },
);
const IconView = dynamic(
  () => import("components/common/LastBlogs/IconView.svg"),
  { ssr: false },
);

// currentColor, so the byline picks up .btn-clear's own text colour instead of
// needing a per-theme override the way the imported .svg icons do.
const IconAuthor = ({ className = "h-[18px] w-[18px]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
);

// The API has no author field on a blog yet, so this reads the shapes a
// backend is most likely to add one in and otherwise credits the publication.
const readAuthor = (blog) => {
  const raw = blog?.author?.name || blog?.author || blog?.author_name;
  const name = typeof raw === "string" ? raw.trim() : "";
  return name || "رمزینو";
};

function HeroBlog({ data }) {
  const category =
    typeof data?.category === "string" ? data.category.trim() : "";
  const author = readAuthor(data);

  return (
    <header className="w-full sm:bg-white pt-6 fade-in">
      <h1 className="text-[#262931] dark:text-[#fff] font-semibold text-[18px] sm:text-xl md:text-2xl sm:px-4">
        {data?.title}
      </h1>
      <div className="relative">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md mt-4 sm:mt-6">
          <Image
            src={data?.cover}
            alt={data?.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </div>
        <div className="sm:px-5 py-4 sm:py-[28px] center-between">
          {/* Below sm the byline drops out of the floating group and into the
              empty half of this strip, sized to sit level with the date and
              view count rather than towering over them. */}
          <span className="center gap-1.5 rounded-full border border-solid border-[#DFE0E1] px-2.5 py-1 text-[11px] text-[#373A41] dark:border-[#003E52] dark:text-[#FAFAFA] sm:!hidden">
            <IconAuthor className="h-4 w-4" />
            نویسنده: {author}
          </span>

          {/* This wrapper is one half of the row's space-between from sm up, so
              it stays put even when there is no category to show — dropping it
              would pull the date and view count across to the other side. */}
          <div className="absolute bottom-[75px] right-3 sm:bottom-0 sm:right-0 sm:relative center gap-1.5 sm:gap-2.5">
            {category && (
              <Link
                href={`/blogs?category=${category}`}
                className="btn btn-accent px-[13px] sm:px-[18px]"
              >
                {category}
              </Link>
            )}

            <span className="btn btn-clear !hidden px-[13px] sm:!inline-flex sm:px-[18px]">
              <IconAuthor />
              نویسنده: {author}
            </span>
          </div>
          <div className="center">
            <div className="center gap-3 sm:gap-4">
              <div className=" center gap-1 sm:gap-5">
                <div className="center gap-0.5 sm:gap-[9px] text-[#373A41] dark:text-[#FAFAFA] text-[11px] sm:text-sm">
                  <IconDate className="scale-[0.7] sm:scale-100 dark:[&>*]:stroke-[#FAFAFA]" />
                  {new Date(data?.created_at)?.toLocaleDateString("fa-IR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="center gap-0.5 sm:gap-[9px] text-[#373A41] dark:text-[#FAFAFA] text-[11px] sm:text-sm">
                  <IconView className="scale-[0.7] sm:scale-100 dark:[&>*]:stroke-[#FAFAFA]" />
                  {data?.view || 0} بازید
                </div>
              </div>
              {/* <button className="full-center bg-[#EBECEC] dark:bg-[#032934] rounded-[4px] sm:rounded-md w-[30px] h-[30px] hover:opacity-80 glass">
                <IconSave className="dark:[&>path]:stroke-[#fff] scale-75 sm:scale-100" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroBlog;
