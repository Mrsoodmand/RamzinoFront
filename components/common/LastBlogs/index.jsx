import AddIcon from "components/common/addIcon";
import IconBlog from "components/common/LastBlogs/IconBlog.svg";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import dynamic from "next/dynamic";

const IconDate = dynamic(
  () => import("components/common/LastBlogs/IconDate.svg"),
  { ssr: false }
);
const IconView = dynamic(
  () => import("components/common/LastBlogs/IconView.svg"),
  { ssr: false }
);

function LastBlogs({ data, title = "جدیدترن مقالات" }) {
  return (
    <section className="container mt-12 sm:mt-36  fade-in">
      <div className="center-between mb-[23px] sm:mb-[33px]">
        <h4 className="text-title font-semibold text-[15px] xs:text-base sm:text-2xl">
          {title}
        </h4>
        <Link
          title="مشاهده"
          href="/blogs"
          className="full-center bg-primary w-[120px] sm:w-[212px] h-[46px] sm:h-[60px] rounded-[6px] sm:rounded-[4px] gap-[7px]  text-primaryText glass hover:opacity-90 text-[13px] sm:text-base"
        >
          <AddIcon>
            <IconBlog className="[&>path]:stroke-primaryText scale-[0.8] sm:scale-100" />
          </AddIcon>
          <span className="hidden sm:inline">مشاهده تمام مقالات</span>
          <span className="sm:hidden">همه مقالات</span>
        </Link>
      </div>
      <Swiper
        modules={[Autoplay]}
        pagination={false}
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={false}
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        centeredSlides={false}
        centerInsufficientSlides={false}
        centeredSlidesBounds={false}
        dir="rtl"
        speed={600}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            centeredSlides: false,
            spaceBetween: 13,
          },
          397: {
            slidesPerView: 1.8,
            centeredSlides: false,
            spaceBetween: 13,
          },
          493: {
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          513: {
            slidesPerView: 1.8,
            centeredSlides: true,
          },
          671: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          867: {
            slidesPerView: 2.5,
            centeredSlides: true,
          },

          1045: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
      >
        {data?.map((e, i) => (
          <SwiperSlide key={i}>
            <Link
              title="مشاهده"
              href={`/blogs/${e?.slug}`}
              className="w-full rounded-[3px] sm:rounded-[5px] bg-white p-[9px] sm:p-[14px] group block"
            >
              <div className="overflow-hidden rounded-[3px] sm:rounded-[5px]">
                <Image
                  src={e?.cover}
                  alt={e?.name}
                  width={405}
                  height={225}
                  layout="fixed"
                  className="rounded-[3px] sm:rounded-[5px] min-w-full group-hover:scale-110 group-hover:grayscale"
                />
              </div>
              <div>
                <div className="text-[#373A41] dark:text-[#FAFAFA] text-[11px] sm:text-[18px] font-semibold my-[11px] sm:my-[17px] ">
                  {e?.name}
                </div>
                <div className="center gap-1 sm:gap-2">
                  <div className="center gap-0.5 sm:gap-[9px] text-[#373A41] dark:text-[#FAFAFA] text-[9px] sm:text-sm">
                    <AddIcon>
                      <IconDate className="scale-[0.7] sm:scale-100 dark:[&>*]:stroke-[#FAFAFA]" />
                    </AddIcon>
                    {new Date(e?.created_at)?.toLocaleDateString("fa-IR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="center gap-0.5 sm:gap-[9px] text-[#373A41] dark:text-[#FAFAFA] text-[9px] sm:text-sm">
                    <AddIcon>
                      <IconView className="scale-[0.7] sm:scale-100 dark:[&>*]:stroke-[#FAFAFA]" />
                    </AddIcon>
                    {e?.view || 0} بازید
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default LastBlogs;
