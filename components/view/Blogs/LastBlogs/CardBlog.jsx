import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const IconDate = dynamic(
  () => import("components/common/LastBlogs/IconDate.svg"),
  { ssr: false },
);
const IconView = dynamic(
  () => import("components/common/LastBlogs/IconView.svg"),
  { ssr: false },
);
const IconPlay = dynamic(
  () => import("components/view/Blogs/icons/IconPlay.svg"),
  { ssr: false },
);

function CardBlog({
  des = `   تابه‌حال شده برای تایید روند بیت کوین به مشکل بخورید؟ یا نتوانید با
          اطمینان کافی روی روند فعلی معامله باز…`,

  image = "/images/tests/blog-test3.png",
  category = null,
  video = false,
  data,
}) {
  const [imgSrc, setImgSrc] = useState(data?.cover || image);
  return (
    <Link
      href={`/blogs/${data?.slug}`}
      title="مشاهده"
      className="fade-in col-span-12 sm:col-span-6 lg:col-span-4 shadow-[0px_0px_74px_0px_#0000000A] rounded-[5px] bg-white px-[14px] py-3.5 group hover:opacity-90 block"
    >
      <div className="overflow-hidden rounded-[5px] relative">
        {category && (
          <div className="text-[#fff] font-semibold bg-primaryDark rounded-full h-[45px] px-4 w-fit absolute top-6 right-5 full-center z-10">
            {data?.category}
          </div>
        )}
        {video && (
          <span className="absolute top-2/4 left-2/4 -translate-x-2/4 z-10 -translate-y-2/4 group-hover:rotate-[120deg]">
            <IconPlay className="scale-75 sm:scale-100" />
          </span>
        )}
        <Image
          src={imgSrc}
          onError={() => setImgSrc(image)}
          alt={data?.name}
          layout="responsive"
          width={30}
          height={30}
          sizes="(max-width: 768px) 100vw, (max-width: 960px) 50vw, 33vw"
          className="group-hover:scale-105 group-hover:grayscale"
        />
      </div>
      <div>
        <div className="center gap-1 sm:gap-2 mt-[14px]">
          <div className="center gap-0.5 sm:gap-[9px] text-[#373A41] dark:text-[#FAFAFA] text-[9px] sm:text-sm">
            <IconDate className="scale-[0.7] sm:scale-100 dark:[&>*]:stroke-[#FAFAFA]" />
            {new Date(data?.created_at)?.toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="center gap-0.5 sm:gap-[9px] text-[#373A41] dark:text-[#FAFAFA] text-[9px] sm:text-sm">
            <IconView className="scale-[0.7] sm:scale-100 dark:[&>*]:stroke-[#FAFAFA]" />
            {data?.view || 0} بازید
          </div>
        </div>
        <div className="text-[#373A41] dark:text-[#FAFAFA] text-[11px] sm:text-[18px] font-semibold my-[11px] sm:my-3 line-clamp-1">
          {data?.name}
        </div>
        <div className="text-[#373A41] dark:text-[#DFDFDF] font-semibold text-[11px] sm:text-[14px] text-justify leading-[22px] sm:leading-[27px] line-clamp-2">
          {data.short_detail}
        </div>
      </div>
    </Link>
  );
}

export default CardBlog;
