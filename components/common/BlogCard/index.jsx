import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import classes from "hooks/classes";
import { formatFaDate } from "hooks/faDate";

const IconDate = dynamic(
  () => import("components/common/LastBlogs/IconDate.svg"),
  { ssr: false },
);
const IconView = dynamic(
  () => import("components/common/LastBlogs/IconView.svg"),
  { ssr: false },
);

export const FALLBACK_COVER = "/images/tests/blog-test3.png";

const DEFAULT_SIZES = "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw";

/**
 * The single blog card used across the site: blog index, related posts,
 * home/gateway sliders and tag pages.
 *
 * `animate` staggers an entrance for grids; sliders pass false so looped
 * slides don't re-run it.
 */
function BlogCard({
  data,
  index = 0,
  animate = true,
  className = "",
  sizes = DEFAULT_SIZES,
}) {
  const [imgSrc, setImgSrc] = useState(data?.cover || FALLBACK_COVER);
  const href = `/blogs/${data?.slug}`;

  return (
    <article
      className={classes(
        "group flex flex-col overflow-hidden rounded-[5px] bg-white shadow-[0px_0px_75px_0px_#0000000B] transition-all duration-500 hover:-translate-y-[3px] hover:shadow-medium",
        animate && "animate-fade-in-up",
        className,
      )}
      style={animate ? { animationDelay: `${Math.min(index, 8) * 60}ms` } : undefined}
    >
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block w-full aspect-[16/9] overflow-hidden bg-themeColor"
      >
        <Image
          src={imgSrc}
          onError={() => setImgSrc(FALLBACK_COVER)}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={sizes}
        />
        {data?.category && (
          <span className="absolute top-3 right-3 h-7 rounded-full bg-primary px-3 text-[12px] font-semibold text-primaryText inline-flex items-center">
            {data.category}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col px-4 pb-[18px] pt-3.5">
        <h3 className="mb-2 line-clamp-2 text-[15px] font-semibold leading-[1.65] text-title">
          <Link href={href} className="hover:opacity-80">
            {data?.name}
          </Link>
        </h3>
        {data?.short_detail && (
          <p className="mb-3.5 line-clamp-2 text-[13px] leading-[1.9] text-[#383838] dark:text-[#D3DADD]">
            {data.short_detail}
          </p>
        )}
        <div className="mt-auto flex items-center gap-3.5 text-[12px] font-medium text-[#5C6165] dark:text-[#8FA3AB]">
          <span className="center gap-1.5">
            <IconDate className="scale-90 dark:[&>*]:stroke-[#8FA3AB]" />
            {data?.date_shamsi || formatFaDate(data?.created_at)}
          </span>
          <span className="center gap-1.5">
            <IconView className="scale-90 dark:[&>*]:stroke-[#8FA3AB]" />
            {data?.view || 0} بازدید
          </span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
