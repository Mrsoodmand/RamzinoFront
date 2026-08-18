import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const IconWrite = dynamic(
  () => import("components/view/Blogs/icons/IconWrite.svg"),
  { ssr: false }
);
const IconDate = dynamic(
  () => import("components/view/Blogs/icons/IconDate.svg"),
  { ssr: false }
);
const IconPodcast = dynamic(
  () => import("components/view/Blogs/icons/IconPodcast.svg"),
  { ssr: false }
);
const IconBottom = dynamic(() => import("icons/Layout/IconArrowBottom.svg"), {
  ssr: false,
});

function Podcasts({ data }) {
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
    <section className="fade-in container -mb-16 sm:mb-0 mt-14 sm:mt-20">
      <div className="center-between mb-[27px] sm:mb-[36px]">
        <div className="text-title font-semibold text-lg sm:text-2xl">
          جدیدترین پادکست ها
        </div>
        <button className="hidden sm:full-center glass hover:opacity-80 text-[#404040] bg-primary rounded-lg text-base gap-2.5 w-[206px] h-[56px]">
          مشاهده همه پادکست ها
        </button>
      </div>

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
            slidesPerView: 1.2,
            centeredSlides: false,
            spaceBetween: 15,
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
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
      >
        {data?.map((e, i) => (
          <SwiperSlide key={e?.id}>
            <Link
              title="مشاهده"
              aria-label="مشاهده"
              href={`/blogs/${e?.slug}`}
              className="w-full rounded-[5px] h-[320px] sm:h-[359px] relative overflow-hidden block group hover:opacity-90"
            >
              <Image
                src={e?.cover}
                layout="responsive"
                width={50}
                height={50}
                alt={e?.name}
                className="absolute top-0 left-0 object-cover w-full h-full min-w-full min-h-full group-hover:scale-110"
              />

              <div className="absolute bg-[#106C65B2] top-0 left-0 min-w-full min-h-full px-3 sm:px-4 pt-2.5 sm:pt-5">
                <div className="center gap-[10px] sm:gap-5">
                  <div className="center gap-1 sm:gap-[9px] text-xs sm:text-sm  text-[#FAFAFA]">
                    <IconWrite className="[&>path]:stroke-[#FAFAFA] scale-90 sm:scale-100" />
                    {e?.author}
                  </div>
                  <div className="center gap-0 sm:gap-[4px] text-xs sm:text-sm  text-[#FAFAFA]">
                    <IconDate className="scale-[0.6] sm:scale-75 [&>*]:stroke-[#FAFAFA]" />
                    {new Date(e?.created_at)?.toLocaleDateString("fa-IR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <div className="absolute top-2/4 left-0  translate-y-[-35%] text-[#fff] text-[18px] sm:text-xl font-semibold w-full full-center flex-col gap-4 sm:gap-6">
                  <IconPodcast className="scale-90 sm:scale-100" />
                  {e?.name}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="full-center gap-6 sm:hidden mt-6 z-10 sticky">
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

export default Podcasts;
