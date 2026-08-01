import classes from "hooks/classes";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function HottestSlider() {
  return (
    <section className="container mt-16 mx-auto container-pagination  fade-in">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
            slidesPerView: 2.5,
            centeredSlides: true,
          },
          990: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1239: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
      >
        {[1, 2, 2, 2, 2, 2]?.map((e, i) => (
          <SwiperSlide key={i}>
            <Link
              title="مشاهده"
              href="#"
              className={classes(
                "min-h-[131px] sm:min-h-[195px] rounded-md sm:rounded-[10px] px-4 flex items-start justify-center flex-col hover:opacity-80 hover:shadow-md",
                i % 2 === 1 ? " bg-primary" : "bg-primaryDark"
              )}
            >
              <Image
                src="/images/tests/usdt.webp"
                width={86}
                height={114}
                layout="fixed"
                alt="NAME"
                className="absolute top-2/4 left-5 sm:left-9 translate-y-[-40%] max-w-[50px] sm:max-w-[86px]"
              />
              <div
                className={classes(
                  "font-semibold text-xs sm:text-[18px] mb-2 sm:mb-3",
                  i % 2 === 0 ? "text-[#fff]" : "text-[#0C0C0C]"
                )}
              >
                خرید و فروش با بونس 100 %
              </div>
              <p
                className={classes(
                  "text-[8px] sm:text-sm mb-4 sm:mb-6 max-w-[95px] sm:max-w-[142px]",
                  i % 2 === 0 ? "text-[#fff]" : "text-[#0C0C0C]"
                )}
              >
                بهترین و سریع ترین راه خرید و فروش
              </p>
              <button
                title="ورود و ثبت نام"
                className={classes(
                  "full-center text-[6px] sm:text-[10px] font-bold w-[62px] sm:w-[92px] h-[22px] sm:h-[34px] rounded-[3px]",
                  i % 2 === 1
                    ? "bg-[#fff] text-[#0C0C0C]"
                    : "bg-[#00F6C8] text-[#2B758C]"
                )}
              >
                ورود و ثبت نام
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HottestSlider;
