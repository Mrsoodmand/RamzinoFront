import dynamic from "next/dynamic";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IconFlashLeft from "icons/Home/IconFlashLeft.svg";
import AddIcon from "components/common/addIcon";
import { useRef } from "react";
import Card from "./Card";

function SliderBest({ data }) {
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
    <section className="container sm:mt-1 shadow-swiper fade-in">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 1.3,
            centeredSlides: false,
            spaceBetween: 13,
          },
          551: {
            slidesPerView: 1.3,
            centeredSlides: false,
          },
          755: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          885: {
            slidesPerView: 2.5,
            centeredSlides: false,
          },
          990: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1239: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
          },
        }}
      >
        {[data?.newest, data?.profitable, data?.mostDamaging]?.map((e, i) => (
          <SwiperSlide key={i}>
            <Card data={e} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="full-center sm:hidden gap-6 sm:gap-10 -mt-4">
        <button
          title="قبلی"
          onClick={onPrev}
          className="full-center border border-solid border-[#C3C3C3] dark:border-[#0F3F4E] rounded-md sm:rounded-lg w-[33px] sm:w-[42px] h-[33px] sm:h-[42px] glass hover:opacity-80"
        >
          <AddIcon>
            <IconFlashLeft className="[&>path]:stroke-title scale-75 sm:scale-90 rotate-180" />
          </AddIcon>
        </button>
        <button
          title="بعدی"
          onClick={onNext}
          className="full-center bg-[#E6F4EF] dark:bg-[#032934] rounded-lg w-[33px] sm:w-[42px] h-[33px] sm:h-[42px] glass hover:opacity-80"
        >
          <AddIcon>
            <IconFlashLeft className="[&>path]:stroke-title scale-75 sm:scale-90" />
          </AddIcon>
        </button>
      </div>
    </section>
  );
}

export default SliderBest;
