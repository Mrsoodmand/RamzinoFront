import Image from "next/image";
import Link from "next/link";
import { FALLBACK_COVER } from "components/common/BlogCard";
import { formatFaDate } from "../taxonomy";

function LatestNews({ items }) {
  if (!items?.length) return null;

  return (
    <section
      aria-labelledby="blogs-news"
      className="rounded-[5px] bg-white px-[18px] pb-5 pt-[18px] shadow-[0px_0px_75px_0px_#0000000B]"
    >
      <h2 id="blogs-news" className="text-base font-semibold text-title">
        آخرین اخبار
      </h2>
      <p className="mb-3.5 mt-1 text-[12px] text-[#5C6165] dark:text-[#8FA3AB]">
        تازه‌ترین‌ها از بازار و رمزینو
      </p>

      <div className="flex flex-col">
        {items.map((item, i) => (
          <Link
            key={item?.id ?? i}
            href={`/blogs/${item?.slug}`}
            className={classesRow(i)}
          >
            {/* 16/9 like every other cover on the site. At 16/11 these thumbs
                cropped a different slice of the same artwork than the cards. */}
            <span className="relative block w-[76px] shrink-0 aspect-[16/9] overflow-hidden rounded-[4px] bg-themeColor">
              <Image
                src={item?.cover || FALLBACK_COVER}
                alt=""
                fill
                className="object-cover"
                sizes="76px"
              />
            </span>
            <span className="min-w-0">
              <span className="mb-1.5 line-clamp-2 block text-[13px] font-medium leading-[1.7] text-title">
                {item?.name}
              </span>
              <time className="text-[11px] text-[#5C6165] dark:text-[#8FA3AB]">
                {formatFaDate(item?.created_at)}
              </time>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

const classesRow = (i) =>
  [
    "grid grid-cols-[76px_minmax(0,1fr)] items-center gap-3 py-3 transition-opacity duration-300 hover:opacity-75",
    i === 0
      ? "pt-0.5"
      : "border-t border-solid border-[#DFE0E1] dark:border-[#003E52]",
  ].join(" ");

export default LatestNews;
