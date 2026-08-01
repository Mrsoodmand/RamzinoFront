/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "hooks/classes";
import RippleEffect from "../../../common/BannerProgram/RippleEffect";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Services() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="p-1 relative 2md:-mt-16">
      <section className="mt-20 container fade-in">
        <div className="flex items-center justify-between flex-wrap">
          <div className="text-right">
            <h2 className="text-2xl sm:text-[34px] font-semibold mb-2 text-title leading-10 sm:leading-[50px]">
              راهکارهای مالی ۳۶۰ درجه
            </h2>
            <span className="text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
              هر آنچه برای مدیریت دارایی‌های دیجیتال و توسعه کسب‌وکارتان نیاز
              دارید.
            </span>
          </div>

          <div className="center bg-themeColor dark:bg-[#001F28] rounded-[10px] px-1 py-1 gap-1.5 mt-[18px] sm:mt-[25px] overflow-auto none-scroll relative w-full md:w-auto">
            <button
              className={classes(
                "px-4 md:px-10 grow py-3.5 rounded-[5px] text-[14px] sm:text-base block",
                activeTab == "1"
                  ? "bg-[#fff] dark:bg-[#4EDFD4] text-[#171B23] dark:text-[#000]"
                  : "opacity-80 text-[#373A41] hover:bg-[#e7e7e7] dark:hover:bg-[#0036477a] dark:text-[#FAFAFA]",
              )}
              onClick={() => {
                setActiveTab("1");
              }}
            >
              خرید و فروش ارز
            </button>

            <button
              title={"درگاه پرداخت دلاری"}
              className={classes(
                "px-4 md:px-10 grow py-3.5 rounded-[5px] text-[14px] sm:text-base block",
                activeTab == "2"
                  ? "bg-[#fff] dark:bg-[#4EDFD4] text-[#171B23] dark:text-[#000]"
                  : "opacity-80 text-[#373A41] hover:bg-[#e7e7e7] dark:hover:bg-[#0036477a] dark:text-[#FAFAFA]",
              )}
              onClick={() => {
                setActiveTab("2");
              }}
            >
              درگاه پرداخت ارزی
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-6 bg-white rounded-lg shadow-[0px_4px_100px_0px_#00000000]  relative p-1">
          <div className="my-30 lg:pr-6 mt-10 lg:mt-0">
            <h2 className="text-2xl text-center lg:text-right sm:text-[34px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]">
              {activeTab == "1"
                ? "معامله بی‌واسطه با کمترین کارمزد"
                : "فروش بدون مرز با درگاه پرداخت بین‌المللی"}
            </h2>
            {activeTab == "1" ? (
              <span className="mt-6 text-center lg:text-right text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block max-w-[590px] mx-auto">
                دسترسی مستقیم به بازار جهانی صدها ارز دیجیتال محبوب، با بالاترین
                استانداردهای امنیتی. موتور معاملاتی پرسرعت رمزینو در کنار کیف
                پول اختصاصی، امکان خرید و فروش آنی را بدون پیچیدگی فراهم کرده
                است. با کمترین کارمزد معامله کنید و از پشتیبانی ۲۴ ساعته ما برای
                تجربه‌ای متفاوت از ترید لذت ببرید.
              </span>
            ) : (
              <span className="mt-6 text-center lg:text-right text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block max-w-[590px] mx-auto">
                کسب‌وکار خود را جهانی کنید. با درگاه پرداخت امن رمزینو، مشتریان
                شما از سراسر دنیا می‌توانند با ارز دیجیتال پرداخت کنند و شما
                معادل ریالی یا دلاری آن را آنی دریافت کنید. سازگار با تمام
                سایت‌سازها و دارای مستندات API کامل برای توسعه‌دهندگان.
              </span>
            )}
            <Link
              href="https://panel.ramzino.me/user/login"
              className="mt-6 mx-auto lg:mx-0 text-center bg-primaryDark w-[180px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
            >
              شروع معامله
            </Link>
          </div>

          <img
            src="/images/landing/vector-1.webp"
            alt="vector-1"
            className="h-[350px] grow object-cover dark:hidden"
          />

          <img
            src="/images/landing/vector-1-dark.webp"
            alt="vector-1"
            className="h-[350px] grow object-cover hidden dark:block"
          />
        </div>
      </section>

      <section className="mt-20 flex flex-col-reverse lg:flex-row items-center justify-center flex-wrap lg:flex-nowrap gap-6 relative p-1 overflow-hidden fade-in">
        {/* Dark glow */}
        <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-[100vw] h-[70%] bg-[linear-gradient(to_top,rgba(0,233,240,0.50),transparent_80%)] pointer-events-none hidden dark:block" />

        {/* Bottom-right glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(35%_65%_at_105%_105%,#bffbfb_0%,#dfffff_35%,rgba(255,255,255,0)_70%)] dark:hidden" />

        {/* Bottom-left glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(15%_65%_at_-5%_105%,#bffbfb_0%,#dfffff_35%,rgba(255,255,255,0)_70%)] dark:hidden" />

        <img
          src="/images/landing/vector-2.webp"
          alt="vector-2"
          className="dark:hidden"
        />
        <img
          src="/images/landing/vector-2-dark.webp"
          alt="vector-2"
          className="hidden dark:block"
        />

        <div className="lg:mt-0">
          <h2 className="text-2xl text-center lg:text-right sm:text-[34px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]">
            بازار شما، به وسعت تمام ارزهای دیجیتال
          </h2>
          <span className="mt-6 text-center lg:text-right text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block max-w-[590px] mx-auto">
            دسترسی مستقیم به هزاران بازار جهانی در یک پلتفرم. ما لیست ارزها را
            به‌صورت مداوم به‌روز می‌کنیم تا شما همیشه در خط مقدم بازار باشید و
            هوشمندانه معامله کنید.
          </span>
          <Link
            href="https://panel.ramzino.me/user/login"
            className="mt-6 mx-auto lg:mx-0 text-center bg-primaryDark w-[180px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
          >
            ورود به بازار
          </Link>
        </div>
      </section>

      <section className="mt-32 container w-full sticky z-0 fade-in">
        <div className="w-full flex items-center justify-between flex-col-reverse lg:flex-row overflow-visible bg-[#0A313D] rounded-[4px] sm:rounded-[12px] relative min-h-[400px]">
          <div className="mt-[280px] lg:mt-0 relative z-10 px-4 md:px-[50px] py-5 sm:py-[36px] md:animate-fade-left animate-fade-up">
            <h2 className="text-2xl text-center text-[#fff] lg:text-right sm:text-[34px] font-semibold leading-10 sm:leading-[50px]">
              اتصال درگاه پرداخت ارز دیجیتال به وب‌سایت
            </h2>
            <span className="my-8 text-center lg:text-right text-[#CBCBCB] font-normal text-xs sm:text-base block max-w-[590px] mx-auto">
              مشتریان شما می‌توانند از سراسر دنیا هزینه محصولات و خدمات را با
              رمزارز پرداخت کنند. ما دغدغه‌های فنی و تبدیل ارز را حل کرده‌ایم تا
              شما فقط روی فروش تمرکز کنید. سازگار با ووکامرس و تمامی سایت‌سازها.
            </span>
            <Link
              href="https://panel.ramzino.me/user/login"
              className="mt-6 mx-auto lg:mx-0 text-center bg-[#6DF4F1] shadow-[0px_1.56px_67.11px_3.77px_#26BEB24D] w-[200px] text-base h-[55px] rounded-[5px] font-semibold glass text-black flex items-center justify-center"
            >
              ساخت درگاه جدید
            </Link>
          </div>
          <div
            className="absolute inset-0 pointer-events-none opacity-100 block bottom-0 left-[20%]"
            style={{
              backgroundImage: "url('/images/landing/grid-white.webp')",
              backgroundPosition: "center",
              // backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <img
            src={"/images/landing/vector-3.webp"}
            alt="عکس موبایل"
            layout="fixed"
            className="z-20 absolute block left-1/2 -translate-x-1/2 -top-16 sm:-top-52 lg:-top-32 lg:left-12 lg:translate-x-0 mx-auto"
          />
        </div>
      </section>

      <section className="mt-20 container fade-in">
        <h2 className="text-2xl text-center sm:text-[34px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]">
          چرا رمزینو انتخاب هوشمندانه‌ای است؟
        </h2>

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
                اولویت ما حل واقعی مشکلات شما در کوتاه‌ترین زمان است. تیم
                پشتیبانی در ۷ روز هفته و ۲۴ ساعت شبانه‌روز، آماده راهنمایی فنی و
                مالی به شماست.
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
                تعرفه‌ها در رمزینو کاملاً شفاف است. هیچ هزینه پنهانی وجود ندارد
                و ما همواره تلاش می‌کنیم کمترین فاصله قیمتی را در بازار ارائه
                دهیم.
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
      </section>

      <section className="mt-12 w-full min-h-[750px] p-1 relative overflow-hidden px-12 fade-in">
        <h2 className="mt-20 text-2xl text-center sm:text-[35px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]">
          زیرساخت پرداخت برای تمام کسب و کارها
        </h2>
        <span className="mt-4 text-center text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
          از فروشگاه‌های آنلاین پوشاک و کافه‌ها تا معاملات املاک و خودرو؛ درگاه
          رمزینو برای پردازش هر نوع تراکنشی (از مبالغ خرد تا کلان) بهینه‌سازی
          شده است. بدون نگرانی از سقف تراکنش، کسب‌وکارتان را توسعه دهید.
        </span>

        <Link
          href="https://panel.ramzino.me/user/login"
          className="mt-6 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold lg:full-center glass text-[#fff] flex items-center justify-center mx-auto mb-[600px]"
        >
          شروع پذیرش پرداخت
        </Link>

        {/* LEFT gradient */}
        {/* <div className="pointer-events-none dark:hidden absolute bottom-[-120px] left-[-120px] w-[25vw] h-[25vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,233,240,0.35),transparent_70%)]" /> */}

        {/* RIGHT gradient */}
        {/* <div className="pointer-events-none dark:hidden absolute bottom-[-120px] right-[-120px] w-[25vw] h-[25vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,233,240,0.35),transparent_70%)]" /> */}

        {/* BOTTOM CURVED GRADIENT */}
        <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-[linear-gradient(to_top,rgba(0,233,240,0.20),transparent_80%)] pointer-events-none hidden dark:block" />

        {/* Bottom-left wash */}
        <div className="absolute w-full h-full right-0 bottom-0 -z-10 bg-[radial-gradient(180%_200%_at_50%_-25%,#ffffff_36%,#ecffff_50%,#a0f6f6_65%,#5becec_100%)] dark:hidden" />

        {/* FLOATING Vectors */}
        <img
          src="/images/landing/car-key.webp"
          alt="gateway"
          className="absolute w-20 md:w-auto right-[10%] lg:right-[15%] bottom-[50%] md:bottom-[45%]"
        />
        <img
          src="/images/landing/home-bubble.webp"
          alt="gateway"
          className="absolute w-20 md:w-auto -left-[0] lg:left-[15%] bottom-[25%] md:bottom-[25%]"
        />

        <img
          src="/images/landing/gateway-vector.webp"
          alt="gateway"
          className="absolute left-1/2 -translate-x-1/2 bottom-[20%] sm:bottom-[2%]"
        />
      </section>
    </div>
  );
}

export default Services;
