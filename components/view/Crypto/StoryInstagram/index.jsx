import AddIcon from "components/common/addIcon";
import IconInstagram from "icons/Home/IconInstagram.svg";
import IconFlashLeft from "icons/Home/IconFlashLeft.svg";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Link from "next/link";

function StoryInstagram() {
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
    <section className="container mt-36  fade-in">
      <div className="center-between mb-[23px] sm:mb-[33px]">
        <h4 className="text-title font-semibold text-[15px] xs:text-base sm:text-2xl">
          استوری های رمزینو در اینستاگرام
        </h4>
        <Link
          title="مشاهده"
          href="#"
          className="full-center bg-primary w-[122px] sm:w-[212px] h-[46px] sm:h-[60px] rounded-[6px] sm:rounded-[4px] sm:gap-[7px]  text-primaryText glass hover:opacity-90 text-[13px] sm:text-base"
        >
          <AddIcon>
            <IconInstagram className="[&>path]:stroke-primaryText scale-[0.6] sm:scale-100" />
          </AddIcon>
          <span className="hidden sm:inline">عضویت در</span> اینستاگرام
        </Link>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
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
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 13,
          },
          397: {
            slidesPerView: 1.8,
            centeredSlides: true,
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
          793: {
            slidesPerView: 3,
            centeredSlides: true,
          },

          980: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
      >
        {[1, 2, 23, 4, 45, 5, , 4]?.map((e, i) => (
          <SwiperSlide key={i}>
            <Image
              src="/images/tests/Rectangle 4392.webp"
              alt="STORY-1"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="full-center gap-6 sm:gap-10 mt-[23px] sm:mt-[33px]">
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

export default StoryInstagram;
