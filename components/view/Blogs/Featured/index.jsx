import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "hooks/classes";
import { FALLBACK_COVER } from "components/common/BlogCard";

function FeaturedCard({ data, primary, index }) {
  // Same fallback BlogCard uses. Without it a post with no `cover` hands
  // next/image an undefined src and the card renders as a bare grey box.
  const [imgSrc, setImgSrc] = useState(data?.cover || FALLBACK_COVER);

  return (
    <Link
      href={`/blogs/${data?.slug}`}
      className="animate-fade-in-up group relative block h-full overflow-hidden rounded-[5px] bg-white shadow-[0px_0px_75px_0px_#0000000B]"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <span className="relative block aspect-[16/9] w-full overflow-hidden bg-themeColor">
        <Image
          src={imgSrc}
          onError={() => setImgSrc(FALLBACK_COVER)}
          alt=""
          fill
          priority={primary}
          // The covers arrive ~440px wide and still render into a ~583px box,
          // so they are upscaled either way; the extra quality keeps the
          // re-encode from adding its own softness on top of that.
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 620px"
        />
        <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,20,26,.92)_0%,rgba(0,20,26,.55)_38%,rgba(0,20,26,0)_72%)]" />
      </span>

      <span className="absolute inset-x-0 bottom-0 block p-4 sm:p-[26px]">
        {data?.category && (
          <span className="inline-flex h-7 items-center rounded-full bg-primary px-3 text-[12px] font-semibold text-primaryText">
            {data.category}
          </span>
        )}
        {/* Literal #fff, not `text-white`: that token maps to --color-white,
            which flips to the dark surface colour in dark mode. This sits on
            the image scrim, so it has to stay white in both themes. */}
        <span
          className={classes(
            "mt-2 block font-semibold leading-[1.5] text-[#fff]",
            primary ? "text-base sm:text-[21px]" : "text-[15px] sm:text-[17px]",
          )}
        >
          {data?.name}
        </span>
      </span>
    </Link>
  );
}

function Featured({ data }) {
  const items = (Array.isArray(data) ? data : []).filter(Boolean).slice(0, 2);
  if (!items.length) return null;

  return (
    <section aria-labelledby="blogs-featured" className="container mt-6 sm:mt-8">
      <h2
        id="blogs-featured"
        className="mb-[18px] text-xl font-semibold text-title sm:text-2xl"
      >
        منتخب سردبیر
      </h2>
      {/* Equal columns, and the crop comes from a 16/9 box on each card rather
          than a shared fixed row height. The old 1.55fr/1fr split forced the
          second card into a ~1.19 box, which sliced most of a 16:9 cover away,
          and the two cards ended up with different effective crops. Equal
          widths plus one aspect ratio keeps both the crop and the card heights
          identical, and caps how far the ~440px-wide covers get upscaled. */}
      <div
        className={classes(
          "grid gap-3 sm:gap-5",
          items.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1",
        )}
      >
        {items.map((item, i) => (
          <FeaturedCard
            key={item?.id ?? i}
            data={item}
            primary={i === 0}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Featured;
