import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dataList from "./data";
import styles from "./styles.module.css";
import classes from "hooks/classes";

function WyMe({ data }) {
  return (
    <article className="mx-auto w-full max-w-[1332px] px-5 mt-36 fade-in">
      <div className="full-center gap-10 mb-[29px] sm:mb-[52px]">
        <div className="w-[150px] sm:w-[163px] h-[97px] sm:h-[174px] relative full-center">
          <Image
            src="/images/star-primary-outline-light.webp"
            alt="Star-shape"
            width={52}
            height={52}
            layout="fixed"
            className="animate-pulse max-w-[29px] sm:max-w-[52px]"
          />
          <div
            className={classes(
              "absolute left-0 top-0 h-[69px] sm:h-[125px] w-[3px] sm:w-1.5  bg-gradient-to-t from-[#6CE4DB] from-0% to-[#6CE4DB00] rounded-lg",
              styles?.animationLine
            )}
          ></div>
          <div
            className={classes(
              "absolute right-0 bottom-0 h-[54px] sm:h-[98px] w-[3px] sm:w-1.5  bg-gradient-to-t from-[#6CE4DB] from-0% to-[#6CE4DB00] rounded-lg",
              styles?.animationLine
            )}
          ></div>
        </div>
        <h3 className="hidden sm:block text-title text-center max-w-[627px] w-full text-[28px] font-semibold">
          چرا رمزینو؟ امنیت، سرعت و تجربه متفاوت در معاملات ارزهای دیجیتال!{" "}
        </h3>
        <h3 className="sm:hidden text-title text-center max-w-[627px] w-full text-xl font-semibold">
          چرا رمزینو؟{" "}
        </h3>
        <div className="w-[150px] sm:w-[163px] h-[97px] sm:h-[174px] relative full-center">
          <Image
            src="/images/star-primary-light.webp"
            alt="Star-shape"
            width={52}
            height={52}
            layout="fixed"
            className="animate-pulse max-w-[29px] sm:max-w-[52px]"
          />
          <div
            className={classes(
              "absolute left-0 top-0 h-[54px] sm:h-[98px] w-[3px] sm:w-1.5  bg-gradient-to-t from-[#6CE4DB] from-0% to-[#6CE4DB00] rounded-lg",
              styles?.animationLine
            )}
          ></div>
          <div
            className={classes(
              "absolute right-0 bottom-0 h-[69px] sm:h-[125px] w-[3px] sm:w-1.5  bg-gradient-to-t from-[#6CE4DB] from-0% to-[#6CE4DB00] rounded-lg",
              styles?.animationLine
            )}
          ></div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-12 gap-6 gap-y-16">
        <div className="col-span-12 lg:col-span-4">
          <div
            className="relative z-10 px-6 bg-white dark:bg-[#02151B] rounded-lg shadow-[0px_0px_102.34px_0px_#0000000D] dark:shadow-[0px_0px_102.34px_0px_#0000000D] border-[0.97px] border-[#DFDFDF] dark:border-0 flex items-center justify-center flex-col"
            style={{
              backgroundImage: "url('/images/landing/lines-bg.webp')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <img
              src="/images/landing/heart-vector.webp"
              alt="heart-vector"
              className="relative -top-8 h-[180px] object-cover"
            />
            <span className="-mt-4 text-2xl text-center font-semibold text-title leading-10">
              پشتیبانی پاسخگو و مؤثر
            </span>
            <span className="mt-4 mb-8 text-center text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
              اولویت ما حل واقعی مشکلات شما در کوتاه‌ترین زمان است. تیم پشتیبانی
              در ۷ روز هفته و ۲۴ ساعت شبانه‌روز، آماده راهنمایی فنی و مالی به
              شماست.
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div
            className="relative z-10 px-6 bg-white dark:bg-[#02151B] rounded-lg shadow-[0px_0px_102.34px_0px_#0000000D] dark:shadow-[0px_0px_102.34px_0px_#0000000D] border-[0.97px] border-[#DFDFDF] dark:border-0 flex items-center justify-center flex-col"
            style={{
              backgroundImage: "url('/images/landing/lines-bg.webp')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <img
              src="/images/landing/fee-vector.webp"
              alt="hear-vector"
              className="relative -top-8 h-[180px] object-cover"
            />
            <span className="-mt-4 text-2xl text-center font-semibold text-title leading-10">
              کارمزد رقابتی و شفاف
            </span>
            <span className="mt-4 mb-8 text-center text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
              تعرفه‌ها در رمزینو کاملاً شفاف است. هیچ هزینه پنهانی وجود ندارد و
              ما همواره تلاش می‌کنیم کمترین فاصله قیمتی را در بازار ارائه دهیم.
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div
            className="relative z-10 px-6 bg-white dark:bg-[#02151B] rounded-lg shadow-[0px_0px_102.34px_0px_#0000000D] dark:shadow-[0px_0px_102.34px_0px_#0000000D] border-[0.97px] border-[#DFDFDF] dark:border-0 flex items-center justify-center flex-col"
            style={{
              backgroundImage: "url('/images/landing/lines-bg.webp')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <img
              src="/images/landing/emoji-vector.webp"
              alt="hear-vector"
              className="relative -top-8 h-[180px] object-cover"
            />
            <span className="-mt-4 text-2xl text-center font-semibold text-title leading-10">
              سادگی در استفاده
            </span>
            <span className="mt-4 mb-8 text-center text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
              پلتفرم رمزینو طوری طراحی شده که چه برای ترید و چه مدیریت درگاه
              پرداخت، درگیر پیچیدگی نشوید و تمام ابزارها در دسترس‌تان باشد.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default WyMe;
