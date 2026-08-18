import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const IconStar = dynamic(
  () => import("components/view/SingleCurrency/icons/IconStar.svg"),
  { ssr: false }
);
const ModalComment = dynamic(() => import("./ModalComment"), { ssr: false });

function Comments() {
  const [openComment, setOpenComment] = useState(false);

  return (
    <section className="fade-in container-pagination-color -my-28 sm:my-0">
      <div className="full-center flex-col">
        <div className="text-[#1D1D1D] dark:text-[#FFFFFF] font-semibold text-[23px] sm:text-[30px] text-center">
          نظرات کاربران
        </div>
        <div className="text-[#383838] dark:text-[#DFDFDF] font-normal text-[15px] sm:text-[18px] my-5">
          برای این ارز تا کنون 6,346 نظر ارسال شده هست
        </div>
        <button
          onClick={() => setOpenComment(true)}
          className="btn btn-accent"
        >
          ثبت نظر
        </button>
      </div>
      <div className="mt-12 px-5 sm:px-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={"auto"}
          spaceBetween={26}
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
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 13,
            },
            397: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 13,
            },
            493: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            513: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
            703: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            883: {
              slidesPerView: 2.5,
              centeredSlides: true,
            },
            1145: {
              slidesPerView: 3.3,
              centeredSlides: true,
            },
            1357: {
              slidesPerView: 4.2,
              centeredSlides: true,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6]?.map((e, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div className={classes(isActive ? "" : "opacity-30", "-mb-2")}>
                  <div className="center-between">
                    <div className="center gap-2 sm:gap-2.5">
                      <Image
                        src="/images/tests/avatar2.webp"
                        alt="NAME"
                        layout="fixed"
                        width={57}
                        height={57}
                        className="rounded-full max-w-[46px] sm:max-w-[57px]"
                      />
                      <div>
                        <div className="text-[#383838] dark:text-[#fff] text-sm sm:text-[18px]">
                          مجتبی قرگولی
                        </div>
                        <div className="center gap-1 sm:gap-2.5 mt-[7px]">
                          {[1, 2, 3, 4, 5]?.map((e, i) => (
                            <IconStar
                              key={i}
                              className={classes(
                                i !== 4
                                  ? "[&>*]:fill-[#EA942D] [&>*]:stroke-[#EA942D]"
                                  : "dark:[&>path]:stroke-[#fff]",
                                "scale-[0.8] sm:scale-100"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-[#52555A] dark:text-[#DFDFDF] text-[11px] sm:text-sm">
                      23 دقیقه قبل
                    </div>
                  </div>
                  <div className="text-[#454545] dark:text-[#E3E2E1] text-justify leading-[23px] bg-[#F5F5F5] dark:bg-[#001F28] rounded-[4px] px-4 sm:px-6 py-3 sm:py-5 mt-[22px] sm:mt-7 relative text-[13px] sm:text-base">
                    <i className="absolute top-0 right-3 bg-[#F5F5F5] dark:bg-[#001F28] w-[27px] h-[20px] -translate-y-2/4 rotate-45 rounded-md"></i>
                    خرید ارز دیجیتال در کیف پول من اولین سامانه نگهداری ارزهای
                    دیجیتال پیشگام کشور انجام می‌شود که با سبک و استانداردهای
                    جدید، سرویس‌های نگهداری و خرید رمز ارزهای الکترونیک را برای
                    افراد حقیقی و حقوقی آماده کرده است.
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ModalComment
        open={openComment}
        handelClose={() => setOpenComment(false)}
      />
    </section>
  );
}

export default Comments;
