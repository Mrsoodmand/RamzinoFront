import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import CardBlog from "../LastBlogs/CardBlog";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

const IconVideo = dynamic(
  () => import("components/view/Blogs/icons/IconVideo.svg"),
  { ssr: false }
);
const IconWrite = dynamic(
  () => import("components/view/Blogs/icons/IconWrite.svg"),
  { ssr: false }
);
const IconDate = dynamic(
  () => import("components/view/Blogs/icons/IconDate.svg"),
  { ssr: false }
);

const IconBottom = dynamic(() => import("icons/Layout/IconArrowBottom.svg"), {
  ssr: false,
});

function LastVideos({ data }) {
  const swiperRef = useRef();

  const onNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const onPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="container -mt-28 sm:mt-0">
      <div className="fade-in center-between sm:mb-[33px]">
        <div className="text-title font-semibold text-[22px] sm:text-2xl">
          آخرین ویدیو ها
        </div>
        <button className="btn btn-accent hidden">
          <IconVideo />
          مشاهده تمام مقالات
        </button>
      </div>
      {/* in desktop  */}
      <div className="fade-in hidden lg:grid grid-cols-12 gap-x-[14px]">
        <div className="col-span-6">
          <ul>
            {data?.map((e, i) => (
              <li key={e?.id} className="mb-3 last:mb-0">
                <Link
                  title="مشاهده"
                  aria-label="مشاهده"
                  href={`/blogs/${e?.slug}`}
                  className="center gap-[18px] bg-[#F5F5F5] dark:bg-[#001F28] rounded-[5px] w-full min-h-[90px] py-2 block px-3 group hover:bg-white hover:shadow-[0px_0px_74px_0px_#0000000A]"
                >
                  <div className="rounded-[3px] overflow-hidden">
                    <Image
                      src={e?.cover}
                      alt={e?.name}
                      layout="fixed"
                      width={136}
                      height={78}
                      className="max-h-[78px] object-cover group-hover:scale-110 group-hover:grayscale"
                    />
                  </div>
                  <div>
                    <div className="text-[#373A41]  dark:text-[#E3E2E1] font-semibold mb-[13px]">
                      {e?.name}
                    </div>
                    <div className="center gap-5">
                      <div className="center gap-[9px] text-sm dark:text-[#E3E2E1]">
                        <IconWrite className="dark:[&>path]:stroke-[#E3E2E1]" />
                        {e?.author}
                      </div>
                      <div className="center gap-[4px] text-sm dark:text-[#E3E2E1]">
                        <IconDate className="[&>*]:stroke-[#373A41] scale-75 dark:[&>*]:stroke-[#E3E2E1]" />
                        {new Date(e?.created_at)?.toLocaleDateString("fa-IR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6">
          <CardBlog
            data={data[0]}
            image="/images/tests/video-test1.png"
            des={data[0]?.des}
            category={true}
            video={true}
          />
        </div>
      </div>
      {/* in mobile */}
      <div className="w-full lg:hidden shadow-swiper -mt-5">
        <Swiper
          ref={swiperRef}
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
              slidesPerView: 1.12,

              spaceBetween: 9,
            },

            513: {
              slidesPerView: 1.8,
            },
            671: {
              slidesPerView: 2,
            },
            867: {
              slidesPerView: 2.5,
            },

            1045: {
              slidesPerView: 3,
            },
          }}
        >
          {data?.map((e, i) => (
            <SwiperSlide key={e?.id}>
              <CardBlog
                video
                des="تابه‌حال شده برای تایید روند بیت کوین به مشکل بخورید؟ یا نتوانید با اطمینان کافی روی روند فعلی معامله باز…"
                data={e}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="fade-in full-center gap-6 sm:hidden -mt-4 z-10 sticky">
        <button
          title="قبلی"
          onClick={onPrev}
          className="full-center rounded-full w-[33px] sm:w-[35px] h-[33px] sm:h-[35px] hover:opacity-80 shadow-[0px_0px_74px_0px_#0000000A] bg-white"
        >
          <IconBottom className="[&>path]:stroke-title scale-75 sm:scale-90 -rotate-90" />
        </button>
        <button
          title="بعدی"
          onClick={onNext}
          className="full-center rounded-full w-[33px] sm:w-[35px] h-[33px] sm:h-[35px] hover:opacity-80 shadow-[0px_0px_74px_0px_#0000000A] bg-white"
        >
          <IconBottom className="[&>path]:stroke-title scale-75 sm:scale-90 rotate-90" />
        </button>
      </div>
    </section>
  );
}

export default LastVideos;
