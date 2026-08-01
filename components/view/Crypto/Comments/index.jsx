import { Swiper, SwiperSlide } from "swiper/react";
import dataListKeys from "./data";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
import classes from "hooks/classes";
import IconNext from "icons/Home/IconNext.svg";
import AddIcon from "components/common/addIcon";
import { useRef } from "react";

function Comments() {
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
    <section className="mt-36 container swiper-comments  fade-in">
      <header className="mb-[65px]">
        <h4 className="text-title text-xl sm:text-[32px] font-semibold text-center mb-[18px] sm:mb-[29px]">
          مورد اعتماد مشتریان مان هستیم
        </h4>
        <p className="text-[#383838] dark:text-[#f5f5f5] text-sm sm:text-base font-normal text-center">
          خرید ارز دیجیتال در رمزینو من اولین سامانه نگهداری ارزهای دیجیتال
          پیشگام کشور انجام می‌شود
        </p>
      </header>
      <section className="grid grid-cols-12 gap-y-[15px] gap-x-2 sm:gap-[15px] mb-[32px]">
        {dataListKeys?.map((e, i) => (
          <div
            key={i}
            className="col-span-6 2md:col-span-3 bg-white rounded-[2px] sm:rounded-[4px] full-center flex-col gap-3 sm:gap-5 lg:gap-6 h-[96px] sm:h-[160px] lg:h-[180px] hover:opacity-85"
          >
            <div className="text-primaryDark dark:text-[#E3E2E1] text-center font-semibold text-2xl sm:text-[36px] lg:text-[45px]">
              {e?.value}
            </div>
            <div className="text-[10px] sm:text-base lg:text-xl font-semibold text-title dark:text-[#FAFAFA] text-center">
              {e?.key}
            </div>
          </div>
        ))}
      </section>
      <section className="relative">
        <div className="hidden 2md:block absolute left-0 top-0 h-full w-[150px] bg-gradient-to-l from-[#00c2c200] to-[#FAFAFA] dark:to-[#02151b] z-10"></div>
        <div className="hidden 2md:block absolute right-0 top-0 h-full w-[150px] bg-gradient-to-r from-[#00c2c200] to-[#FAFAFA] dark:to-[#02151b] z-10"></div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={false}
          slidesPerView={"auto"}
          spaceBetween={24}
          navigation={false}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          centeredSlides={true}
          centerInsufficientSlides={false}
          centeredSlidesBounds={false}
          dir="rtl"
          speed={600}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            908: {
              slidesPerView: "auto",
            },
          }}
        >
          {[1, 2, 2, 4, , 455]?.map((e, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div className="">
                  <div
                    className={classes(
                      "center py-5 sm:py-10 px-4 sm:px-12 text-justify text-[#383838] relative rounded-[4px] text-[13px] sm:text-base",
                      isActive ? "bg-primary " : "bg-"
                    )}
                  >
                    خرید ارز دیجیتال در کیف پول من اولین سامانه نگهداری ارزهای
                    دیجیتال پیشگام کشور انجام می‌شود که با سبک و استانداردهای
                    جدید، سرویس‌های نگهداری و خرید رمز ارزهای الکترونیک را برای
                    افراد حقیقی و حقوقی آماده کرده است.
                    <i
                      className={classes(
                        "block bg-primary w-4 sm:w-5 h-4 sm:h-5 rounded-sm rotate-45 absolute bottom-0 right-8 sm:right-11 translate-y-2/4",
                        isActive ? "" : "opacity-0"
                      )}
                    ></i>
                  </div>
                  <div
                    className={classes(
                      "center-between px-6 py-5 sm:py-2 mt-[27px] sm:mt-[32px] flex-col sm:flex-row",
                      isActive ? "bg-themeColor dark:bg-[#001F28]" : ""
                    )}
                  >
                    <div className="center gap-[18px] flex-col sm:flex-row mb-[18px] sm:mb-0">
                      <Image
                        src="/images/tests/avatar2.webp"
                        alt="USERNAME"
                        width={57}
                        height={57}
                        layout="fixed"
                        className="rounded-full"
                      />
                      <div className="center gap-[11px]">
                        <span className="text-[#383838] dark:text-[#fff] text-[18px]">
                          مجتبی قرگولی
                        </span>
                        <span className="center gap-[7px] text-[#868686] dark:text-[#f5f5f5]">
                          <i className="w-[7px] h-[7px] bg-[#868686] dark:text-[#f5f5f5] rounded-full block"></i>
                          موسس مجموعه آریاپی
                        </span>
                      </div>
                    </div>
                    <Image
                      src="/images/tests/logo-aryapay.webp"
                      alt="COMPONY_NAME"
                      width={130}
                      height={26}
                      layout="fixed"
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="full-center sm:hidden gap-8 mt-[27px]">
          <button
            title="قبلی"
            onClick={onPrev}
            className="bg-white rounded-full full-center shadow-[0px_0px_74px_0px_#0000000A] w-[35px] h-[35px]"
          >
            <AddIcon>
              <IconNext className="[&>path]:stroke-title" />
            </AddIcon>
          </button>
          <button
            title="بعدی"
            onClick={onNext}
            className="bg-white rounded-full full-center shadow-[0px_0px_74px_0px_#0000000A] w-[35px] h-[35px]"
          >
            <AddIcon>
              <IconNext className="rotate-180 [&>path]:stroke-title" />
            </AddIcon>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Comments;
