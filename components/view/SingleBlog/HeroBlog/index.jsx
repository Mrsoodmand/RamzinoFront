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

function HeroBlog({ data }) {
  return (
    <header className="w-full sm:bg-white pt-6 fade-in">
      <h1 className="text-[#262931] dark:text-[#fff] font-semibold text-[18px] sm:text-xl md:text-2xl sm:px-4">
        {data?.title}
      </h1>
      <div className="relative">
        <Image
          src={data?.cover}
          alt={data?.title}
          layout="responsive"
          width={300}
          height={180}
          className="max-h-[248px] sm:max-h-[596px] h-[600px] object-cover mt-4 sm:mt-6"
          priority
          loading="eager"
          sizes={`(max-width: 1024px) 100vw, 33vw"`}
        />
        <div className="sm:px-5 py-4 sm:py-[28px] center-between">
          <div className="sm:hidden"></div>
          <div className="absolute bottom-[75px] right-3 sm:bottom-0 sm:right-0 sm:relative center gap-1.5 sm:gap-2.5">
            <Link
              href={`/blogs?category=${data?.category}`}
              className="bg-primary rounded-full h-[27px] sm:h-10 px-[13px] sm:px-[18px] full-center text-[#404040] font-semibold text-[9px] sm:text-sm"
            >
              {data?.category}
            </Link>
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
