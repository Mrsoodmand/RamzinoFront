import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import MarketIcon from "icons/Layout/MarketIcon.svg";
import Myket from "icons/Layout/Myket.svg";
import RippleEffect from "./RippleEffect";

const BannerProgram = () => {
  return;
  return (
    <section className="container w-full md:mt-[240px] mt-20 mb-20 sticky z-0 fade-in">
      {/* دایره‌های متحرک */}

      <div className="w-full overflow-visible grid grid-cols-12 bg-[#6CE4DB] rounded-[4px] sm:rounded-[12px] relative min-h-[286px]">
        <div className="col-span-12 md:col-span-8 flex flex-wrap gap-4 sm:gap-5 relative z-10 px-4 md:px-[30px] py-5 sm:py-[36px] md:animate-fade-left animate-fade-up">
          <div className="w-full flex font-medium items-center text-[#1E1E1E] md:text-xl lg:text-2xl xl:text-[28px] text-[18px] text-start">
            همین حالا
            {"  "}
            <span className="mx-1 font-semibold text-[#0C0C0C]">
              اپلیکیشن کریپتو باز
            </span>
            {"  "}
            رو دانلود کن !
          </div>
          <p className="text-xs lg:text-sm font-semibold text-[#404040] w-full text-justify leading-[23px] max-w-[594px]">
            قیمت بیت کوین، اتریوم و سایر ارزهای دیجیتال را به صورت لحظه‌ای
            ببینید و نرخ آن‌ها را به یکدیگر تبدیل کنید. آخرین اخبار، تحلیل‌ها و
            مقالات حوزه بلاک چین را بخوانید.
          </p>
          <div className="w-full flex items-center gap-2 sm:gap-2.5">
            <button
              title="دریافت از بازار"
              className="btn btn-primary"
            >
              <MarketIcon className="scale-75 lg:scale-100" />
              دریافت از بازار
            </button>
            <button
              title="دریافت از مایکت"
              className="btn btn-primary"
            >
              <Myket className="scale-75 lg:scale-100" />
              دریافت از بازار
            </button>
          </div>
        </div>{" "}
        <Image
          src={"/images/program-image.webp"}
          height={1200}
          width={450}
          alt="عکس موبایل"
          layout="fixed"
          className="z-20  md:absolute max-h-[283px] lg:max-h-[1200px] hidden md:block  bottom-0 left-10 mx-auto w-[273px] lg:w-[450px] "
        />
        <div className="col-span-12 md:col-span-4 relative block  overflow-hidden  flex-wrap animate-fade-right full-center">
          <div className="max-w-full w-full overflow-hidden  ">
            <RippleEffect />
          </div>
          <Image
            src={"/images/program-image.webp"}
            height={1200}
            width={450}
            alt="عکس موبایل"
            layout="fixed"
            className="z-20  md:absolute max-h-[283px] lg:max-h-[1200px]   md:hidden block bottom-0 left-10 mx-auto w-[273px] lg:w-[450px] "
          />
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={style["random-circle"]}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerProgram;
