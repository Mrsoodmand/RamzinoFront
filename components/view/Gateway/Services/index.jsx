/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "hooks/classes";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const currencies = [
  { icon: "BTC", label: "بیت‌کوین" },
  { icon: "ETH", label: "اتریوم" },
  { icon: "USDT", label: "تتر" },
  { icon: "BCH", label: "بیت‌کوین کش" },
  { icon: "BNB", label: "بی ان بی" },
  { icon: "ALU", label: "آلوین کوین" },
  { icon: "APE", label: "ایپ" },
];

const TAB_COUNT = 3;
// Clears the fixed 85px nav, plus a little breathing room.
const PIN_OFFSET = 100;

function Services() {
  const [activeTab, setActiveTab] = useState("1");
  // The tabs card pins to the viewport while the page scrolls through its tall
  // wrapper; that scroll distance drives which tab is active. Desktop only —
  // the tab rail is hidden below lg, and pinning fights mobile touch scrolling.
  const pinRef = useRef(null);
  const pinCardRef = useRef(null);
  const stepsRef = useRef(null);
  const circleRefs = useRef([]);
  const [stepsInView, setStepsInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  // Distance from the row's right edge to each circle's center, in px. The row
  // is RTL, so the connector line grows leftward from right-0 and these are the
  // widths it needs to reach each step. Measured rather than assumed, because
  // the steps are fixed-width with gaps, not equal thirds of the row.
  const [stepOffsets, setStepOffsets] = useState([0, 0, 0]);

  useEffect(() => {
    const wrapper = pinRef.current;
    const card = pinCardRef.current;
    if (!wrapper || !card) return;

    const desktop = window.matchMedia("(min-width: 1024px)");

    // Deliberately not throttled through requestAnimationFrame: rAF is paused
    // while the tab is backgrounded, which would leave a "pending frame" latch
    // stuck on and kill tab switching for the rest of the session. This reads
    // one rect and writes no layout, which is cheap enough to run inline.
    const sync = () => {
      if (!desktop.matches) return;

      // How far the page has scrolled since the card pinned, over the total
      // distance it stays pinned. Measured from the live boxes so it tracks the
      // card's real height instead of assuming one.
      const distance = wrapper.offsetHeight - card.offsetHeight;
      if (distance <= 0) return;

      const scrolled = PIN_OFFSET - wrapper.getBoundingClientRect().top;
      const progress = Math.min(Math.max(scrolled / distance, 0), 1);
      const index = Math.min(TAB_COUNT - 1, Math.floor(progress * TAB_COUNT));
      setActiveTab(String(index + 1));
    };

    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();

    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  // Clicking a tab scrolls to the matching slice of the pinned range, so the
  // choice survives the next scroll event instead of being recomputed away.
  const goToTab = (value) => {
    setActiveTab(value);

    const wrapper = pinRef.current;
    const card = pinCardRef.current;
    if (!wrapper || !card) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const distance = wrapper.offsetHeight - card.offsetHeight;
    if (distance <= 0) return;

    const index = Number(value) - 1;
    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    const into = (distance * (index + 0.5)) / TAB_COUNT;
    window.scrollTo({ top: wrapperTop - PIN_OFFSET + into, behavior: "smooth" });
  };

  useEffect(() => {
    const row = stepsRef.current;
    if (!row) return;

    const measure = () => {
      const rowRect = row.getBoundingClientRect();
      setStepOffsets(
        circleRefs.current.map((circle) => {
          if (!circle) return 0;
          const rect = circle.getBoundingClientRect();
          return rowRect.right - (rect.left + rect.width / 2);
        })
      );
    };

    measure();

    if (typeof ResizeObserver === "undefined") return;
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(row);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!stepsInView) return;

    let interval;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 3);
      }, 2000);
    }, 1500);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [stepsInView]);

  useEffect(() => {
    const node = stepsRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="">
      <section className="container mx-auto py-16 fade-in">
        <h3
          className="opacity-0 animate-fade-in-up px-4 mt-12 text-center w-full text-[#0C0C0C] dark:text-[#fff] text-2xl md:text-[34px] font-black mb-5"
        >
          چرا کسب‌وکارهای موفق رمزینو را انتخاب می‌کنند؟
        </h3>
        <span
          className="opacity-0 animate-fade-in-up block mb-14 px-6 text-center text-lg dark:text-[#ffffff90]"
          style={{ animationDelay: "120ms" }}
        >
          ما فقط یک درگاه نیستیم؛ شریک تجاری شماییم. مجموعه‌ای از ابزارهای
          حرفه‌ای که دغدغه دریافت پول، تسویه حساب و امنیت را برای همیشه از ذهن
          شما پاک می‌کند.
        </span>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-full lg:col-span-8">
            <div className="flex items-center flex-col sm:flex-row justify-between gap-4">
              <div
                className="opacity-0 animate-fade-in-up w-full bg-[#fff] dark:bg-[#02151B] overflow-hidden relative md:max-w-[400px] mx-auto grow flex flex-col justify-center items-center py-8 px-4 gap-6 rounded-lg border-[0.98px] border-[#DFDFDF] dark:border-0 z-10 shadow-[0px_0px_103.41px_0px_#0000000D]"
                style={{ animationDelay: "240ms" }}
              >
                <img
                  src="/images/landing/lines-bg.webp"
                  alt=""
                  className="w-full h-full absolute top-0 right-0 object-cover -z-10 rotate-180"
                />
                <span className="text-2xl md:text-2xl block text-center text-[#1C2121] font-bold dark:text-[#fff]">
                  پرداخت بدون مرز و تحریم
                </span>
                <span className="text-[#757878] text-center dark:text-[#CFCFCF]">
                  مشتریان شما از هر نقطه جهان می‌توانند بدون نگرانی از مسدودی
                  حساب یا محدودیت‌های بانکی، هزینه خدمات را پرداخت کنند.
                </span>
                <img
                  src="/images/landing-old/wallet-vector.svg"
                  alt="wallet-vector"
                  className="art-float w-full -mt-[20px] h-[210px]"
                  style={{ "--float-y": "12px", "--float-r": "1.5deg", "--float-d": "6s" }}
                />
              </div>
              <div
                className="opacity-0 animate-fade-in-up w-full bg-[#fff] dark:bg-[#02151B] overflow-hidden relative md:max-w-[400px] mx-auto grow flex flex-col justify-center items-center py-8 px-4 gap-6 rounded-lg border-[0.98px] border-[#DFDFDF] dark:border-0 z-10 shadow-[0px_0px_103.41px_0px_#0000000D]"
                style={{ animationDelay: "380ms" }}
              >
                <img
                  src="/images/landing/lines-bg.webp"
                  alt=""
                  className="w-full h-full absolute top-0 right-0 object-cover -z-10"
                />

                <img
                  src="/images/landing-old/coin.svg"
                  alt="wallet-vector"
                  className="art-float w-full h-[200px] -mt-[12px]"
                  style={{ "--float-y": "10px", "--float-r": "-2deg", "--float-d": "5.5s", "--float-delay": "-1.8s" }}
                />
                <span className="text-2xl md:text-2xl block text-center text-[#1C2121] font-bold dark:text-[#fff]">
                  کارمزد رقابتی و شفاف
                </span>
                <span className="text-[#757878] text-center dark:text-[#CFCFCF]">
                  سود شما اولویت ماست. تعرفه‌ها در رمزینو کاملاً شفاف است و
                  کمترین نرخ کارمزد در تراکنش‌های بین‌المللی را ارائه می‌دهیم.
                </span>
              </div>
            </div>
            <div className="mt-6 w-full grow">
              <div
                className="opacity-0 animate-fade-in-up flex flex-col-reverse bg-[#fff] dark:bg-[#0B252D] overflow-hidden border-[0.98px] border-[#DFDFDF] dark:border-0 z-10 shadow-[0px_0px_103.41px_0px_#0000000D] lg:flex-row items-center justify-center flex-wrap lg:flex-nowrap gap-6 lg:gap-20 rounded-lg relative py-6 px-8"
                style={{ animationDelay: "520ms" }}
              >
                <div className="">
                  <h2 className="text-2xl text-center lg:text-right sm:text-[24px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]">
                    اتصال سریع به وب‌سایت
                  </h2>
                  <span className="mt-4 text-center lg:text-right text-[#757878] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
                    فرقی نمی‌کند سایت وردپرسی دارید یا سیستم اختصاصی؛ با
                    افزونه‌های آماده و مستندات API استاندارد ما، درگاه شما در
                    کمتر از ۱۰ دقیقه فعال می‌شود.
                  </span>
                  <Link
                    href="https://ramzino.me/docs"
                    className="mt-8 lg:mt-4 mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
                  >
                    مشاهده مستندات فنی
                  </Link>
                </div>

                <img
                  src="/images/landing/cube.webp"
                  alt="debit-cards"
                  className="art-float"
                  style={{ "--float-y": "14px", "--float-r": "2deg", "--float-d": "6.5s", "--float-delay": "-2.4s" }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-4">
            <div className="w-full h-full grow">
              <div
                className="opacity-0 animate-fade-in-up w-full h-full bg-[#fff] dark:bg-[#02151B] overflow-hidden relative mx-auto grow flex flex-col justify-center items-center py-8 px-4 gap-6 rounded-lg border-[0.98px] border-[#DFDFDF] dark:border-0 z-10 shadow-[0px_0px_103.41px_0px_#0000000D]"
                style={{ animationDelay: "300ms" }}
              >
                <img
                  src="/images/landing-old/pos-lines-bg.svg"
                  alt=""
                  className="w-full h-full absolute top-0 right-0 object-cover -z-10"
                />
                <span className="text-2xl md:text-2xl block text-center text-[#1C2121] font-bold dark:text-[#fff]">
                  تسویه حساب آنی و منعطف
                </span>
                <span className="text-[#757878] text-center dark:text-[#CFCFCF]">
                  جریان نقدینگی شما خط قرمز ماست. انتخاب با شماست: درآمدتان را
                  به صورت «ریال» در حساب بانکی دریافت کنید یا به صورت «تتر» در
                  کیف پول دیجیتال. تسویه حساب‌ها طبق سیکل منظم پایا یا به صورت
                  لحظه‌ای انجام می‌شود.
                </span>
                <Link
                  href="https://panel.ramzino.me/user/login"
                  className="mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
                >
                  درخواست درگاه
                </Link>
                <img
                  src="/images/landing/pos.webp"
                  alt="pos-vector"
                  className="art-float w-full mt-20"
                  style={{ "--float-y": "11px", "--float-r": "-1.5deg", "--float-d": "7.5s", "--float-delay": "-3s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-40 p-1 relative fade-in dark:bg-[linear-gradient(135deg,#083C47_0%,#0C4E58_28%,#0F6469_50%,#137C7A_72%,#1A8F86_100%)] bg-[radial-gradient(120%_160%_at_50%_110%,rgba(178,255,255,0.85)_0%,rgba(178,255,255,0)_55%),linear-gradient(135deg,#1BB3B4_0%,#24BFC0_16%,#37CDCC_30%,#5FE8E7_48%,#69EFEE_58%,#8FFFFF_78%,#A0FFFF_100%)]">
        <section className="container w-full sticky z-0 fade-in">
          <div className="w-full flex items-center justify-between flex-col-reverse lg:flex-row overflow-visible rounded-[4px] sm:rounded-[12px] relative min-h-[400px]">
            <div className="mt-[350px] lg:mt-0 z-10 px-4 md:px-[50px]">
              <h2
                className="opacity-0 animate-fade-in-up text-2xl text-center text-[#000] dark:text-[#fff] lg:text-right sm:text-[38px] font-semibold leading-10 sm:leading-[50px]"
              >
                مدیریت جریان نقدینگی با تسویه آنی
              </h2>
              <span
                className="opacity-0 animate-fade-in-up my-8 text-center lg:text-right text-[#000] dark:text-[#fff] font-normal text-xs sm:text-base block max-w-[570px]"
                style={{ animationDelay: "150ms" }}
              >
                پول شما، قوانین شما. برخلاف درگاه‌های سنتی، در رمزینو نیازی به
                انتظار طولانی نیست. درآمد حاصل از فروش را در لحظه به تتر تبدیل
                کنید یا طبق سیکل منظم پایا، معادل ریالی آن را در حساب بانکی خود
                دریافت کنید.
              </span>
              <Link
                href="https://panel.ramzino.me/user/login"
                className="opacity-0 animate-fade-in-up lg:mx-0 text-center bg-[#2B758C] !text-[#fff] shadow-[0px_1.56px_67.11px_3.77px_#26BEB24D] w-[190px] text-base h-[50px] rounded-[10px] font-semibold glass text-black flex items-center justify-center"
                style={{ animationDelay: "300ms" }}
              >
                شروع فعالیت
              </Link>
            </div>

            {/* The wrapper owns the positioning transform so the float
                animation on the image can't fight -translate-x-1/2. */}
            <div className="z-20 absolute block left-1/2 -translate-x-1/2 -top-20 lg:-top-28 lg:-left-0 lg:translate-x-0 mx-auto">
              <img
                src={"/images/landing/withdraw-vector.webp"}
                alt="withdraw-vector"
                className="art-float"
                style={{ "--float-y": "16px", "--float-r": "1.5deg", "--float-d": "8s" }}
              />
            </div>
          </div>
        </section>
      </section>

      <section className="mt-20 flex flex-col-reverse lg:flex-row items-center justify-center flex-wrap lg:flex-nowrap gap-6 lg:gap-20 relative p-1 overflow-hidden py-20 fade-in">
        <img
          src="/images/landing/debit-cards.webp"
          alt="debit-cards"
          className="art-float dark:hidden"
          style={{ "--float-y": "13px", "--float-r": "1deg", "--float-d": "7s" }}
        />
        <img
          src="/images/landing/debit-cards-dark.webp"
          alt="debit-cards"
          className="art-float hidden dark:block"
          style={{ "--float-y": "13px", "--float-r": "1deg", "--float-d": "7s" }}
        />

        {/* Dark glow */}
        <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-[100vw] h-[70%] bg-[linear-gradient(to_top,rgba(0,233,240,0.50),transparent_80%)] pointer-events-none hidden dark:block" />

        {/* Bottom-right glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(35%_65%_at_105%_105%,#bffbfb_0%,#dfffff_35%,rgba(255,255,255,0)_70%)] dark:hidden" />

        {/* Bottom-left glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(15%_65%_at_-5%_105%,#bffbfb_0%,#dfffff_35%,rgba(255,255,255,0)_70%)] dark:hidden" />

        <div className="lg:mt-0">
          <h2
            className="opacity-0 animate-fade-in-up text-2xl text-center lg:text-right sm:text-[34px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]"
          >
            پلی میان فروشگاه شما و اقتصاد دیجیتال
          </h2>
          <span
            className="opacity-0 animate-fade-in-up mt-8 text-center lg:text-right text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block max-w-[570px]"
            style={{ animationDelay: "150ms" }}
          >
            دسترسی به ویزا کارت یا پی‌پل برای کسب‌وکارهای ایرانی دشوار است؛ اما
            رمزینو این خلاء را پر کرده است. ما استانداردهای پرداخت بین‌المللی را
            با تکنولوژی بلاکچین شبیه‌سازی کرده‌ایم تا فروشگاه شما هیچ‌چیز از
            رقبای خارجی کم نداشته باشد.
          </span>
          <Link
            href="https://panel.ramzino.me/user/login"
            className="opacity-0 animate-fade-in-up mt-8 mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
            style={{ animationDelay: "300ms" }}
          >
            شروع فروش جهانی{" "}
          </Link>
        </div>
      </section>

      <section ref={pinRef} className="mt-20 relative lg:h-[260vh]">
        <div ref={pinCardRef} className="lg:sticky lg:top-[100px]">
          <div className="container fade-in">
            <div className="bg-[#fff] dark:bg-[#08242D] border border-[#EAEAEA] dark:border-[#254955] rounded-lg grid grid-cols-12 gap-4">
          {activeTab === "1" ? (
            <div className="col-span-full lg:col-span-5 p-6 flex flex-col justify-center h-full">
              <h2
                className="opacity-0 animate-fade-in-up text-2xl text-center lg:text-right sm:text-[32px] font-semibold text-title leading-10 sm:leading-[50px]"
              >
                راهکاری منعطف برای انواع فروشگاه
              </h2>
              <span
                className="opacity-0 animate-fade-in-up mt-4 text-center lg:text-right text-[#757878] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block"
                style={{ animationDelay: "150ms" }}
              >
                فرقی نمی‌کند کالای فیزیکی می‌فروشید، فایل دانلودی یا خدمات
                آنلاین؛ زیرساخت رمزینو با مقیاس کسب‌وکارتان هماهنگ می‌شود و
                ابزارهای لازم برای مدیریت فروش را در اختیارتان می‌گذارد.
              </span>
              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  سازگاری کامل با ووکامرس و پلتفرم‌های فروشگاهی
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  پنل گزارش‌گیری حرفه‌ای برای واحد حسابداری
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  قابلیت تعریف درگاه‌های متعدد برای شعبه‌های مختلف
                </span>
              </div>

              <Link
                href="https://panel.ramzino.me/user/login"
                className="opacity-0 animate-fade-in-up mt-6 mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
                style={{ animationDelay: "300ms" }}
              >
                ساخت درگاه فروشگاهی
              </Link>
            </div>
          ) : null}

          {activeTab === "2" ? (
            <div className="col-span-full lg:col-span-5 p-6 flex flex-col justify-center h-full">
              <h2
                className="opacity-0 animate-fade-in-up text-2xl text-center lg:text-right sm:text-[32px] font-semibold text-title leading-10 sm:leading-[50px]"
              >
                حفاظ امنیتی چندلایه برای تراکنش‌ها
              </h2>
              <span
                className="opacity-0 animate-fade-in-up mt-4 text-center lg:text-right text-[#757878] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block"
                style={{ animationDelay: "150ms" }}
              >
                امنیت خط قرمز ماست. تمام تراکنش‌ها بر بستر بلاکچین و با
                پروتکل‌های رمزنگاری پیشرفته انجام می‌شوند. دارایی‌های شما در کیف
                پول‌های سرد (Cold Storage) نگهداری می‌شوند تا از هرگونه نفوذ
                سایبری در امان باشند.
              </span>
              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  محافظت خودکار در برابر حملات DDoS
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  سیستم هوشمند شناسایی تراکنش‌های مشکوک
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  تسویه حساب امن بدون دخالت انسانی
                </span>
              </div>

              <Link
                href="/about-us"
                className="opacity-0 animate-fade-in-up mt-6 mx-auto lg:mx-0 text-center bg-primaryDark w-[210px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
                style={{ animationDelay: "300ms" }}
              >
                بررسی استانداردهای امنیتی
              </Link>
            </div>
          ) : null}

          {activeTab === "3" ? (
            <div className="col-span-full lg:col-span-5 p-6 flex flex-col justify-center h-full">
              <h2
                className="opacity-0 animate-fade-in-up text-2xl text-center lg:text-right sm:text-[32px] font-semibold text-title leading-10 sm:leading-[50px]"
              >
                کاهش هزینه‌ها، افزایش حاشیه سود
              </h2>
              <span
                className="opacity-0 animate-fade-in-up mt-4 text-center lg:text-right text-[#757878] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block"
                style={{ animationDelay: "150ms" }}
              >
                مدل درآمدی ما شفاف است. خبری از هزینه‌های پنهان، آبونمان سالانه
                یا هزینه راه‌اندازی نیست. ما فقط درصد ناچیزی از تراکنش‌های
                موفق&rdquo; را به عنوان کارمزد کسر می‌کنیم تا سود شما حداکثر
                شود.
              </span>
              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  راه‌اندازی و دریافت اینماد کریپتویی کاملاً رایگان
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  کمترین نرخ کارمزد در بین درگاه‌های واسط
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4 mx-auto lg:mx-0">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    fill="url(#paint0_radial_1162_14619)"
                  />
                  <rect
                    x="0.328891"
                    y="0.328891"
                    width="37.4936"
                    height="37.4936"
                    rx="18.7468"
                    stroke="url(#paint1_linear_1162_14619)"
                    strokeWidth="0.657782"
                  />
                  <path
                    d="M11.6747 21.155C11.6747 21.155 13.1717 21.155 15.1677 24.6481C15.1677 24.6481 20.7155 15.4996 25.6469 13.6699"
                    stroke="white"
                    strokeWidth="1.49702"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1162_14619"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(19.0463 19.0757) rotate(-90) scale(109.959)"
                    >
                      <stop stopColor="#6CE4DB" />
                      <stop offset="0.55" stopColor="#2B758C" />
                    </radialGradient>
                    <linearGradient
                      id="paint1_linear_1162_14619"
                      x1="19.0757"
                      y1="-0.0910215"
                      x2="19.0757"
                      y2="38.2437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61D0CD" />
                      <stop offset="1" stopColor="#7AE3E0" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-[#000] dark:text-[#fff] md:text-xl">
                  امکان توافق کارمزد برای تراکنش‌های حجم بالا
                </span>
              </div>

              <Link
                href="/fee/deal"
                className="opacity-0 animate-fade-in-up mt-6 mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
                style={{ animationDelay: "300ms" }}
              >
                مشاهده تعرفه‌ها
              </Link>
            </div>
          ) : null}

          <div className="hidden lg:block col-span-full lg:col-span-2 border-r border-[#EAEAEA] dark:border-[#ffffff30] py-4">
            <div className="flex flex-col items-center justify-between gap-6 h-full">
              <div
                className={`cursor-pointer px-6 py-6 flex flex-col items-center justify-center rounded-lg gap-4 ${
                  activeTab === "1"
                    ? "bg-[#1C404B]"
                    : "bg-[#F2F2F2] dark:bg-transparent"
                }`}
                onClick={() => goToTab("1")}
              >
                <svg
                  className={`font-semibold ${
                    activeTab === "1"
                      ? "stroke-[#fff] dark:stroke-[#fff]"
                      : "stroke-[#000] dark:stroke-[#fff]"
                  }`}
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.37476 19.708L5.37476 27.7705C5.37476 32.8381 5.37476 35.3719 6.94906 36.9462C8.52336 38.5205 11.0572 38.5205 16.1248 38.5205H26.8748C31.9424 38.5205 34.4762 38.5205 36.0505 36.9462C37.6248 35.3719 37.6248 32.8381 37.6248 27.7705V19.708"
                    strokeWidth="2.6875"
                  />
                  <path
                    d="M26.8748 30.458C25.6491 31.5459 23.6977 32.2497 21.4998 32.2497C19.3018 32.2497 17.3504 31.5459 16.1248 30.458"
                    strokeWidth="2.6875"
                    strokeLinecap="round"
                  />
                  <path d="M14.2805 16.1253L15.5786 15.7778C15.4042 15.1264 14.7739 14.7051 14.1053 14.7931C13.4367 14.881 12.9368 15.4509 12.9368 16.1253H14.2805ZM3.78632 17.9895L5.04554 17.5204H5.04554L3.78632 17.9895ZM39.213 17.9895L37.9538 17.5204L37.9538 17.5204L39.213 17.9895ZM28.7188 16.1253H30.0626C30.0626 15.4509 29.5627 14.881 28.8941 14.7931C28.2254 14.7051 27.5952 15.1264 27.4208 15.7778L28.7188 16.1253ZM4.403 14.4729L5.5676 15.1432L5.5676 15.1432L4.403 14.4729ZM6.12957 11.4733L4.96497 10.803L4.96497 10.803L6.12957 11.4733ZM38.5963 14.4729L37.4318 15.1432L38.5963 14.4729ZM36.8698 11.4733L38.0344 10.803L38.0344 10.803L36.8698 11.4733ZM39.3935 16.5355L38.0544 16.647L38.0544 16.647L39.3935 16.5355ZM3.60584 16.5355L2.26672 16.424L3.60584 16.5355ZM14.2805 16.1253H12.9368C12.9368 18.3425 11.1236 20.1566 8.86618 20.1566V21.5003V22.8441C12.5893 22.8441 15.6243 19.8452 15.6243 16.1253H14.2805ZM8.86618 21.5003V20.1566C7.11047 20.1566 5.61777 19.0566 5.04554 17.5204L3.78632 17.9895L2.52709 18.4585C3.48186 21.0217 5.96175 22.8441 8.86618 22.8441V21.5003ZM39.213 17.9895L37.9538 17.5204C37.3816 19.0566 35.8889 20.1566 34.1332 20.1566V21.5003V22.8441C37.0376 22.8441 39.5175 21.0217 40.4723 18.4585L39.213 17.9895ZM34.1332 21.5003V20.1566C31.8758 20.1566 30.0626 18.3425 30.0626 16.1253H28.7188H27.3751C27.3751 19.8452 30.41 22.8441 34.1332 22.8441V21.5003ZM21.4997 21.5003V20.1566C18.6175 20.1566 16.2443 18.2648 15.5786 15.7778L14.2805 16.1253L12.9825 16.4728C13.9717 20.168 17.4354 22.8441 21.4997 22.8441V21.5003ZM28.7188 16.1253L27.4208 15.7778C26.755 18.2648 24.3819 20.1566 21.4997 20.1566V21.5003V22.8441C25.564 22.8441 29.0277 20.168 30.0169 16.4728L28.7188 16.1253ZM4.403 14.4729L5.5676 15.1432L7.29416 12.1437L6.12957 11.4733L4.96497 10.803L3.23841 13.8025L4.403 14.4729ZM38.5963 14.4729L39.7609 13.8025L38.0344 10.803L36.8698 11.4733L35.7052 12.1437L37.4318 15.1432L38.5963 14.4729ZM10.5976 4.47949V5.82324H32.4018V4.47949V3.13574H10.5976V4.47949ZM35.938 7.98997H37.2817C37.2817 5.29983 35.0876 3.13574 32.4018 3.13574V4.47949V5.82324C33.6219 5.82324 34.5942 6.80255 34.5942 7.98997H35.938ZM36.8698 11.4733L38.0344 10.803C37.5409 9.94567 37.2817 8.97608 37.2817 7.98997H35.938H34.5942C34.5942 9.44754 34.9774 10.8793 35.7052 12.1437L36.8698 11.4733ZM7.0614 7.98997H8.40515C8.40515 6.80255 9.37748 5.82324 10.5976 5.82324V4.47949V3.13574C7.91173 3.13574 5.71765 5.29983 5.71765 7.98997H7.0614ZM39.213 17.9895L40.4723 18.4585C40.5491 18.2523 40.6602 17.9652 40.7172 17.6024C40.7737 17.2418 40.7696 16.8681 40.7326 16.424L39.3935 16.5355L38.0544 16.647C38.0834 16.9952 38.0712 17.128 38.0621 17.186C38.0534 17.2418 38.0413 17.2855 37.9538 17.5204L39.213 17.9895ZM38.5963 14.4729L37.4318 15.1432C37.9245 15.9993 38.0161 16.1869 38.0544 16.647L39.3935 16.5355L40.7326 16.424C40.639 15.2994 40.2431 14.6401 39.7609 13.8025L38.5963 14.4729ZM6.12957 11.4733L7.29416 12.1437C8.02196 10.8793 8.40515 9.44754 8.40515 7.98997H7.0614H5.71765C5.71765 8.97608 5.45846 9.94567 4.96497 10.803L6.12957 11.4733ZM3.78632 17.9895L5.04554 17.5204C4.95805 17.2855 4.946 17.2418 4.93724 17.186C4.92815 17.128 4.91596 16.9952 4.94495 16.647L3.60584 16.5355L2.26672 16.424C2.22974 16.8681 2.22564 17.2418 2.2822 17.6024C2.3391 17.9652 2.45028 18.2523 2.52709 18.4585L3.78632 17.9895ZM4.403 14.4729L3.23841 13.8025C2.75626 14.6401 2.36036 15.2994 2.26672 16.424L3.60584 16.5355L4.94495 16.647C4.98327 16.1869 5.07483 15.9993 5.5676 15.1432L4.403 14.4729Z" />
                </svg>

                <span
                  className={`${
                    activeTab === "1"
                      ? "text-[#fff] dark:text-[#fff] font-semibold"
                      : "text-[#000] dark:text-[#fff]"
                  }`}
                >
                  کسب کار ها
                </span>
              </div>

              <div
                className={`cursor-pointer px-6 py-6 flex flex-col items-center justify-center rounded-lg gap-4 ${
                  activeTab === "2"
                    ? "bg-[#1C404B]"
                    : "bg-[#F2F2F2] dark:bg-transparent"
                }`}
                onClick={() => goToTab("2")}
              >
                <svg
                  className={`font-semibold ${
                    activeTab === "2"
                      ? "stroke-[#fff] dark:stroke-[#fff]"
                      : "stroke-[#000] dark:stroke-[#fff]"
                  }`}
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4969 3.58301C16.3916 3.58301 13.0814 7.20037 9.16643 8.51887C7.5746 9.05499 6.77867 9.32305 6.45656 9.70092C6.13446 10.0788 6.04013 10.631 5.85149 11.7353C3.83283 23.5529 8.24508 34.4785 18.7677 38.731C19.8983 39.1879 20.4636 39.4164 21.5025 39.4163C22.5414 39.4163 23.1067 39.1879 24.2372 38.731C34.7592 34.4784 39.1672 23.5529 37.148 11.7353C36.9593 10.6308 36.8649 10.0785 36.5427 9.70063C36.2205 9.32275 35.4247 9.05484 33.8329 8.51903C29.9165 7.20064 26.6024 3.58301 21.4969 3.58301Z"
                    strokeWidth="2.6875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M34.9918 9.90818C35.5166 9.38342 35.5166 8.5326 34.9918 8.00783C34.4671 7.48307 33.6163 7.48307 33.0915 8.00783L34.0417 8.95801L34.9918 9.90818ZM9.79983 31.2995C9.27506 31.8243 9.27506 32.6751 9.79983 33.1998C10.3246 33.7246 11.1754 33.7246 11.7002 33.1998L10.75 32.2497L9.79983 31.2995ZM34.0417 8.95801L33.0915 8.00783L9.79983 31.2995L10.75 32.2497L11.7002 33.1998L34.9918 9.90818L34.0417 8.95801Z" />
                </svg>
                <span
                  className={`${
                    activeTab === "2"
                      ? "text-[#fff] dark:text-[#fff] font-semibold"
                      : "text-[#000] dark:text-[#fff]"
                  }`}
                >
                  امنیت درگاه
                </span>
              </div>

              <div
                className={`cursor-pointer px-6 py-6 flex flex-col items-center justify-center rounded-lg gap-4 ${
                  activeTab === "3"
                    ? "bg-[#1C404B]"
                    : "bg-[#F2F2F2] dark:bg-transparent"
                }`}
                onClick={() => goToTab("3")}
              >
                <svg
                  className={`font-semibold ${
                    activeTab === "3"
                      ? "stroke-[#fff] dark:stroke-[#fff]"
                      : "stroke-[#000] dark:stroke-[#fff]"
                  }`}
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.58301 21.5003C3.58301 15.1623 3.58301 11.9933 5.46927 9.8776C5.77097 9.53921 6.10349 9.22625 6.46303 8.9423C8.711 7.16699 12.0781 7.16699 18.8122 7.16699H24.1872C30.9213 7.16699 34.2883 7.16699 36.5363 8.9423C36.8959 9.22625 37.2284 9.53921 37.5301 9.8776C39.4163 11.9933 39.4163 15.1623 39.4163 21.5003C39.4163 27.8383 39.4163 31.0073 37.5301 33.123C37.2284 33.4614 36.8959 33.7744 36.5363 34.0583C34.2883 35.8337 30.9213 35.8337 24.1872 35.8337H18.8122C12.0781 35.8337 8.711 35.8337 6.46303 34.0583C6.10349 33.7744 5.77097 33.4614 5.46927 33.123C3.58301 31.0073 3.58301 27.8383 3.58301 21.5003Z"
                    strokeWidth="2.6875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.0703 21.4997C26.0703 23.9734 24.0649 25.9788 21.5911 25.9788C19.1173 25.9788 17.1119 23.9734 17.1119 21.4997C17.1119 19.0259 19.1173 17.0205 21.5911 17.0205C24.0649 17.0205 26.0703 19.0259 26.0703 21.4997Z"
                    strokeWidth="2.6875"
                  />
                  <path
                    d="M8.95801 21.5L10.7497 21.5"
                    strokeWidth="2.6875"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32.2498 21.5L34.0414 21.5"
                    strokeWidth="2.6875"
                    strokeLinecap="round"
                  />
                </svg>

                <span
                  className={`${
                    activeTab === "3"
                      ? "text-[#fff] dark:text-[#fff] font-semibold"
                      : "text-[#000] dark:text-[#fff]"
                  }`}
                >
                  بهترین قیمت
                </span>
              </div>
            </div>
          </div>
          <div className="opacity-0 animate-fade-in-up col-span-full lg:col-span-5" style={{ animationDelay: "200ms" }}>
            <img
              src="/images/landing/pick-card.webp"
              alt="pikc-card"
              className="art-float w-full h-full object-cover dark:hidden"
              style={{ "--float-y": "12px", "--float-r": "-1.2deg", "--float-d": "6.5s" }}
            />
            <img
              src="/images/landing/pick-card-dark.webp"
              alt="pikc-card"
              className="art-float w-full h-full object-cover hidden dark:block"
              style={{ "--float-y": "12px", "--float-r": "-1.2deg", "--float-d": "6.5s" }}
            />
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 p-1 relative fade-in">
        <div className="flex">
          <span className="opacity-0 animate-fade-in-up rounded-2xl px-4 py-2 mx-auto flex items-center justify-center bg-[#EFEFEF] dark:bg-[#0D2D37] dark:text-[#fff] font-semibold">
            راهنمای اتصال{" "}
          </span>
        </div>

        <h2
          className="opacity-0 animate-fade-in-up mt-10 text-center w-full text-2xl md:text-[32px] font-semibold dark:text-[#fff] mb-5"
          style={{ animationDelay: "120ms" }}
        >
          شروع درآمدزایی ارزی، فقط در ۳ مرحله{" "}
        </h2>

        <div
          ref={stepsRef}
          className="mt-12 w-full flex items-center lg:justify-center gap-20 overflow-x-auto overflow-y-hidden no-scrollbar relative z-10 pt-10"
        >
          <div className="absolute right-0 top-[65px] w-full h-1 border-t-2 border-[#B4B4B4] border-dashed dark:border-[#ffffff90] -z-10" />
          <div
            className="absolute right-0 top-[65px] h-1 bg-gradient-to-l from-[#16B3A7] to-[#2B758C] -z-10 transition-[width] duration-[900ms] ease-in-out"
            style={{ width: stepsInView ? `${stepOffsets[activeStep]}px` : "0px" }}
          />
          <div
            className={`absolute top-[59px] w-3 h-3 rounded-full bg-[#6CE4DB] shadow-[0_0_10px_3px_rgba(108,228,219,0.7)] -z-10 pointer-events-none transition-[right,opacity] duration-[900ms] ease-in-out ${
              stepsInView ? "opacity-100" : "opacity-0"
            }`}
            style={{
              right: stepsInView ? `${stepOffsets[activeStep] - 6}px` : "0px",
            }}
          />
          <div
            className={`flex flex-col justify-center items-center gap-6 w-[400px] shrink-0 lg:shrink transition-all duration-700 ease-out ${
              stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div
              ref={(el) => (circleRefs.current[0] = el)}
              className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-[radial-gradient(288.22%_288.22%_at_49.92%_50%,#16B3A7_0%,#2B758C_55%)] border border-[#EEEEEE] transition-all duration-500 ease-out"
              style={{
                transform: stepsInView ? "scale(1)" : "scale(0.5)",
                transitionDelay: "150ms",
                boxShadow:
                  activeStep === 0
                    ? "0 0 0 4px rgba(108,228,219,0.22), 0 0 22px 4px rgba(108,228,219,0.35)"
                    : "0 0 0 0px rgba(108,228,219,0)",
              }}
            >
              <div
                className={stepsInView ? "animate-icon-float" : ""}
                style={{ animationDelay: "650ms" }}
              >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1382 20.1135C24.2959 20.2074 24.4906 20.3173 24.7112 20.4417C25.6775 20.9869 27.1382 21.811 28.1388 22.7904C28.7647 23.403 29.3594 24.2103 29.4675 25.1993C29.5824 26.2511 29.1236 27.2381 28.2031 28.115C26.615 29.628 24.7093 30.8404 22.2444 30.8404H10.29C7.82509 30.8404 5.91937 29.628 4.33131 28.115C3.41082 27.2381 2.95198 26.2511 3.06695 25.1993C3.17506 24.2103 3.76971 23.403 4.39556 22.7904C5.39624 21.811 6.85695 20.9869 7.82326 20.4417C8.04376 20.3173 8.23856 20.2074 8.39623 20.1135C13.2142 17.2447 19.3202 17.2447 24.1382 20.1135Z"
                  fill="url(#paint0_linear_1180_17051)"
                />
                <path
                  d="M9.15014 8.8114C9.15014 4.88075 12.3366 1.69434 16.2672 1.69434C20.1979 1.69434 23.3843 4.88075 23.3843 8.8114C23.3843 12.742 20.1979 15.9285 16.2672 15.9285C12.3366 15.9285 9.15014 12.742 9.15014 8.8114Z"
                  fill="url(#paint1_linear_1180_17051)"
                />
                <path
                  d="M24.1382 20.1135L24.5345 19.4479L24.5345 19.4479L24.1382 20.1135ZM24.7112 20.4417L25.0918 19.767H25.0918L24.7112 20.4417ZM28.1388 22.7904L28.6807 22.2369L28.1388 22.7904ZM29.4675 25.1993L28.6974 25.2835V25.2835L29.4675 25.1993ZM28.2031 28.115L28.7374 28.6759L28.2031 28.115ZM4.33131 28.115L3.79698 28.6759L4.33131 28.115ZM3.06695 25.1993L3.83701 25.2835L3.06695 25.1993ZM4.39556 22.7904L3.8537 22.2369H3.8537L4.39556 22.7904ZM7.82326 20.4417L8.2039 21.1164H8.2039L7.82326 20.4417ZM8.39623 20.1135L7.99991 19.4479H7.99991L8.39623 20.1135ZM24.1382 20.1135L23.7419 20.7791C23.909 20.8787 24.1127 20.9935 24.3305 21.1164L24.7112 20.4417L25.0918 19.767C24.8686 19.6411 24.6827 19.5362 24.5345 19.4479L24.1382 20.1135ZM24.7112 20.4417L24.3305 21.1164C25.3163 21.6725 26.6822 22.4486 27.597 23.344L28.1388 22.7904L28.6807 22.2369C27.5942 21.1733 26.0386 20.3012 25.0918 19.767L24.7112 20.4417ZM28.1388 22.7904L27.597 23.344C28.1707 23.9056 28.6178 24.5554 28.6974 25.2835L29.4675 25.1993L30.2375 25.1151C30.1009 23.8652 29.3588 22.9005 28.6807 22.2369L28.1388 22.7904ZM29.4675 25.1993L28.6974 25.2835C28.7785 26.0253 28.4726 26.7883 27.6688 27.5542L28.2031 28.115L28.7374 28.6759C29.7746 27.6878 30.3864 26.4768 30.2375 25.1151L29.4675 25.1993ZM28.2031 28.115L27.6688 27.5542C26.1504 29.0007 24.4272 30.0658 22.2444 30.0658V30.8404V31.6151C24.9915 31.6151 27.0796 30.2553 28.7374 28.6759L28.2031 28.115ZM22.2444 30.8404V30.0658H10.29V30.8404V31.6151H22.2444V30.8404ZM10.29 30.8404V30.0658C8.10725 30.0658 6.38396 29.0007 4.86565 27.5542L4.33131 28.115L3.79698 28.6759C5.45477 30.2553 7.54293 31.6151 10.29 31.6151V30.8404ZM4.33131 28.115L4.86565 27.5542C4.0618 26.7883 3.75592 26.0253 3.83701 25.2835L3.06695 25.1993L2.29689 25.1151C2.14805 26.4768 2.75984 27.6878 3.79698 28.6759L4.33131 28.115ZM3.06695 25.1993L3.83701 25.2835C3.91659 24.5554 4.36376 23.9056 4.93743 23.344L4.39556 22.7904L3.8537 22.2369C3.17566 22.9005 2.43352 23.8652 2.29689 25.1151L3.06695 25.1993ZM4.39556 22.7904L4.93742 23.344C5.85223 22.4486 7.21811 21.6725 8.2039 21.1164L7.82326 20.4417L7.44263 19.767C6.4958 20.3012 4.94026 21.1733 3.8537 22.2369L4.39556 22.7904ZM7.82326 20.4417L8.2039 21.1164C8.4217 20.9935 8.62539 20.8787 8.79255 20.7791L8.39623 20.1135L7.99991 19.4479C7.85173 19.5362 7.66582 19.6411 7.44263 19.767L7.82326 20.4417ZM8.39623 20.1135L8.79255 20.7791C13.3663 18.0557 19.1681 18.0557 23.7419 20.7791L24.1382 20.1135L24.5345 19.4479C19.4723 16.4337 13.0621 16.4337 7.99991 19.4479L8.39623 20.1135ZM9.15014 8.8114H9.92479C9.92479 5.30858 12.7644 2.46898 16.2672 2.46898V1.69434V0.919689C11.9087 0.919689 8.3755 4.45293 8.3755 8.8114H9.15014ZM16.2672 1.69434V2.46898C19.77 2.46898 22.6096 5.30858 22.6096 8.8114H23.3843H24.1589C24.1589 4.45293 20.6257 0.919689 16.2672 0.919689V1.69434ZM23.3843 8.8114H22.6096C22.6096 12.3142 19.77 15.1538 16.2672 15.1538V15.9285V16.7031C20.6257 16.7031 24.1589 13.1699 24.1589 8.8114H23.3843ZM16.2672 15.9285V15.1538C12.7644 15.1538 9.92479 12.3142 9.92479 8.8114H9.15014H8.3755C8.3755 13.1699 11.9087 16.7031 16.2672 16.7031V15.9285Z"
                  fill="url(#paint2_linear_1180_17051)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1180_17051"
                    x1="16.2672"
                    y1="1.69434"
                    x2="16.2672"
                    y2="30.8404"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1180_17051"
                    x1="16.2672"
                    y1="1.69434"
                    x2="16.2672"
                    y2="30.8404"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1180_17051"
                    x1="16.2672"
                    y1="1.69434"
                    x2="16.2672"
                    y2="30.8404"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </div>

            <span className="text-[15px] text-center sm:text-2xl font-semibold dark:text-[#fff]">
              ثبت نام در سایت
            </span>

            <p className="text-center dark:text-[#BDBDBD] max-w-[290px] mx-auto">
              کافیست در رمزینو ثبت‌نام کنید و مدارک خود را بارگذاری نمایید.
              سیستم احراز هویت هوشمند ما در کمتر از ۱۰ دقیقه حساب شما را فعال
              می‌کند.
            </p>
          </div>

          <div
            className={`flex flex-col justify-center items-center gap-6 w-[400px] shrink-0 lg:shrink transition-all duration-700 ease-out ${
              stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div
              ref={(el) => (circleRefs.current[1] = el)}
              className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-[#fff] border border-[#EEEEEE] dark:bg-[#1E333A] dark:border-0 transition-all duration-500 ease-out"
              style={{
                transform: stepsInView ? "scale(1)" : "scale(0.5)",
                transitionDelay: "400ms",
                boxShadow:
                  activeStep === 1
                    ? "0 0 0 4px rgba(108,228,219,0.22), 0 0 22px 4px rgba(108,228,219,0.35)"
                    : "0 0 0 0px rgba(108,228,219,0)",
              }}
            >
              <div
                className={stepsInView ? "animate-icon-float" : ""}
                style={{ animationDelay: "900ms" }}
              >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.437 7.62402C31.5877 7.62402 39.4289 13.8478 39.4292 22.001C39.4292 26.0324 37.4764 29.631 34.4204 32.2012C34.2622 32.3342 34.2007 32.4943 34.2007 32.6182V36.8145C34.2007 37.5362 33.6157 38.1209 32.894 38.1211H29.4077C28.9817 38.1209 28.5819 37.9134 28.3374 37.5645L27.1196 35.8271C24.06 36.5676 20.814 36.5677 17.7544 35.8271L16.5366 37.5645C16.292 37.9135 15.8925 38.1211 15.4663 38.1211H11.981C11.2591 38.121 10.6743 37.5363 10.6743 36.8145V32.6592C10.6743 32.5159 10.6038 32.3811 10.4858 32.2998C10.0985 32.0327 9.47113 31.6864 8.64697 31.2314L8.56201 31.1846C7.73037 30.7254 6.75793 30.1851 5.83838 29.5938C4.92724 29.0078 4.0045 28.3327 3.29736 27.584C2.61114 26.8574 1.96045 25.8847 1.96045 24.7168V22.001C1.96067 20.3345 3.2426 18.8271 5.01025 18.8271C5.38015 18.8271 5.60278 18.7539 5.729 18.6768C5.83027 18.6148 5.94761 18.506 6.03467 18.2334C8.02595 11.9984 14.7273 7.62414 22.437 7.62402ZM12.8521 17.6445C11.8897 17.6447 11.1099 18.4253 11.1099 19.3877C11.1101 20.3499 11.8899 21.1297 12.8521 21.1299H12.8677C13.83 21.1299 14.6106 20.35 14.6108 19.3877C14.6108 18.4252 13.8301 17.6445 12.8677 17.6445H12.8521ZM21.5659 11.9805C20.1271 11.9805 18.7528 12.3441 17.4829 12.9971C16.8412 13.3272 16.5884 14.115 16.9185 14.7568C17.2485 15.3987 18.0363 15.6513 18.6782 15.3213C19.6108 14.8417 20.578 14.5948 21.5659 14.5947C22.5538 14.5947 23.521 14.8418 24.4536 15.3213C25.0956 15.6514 25.8842 15.3988 26.2144 14.7568C26.5443 14.1149 26.2908 13.3271 25.6489 12.9971C24.379 12.3441 23.0048 11.9805 21.5659 11.9805Z"
                  fill="url(#paint0_linear_1180_17044)"
                />
                <path
                  d="M22.437 7.62402L22.437 6.92694L22.437 6.92694L22.437 7.62402ZM39.4292 22.001L40.1263 22.001L40.1263 22.001L39.4292 22.001ZM34.4204 32.2012L34.8691 32.7347L34.8691 32.7347L34.4204 32.2012ZM32.894 38.1211L32.894 38.8182L32.8943 38.8182L32.894 38.1211ZM29.4077 38.1211L29.4075 38.8182H29.4077V38.1211ZM28.3374 37.5645L28.9082 37.1644L28.9082 37.1643L28.3374 37.5645ZM27.1196 35.8271L27.6904 35.427C27.5259 35.1922 27.2343 35.0822 26.9557 35.1496L27.1196 35.8271ZM17.7544 35.8271L17.9184 35.1496C17.6397 35.0822 17.3482 35.1922 17.1836 35.427L17.7544 35.8271ZM16.5366 37.5645L15.9658 37.1643L15.9658 37.1644L16.5366 37.5645ZM11.981 38.1211L11.9809 38.8182H11.981V38.1211ZM10.4858 32.2998L10.8815 31.7259L10.8815 31.7259L10.4858 32.2998ZM8.64697 31.2314L8.98386 30.6212L8.98372 30.6211L8.64697 31.2314ZM8.56201 31.1846L8.22509 31.7948L8.22527 31.7949L8.56201 31.1846ZM5.83838 29.5938L6.21543 29.0074L6.21543 29.0074L5.83838 29.5938ZM3.29736 27.584L2.79056 28.0626L2.79057 28.0626L3.29736 27.584ZM1.96045 22.001L1.26336 22.0009V22.001H1.96045ZM5.01025 18.8271L5.01025 19.5242L5.01027 19.5242L5.01025 18.8271ZM5.729 18.6768L6.09247 19.2716L6.09265 19.2715L5.729 18.6768ZM6.03467 18.2334L5.37063 18.0213L5.37062 18.0213L6.03467 18.2334ZM12.8521 17.6445L12.8521 16.9474L12.8519 16.9474L12.8521 17.6445ZM11.1099 19.3877L10.4128 19.3877L10.4128 19.3878L11.1099 19.3877ZM12.8521 21.1299L12.8519 21.827H12.8521V21.1299ZM14.6108 19.3877L15.3079 19.3878V19.3877H14.6108ZM21.5659 11.9805L21.5659 11.2834L21.5659 11.2834L21.5659 11.9805ZM17.4829 12.9971L17.1641 12.3771L17.164 12.3772L17.4829 12.9971ZM16.9185 14.7568L16.2985 15.0756L16.2985 15.0756L16.9185 14.7568ZM18.6782 15.3213L18.9969 15.9412L18.997 15.9412L18.6782 15.3213ZM21.5659 14.5947L21.5659 13.8976L21.5659 13.8976L21.5659 14.5947ZM24.4536 15.3213L24.7724 14.7014L24.7724 14.7013L24.4536 15.3213ZM26.2144 14.7568L26.8343 15.0756L26.8343 15.0755L26.2144 14.7568ZM25.6489 12.9971L25.9677 12.3771L25.9677 12.3771L25.6489 12.9971ZM22.437 7.62402V8.32111C31.3303 8.32111 38.7319 14.349 38.7321 22.001L39.4292 22.001L40.1263 22.001C40.126 13.3465 31.8451 6.92694 22.437 6.92694V7.62402ZM39.4292 22.001H38.7321C38.7321 25.7955 36.8958 29.2085 33.9717 31.6677L34.4204 32.2012L34.8691 32.7347C38.0571 30.0535 40.1263 26.2694 40.1263 22.001H39.4292ZM34.4204 32.2012L33.9717 31.6677C33.6703 31.9212 33.5036 32.2706 33.5036 32.6182H34.2007H34.8978C34.8978 32.7179 34.8542 32.7472 34.8691 32.7347L34.4204 32.2012ZM34.2007 32.6182H33.5036V36.8145H34.2007H34.8978V32.6182H34.2007ZM34.2007 36.8145H33.5036C33.5036 37.1509 33.2309 37.4239 32.8938 37.424L32.894 38.1211L32.8943 38.8182C34.0005 38.8178 34.8978 37.9214 34.8978 36.8145H34.2007ZM32.894 38.1211V37.424H29.4077V38.1211V38.8182H32.894V38.1211ZM29.4077 38.1211L29.408 37.424C29.2086 37.4239 29.0221 37.3268 28.9082 37.1644L28.3374 37.5645L27.7666 37.9645C28.1418 38.5 28.7547 38.818 29.4075 38.8182L29.4077 38.1211ZM28.3374 37.5645L28.9082 37.1643L27.6904 35.427L27.1196 35.8271L26.5488 36.2273L27.7666 37.9646L28.3374 37.5645ZM27.1196 35.8271L26.9557 35.1496C24.0037 35.864 20.8703 35.8641 17.9184 35.1496L17.7544 35.8271L17.5904 36.5047C20.7578 37.2713 24.1162 37.2712 27.2836 36.5047L27.1196 35.8271ZM17.7544 35.8271L17.1836 35.427L15.9658 37.1643L16.5366 37.5645L17.1074 37.9646L18.3252 36.2273L17.7544 35.8271ZM16.5366 37.5645L15.9658 37.1644C15.8518 37.327 15.6655 37.424 15.4663 37.424V38.1211V38.8182C16.1196 38.8182 16.7322 38.4999 17.1075 37.9645L16.5366 37.5645ZM15.4663 38.1211V37.424H11.981V38.1211V38.8182H15.4663V38.1211ZM11.981 38.1211L11.981 37.424C11.6441 37.424 11.3714 37.1512 11.3714 36.8145H10.6743H9.97723C9.97723 37.9213 10.8742 38.8181 11.9809 38.8182L11.981 38.1211ZM10.6743 36.8145H11.3714V32.6592H10.6743H9.97723V36.8145H10.6743ZM10.6743 32.6592H11.3714C11.3714 32.2876 11.1889 31.9378 10.8815 31.7259L10.4858 32.2998L10.0901 32.8737C10.0187 32.8244 9.97723 32.7443 9.97723 32.6592H10.6743ZM10.4858 32.2998L10.8815 31.7259C10.4582 31.4341 9.79212 31.0673 8.98386 30.6212L8.64697 31.2314L8.31009 31.8417C9.15015 32.3055 9.73871 32.6314 10.0902 32.8737L10.4858 32.2998ZM8.64697 31.2314L8.98372 30.6211L8.89876 30.5742L8.56201 31.1846L8.22527 31.7949L8.31023 31.8418L8.64697 31.2314ZM8.56201 31.1846L8.89893 30.5743C8.06605 30.1145 7.11279 29.5845 6.21543 29.0074L5.83838 29.5938L5.46133 30.1801C6.40307 30.7857 7.39469 31.3364 8.22509 31.7948L8.56201 31.1846ZM5.83838 29.5938L6.21543 29.0074C5.32189 28.4328 4.45406 27.7935 3.80415 27.1053L3.29736 27.584L2.79057 28.0626C3.55494 28.8719 4.53259 29.5828 5.46133 30.1801L5.83838 29.5938ZM3.29736 27.584L3.80417 27.1054C3.1636 26.4271 2.65753 25.62 2.65753 24.7168H1.96045H1.26336C1.26336 26.1494 2.05868 27.2876 2.79056 28.0626L3.29736 27.584ZM1.96045 24.7168H2.65753V22.001H1.96045H1.26336V24.7168H1.96045ZM1.96045 22.001L2.65753 22.0011C2.65771 20.6675 3.67757 19.5242 5.01025 19.5242V18.8271V18.1301C2.80764 18.1301 1.26362 20.0014 1.26336 22.0009L1.96045 22.001ZM5.01025 18.8271L5.01027 19.5242C5.46594 19.5242 5.82549 19.4347 6.09247 19.2716L5.729 18.6768L5.36554 18.0819C5.38007 18.073 5.29435 18.1301 5.01024 18.1301L5.01025 18.8271ZM5.729 18.6768L6.09265 19.2715C6.34663 19.1162 6.56436 18.8662 6.69871 18.4455L6.03467 18.2334L5.37062 18.0213C5.34652 18.0968 5.32879 18.1167 5.33379 18.1102C5.33621 18.107 5.34146 18.101 5.34941 18.094C5.35723 18.0872 5.3636 18.0831 5.36535 18.082L5.729 18.6768ZM6.03467 18.2334L6.69871 18.4455C8.57904 12.5579 14.9643 8.32122 22.437 8.32111L22.437 7.62402L22.437 6.92694C14.4903 6.92706 7.47286 11.4389 5.37063 18.0213L6.03467 18.2334ZM12.8521 17.6445L12.8519 16.9474C11.5043 16.9477 10.4128 18.0407 10.4128 19.3877H11.1099H11.8069C11.8069 18.81 12.2751 18.3417 12.8522 18.3416L12.8521 17.6445ZM11.1099 19.3877L10.4128 19.3878C10.4131 20.7349 11.5048 21.8267 12.8519 21.827L12.8521 21.1299L12.8522 20.4328C12.2749 20.4327 11.8071 19.9649 11.8069 19.3876L11.1099 19.3877ZM12.8521 21.1299V21.827H12.8677V21.1299V20.4328H12.8521V21.1299ZM12.8677 21.1299V21.827C14.2147 21.827 15.3076 20.7354 15.3079 19.3878L14.6108 19.3877L13.9138 19.3876C13.9136 19.9646 13.4454 20.4328 12.8677 20.4328V21.1299ZM14.6108 19.3877H15.3079C15.3079 18.0402 14.2151 16.9474 12.8677 16.9474V17.6445V18.3416C13.4452 18.3416 13.9138 18.8102 13.9138 19.3877H14.6108ZM12.8677 17.6445V16.9474H12.8521V17.6445V18.3416H12.8677V17.6445ZM21.5659 11.9805L21.5659 11.2834C20.0066 11.2834 18.5238 11.678 17.1641 12.3771L17.4829 12.9971L17.8017 13.617C18.9818 13.0101 20.2475 12.6776 21.5659 12.6776L21.5659 11.9805ZM17.4829 12.9971L17.164 12.3772C16.18 12.8835 15.7925 14.0913 16.2985 15.0756L16.9185 14.7568L17.5384 14.4381C17.3844 14.1386 17.5023 13.771 17.8018 13.6169L17.4829 12.9971ZM16.9185 14.7568L16.2985 15.0756C16.8048 16.06 18.0128 16.4472 18.9969 15.9412L18.6782 15.3213L18.3595 14.7013C18.0598 14.8554 17.6923 14.7374 17.5384 14.4381L16.9185 14.7568ZM18.6782 15.3213L18.997 15.9412C19.8396 15.5079 20.6981 15.2919 21.566 15.2918L21.5659 14.5947L21.5659 13.8976C20.4579 13.8977 19.3821 14.1755 18.3594 14.7014L18.6782 15.3213ZM21.5659 14.5947V15.2918C22.4336 15.2918 23.2922 15.508 24.1349 15.9412L24.4536 15.3213L24.7724 14.7013C23.7498 14.1756 22.674 13.8976 21.5659 13.8976V14.5947ZM24.4536 15.3213L24.1348 15.9412C25.1188 16.4472 26.3279 16.0603 26.8343 15.0756L26.2144 14.7568L25.5944 14.4381C25.4406 14.7373 25.0723 14.8556 24.7724 14.7014L24.4536 15.3213ZM26.2144 14.7568L26.8343 15.0755C27.3406 14.0906 26.9513 12.883 25.9677 12.3771L25.6489 12.9971L25.3301 13.617C25.6303 13.7713 25.748 14.1392 25.5944 14.4382L26.2144 14.7568ZM25.6489 12.9971L25.9677 12.3771C24.6081 11.678 23.1252 11.2834 21.5659 11.2834V11.9805V12.6776C22.8843 12.6776 24.1499 13.0101 25.3302 13.617L25.6489 12.9971Z"
                  fill="url(#paint1_linear_1180_17044)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.1472 16.263C35.8278 16.9436 36.9312 16.9436 37.6118 16.263C38.8074 15.0674 39.8649 12.9922 39.8649 10.3786C39.8649 6.59774 36.6471 3.7031 32.8941 3.7031C32.0942 3.7031 31.3216 3.83268 30.6001 4.07329C29.687 4.37777 29.1937 5.36477 29.4982 6.27781C29.8027 7.19085 30.7897 7.68419 31.7027 7.3797C32.0714 7.25676 32.4719 7.18852 32.8941 7.18852C34.9159 7.18852 36.3795 8.71086 36.3795 10.3786C36.3795 12.0605 35.6944 13.2513 35.1472 13.7984C34.4667 14.479 34.4667 15.5824 35.1472 16.263Z"
                  fill="url(#paint2_linear_1180_17044)"
                  stroke="url(#paint3_linear_1180_17044)"
                  strokeWidth="1.39417"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1180_17044"
                    x1="20.6948"
                    y1="7.62402"
                    x2="20.6948"
                    y2="56.844"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#55BAB8" />
                    <stop offset="1" stopColor="#2BA8A6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1180_17044"
                    x1="20.6948"
                    y1="7.62402"
                    x2="20.6948"
                    y2="38.1211"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6CE4DB" />
                    <stop offset="1" stopColor="#6CE4DB" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1180_17044"
                    x1="34.6366"
                    y1="16.7734"
                    x2="34.6366"
                    y2="-4.3211"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#55BAB8" />
                    <stop offset="1" stopColor="#2BA8A6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1180_17044"
                    x1="34.6366"
                    y1="16.7734"
                    x2="34.6366"
                    y2="3.7031"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6CE4DB" />
                    <stop offset="1" stopColor="#6CE4DB" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </div>

            <span className="text-[15px] text-center sm:text-2xl font-semibold dark:text-[#fff]">
              پیکربندی مالی و تسویه
            </span>

            <p className="text-center dark:text-[#BDBDBD] max-w-[290px] mx-auto">
              تعیین کنید درآمدتان را چطور دریافت کنید (ریال یا تتر؟). در این
              مرحله کیف پول مقصد را متصل کرده و تنظیمات مربوط به کارمزدها را
              نهایی می‌کنید.
            </p>
          </div>

          <div
            className={`flex flex-col justify-center items-center gap-6 w-[400px] shrink-0 lg:shrink transition-all duration-700 ease-out ${
              stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div
              ref={(el) => (circleRefs.current[2] = el)}
              className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-[#fff] border border-[#EEEEEE] dark:bg-[#1E333A] dark:border-0 transition-all duration-500 ease-out"
              style={{
                transform: stepsInView ? "scale(1)" : "scale(0.5)",
                transitionDelay: "650ms",
                boxShadow:
                  activeStep === 2
                    ? "0 0 0 4px rgba(108,228,219,0.22), 0 0 22px 4px rgba(108,228,219,0.35)"
                    : "0 0 0 0px rgba(108,228,219,0)",
              }}
            >
              <div
                className={stepsInView ? "animate-icon-float" : ""}
                style={{ animationDelay: "1150ms" }}
              >
              <svg
                width="40"
                height="40"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M35.6121 17.665C38.8173 17.665 41.3346 17.6655 43.3191 17.8896C45.3446 18.1185 46.987 18.5956 48.3523 19.6738C48.761 19.9966 49.1405 20.3528 49.4851 20.7393C50.6461 22.0415 51.1639 23.6202 51.4109 25.5566C51.6508 27.438 51.6511 29.8194 51.6511 32.8242V33.0078C51.6511 36.0124 51.6508 38.3931 51.4109 40.2744C51.1639 42.2111 50.6462 43.7904 49.4851 45.0928C49.1405 45.4792 48.761 45.8354 48.3523 46.1582C46.987 47.2364 45.3445 47.7136 43.3191 47.9424C41.3346 48.1665 38.8173 48.166 35.6121 48.166H30.2175C27.0123 48.166 24.495 48.1665 22.5105 47.9424C20.485 47.7136 18.8426 47.2364 17.4773 46.1582C17.0686 45.8354 16.689 45.4792 16.3445 45.0928C15.1834 43.7904 14.6657 42.2111 14.4187 40.2744C14.1788 38.3931 14.1784 36.0124 14.1785 33.0078V32.8242C14.1784 29.8194 14.1788 27.438 14.4187 25.5566C14.6657 23.6202 15.1835 22.0415 16.3445 20.7393C16.689 20.3528 17.0686 19.9966 17.4773 19.6738C18.8426 18.5956 20.485 18.1185 22.5105 17.8896C23.9989 17.7215 25.787 17.6794 27.9402 17.6689L30.2175 17.665H35.6121ZM32.9148 27.6875C30.027 27.6875 27.6863 30.0283 27.6863 32.916C27.6863 35.8038 30.027 38.1445 32.9148 38.1445C35.8025 38.1445 38.1433 35.8037 38.1433 32.916C38.1433 30.0283 35.8025 27.6875 32.9148 27.6875ZM21.572 31.1729C20.6095 31.1729 19.8289 31.9535 19.8289 32.916C19.8289 33.8785 20.6095 34.6591 21.572 34.6592H21.5876C22.5502 34.6592 23.3308 33.8786 23.3308 32.916C23.3308 31.9534 22.5502 31.1729 21.5876 31.1729H21.572ZM44.2458 31.1729C43.2833 31.1729 42.5027 31.9534 42.5027 32.916C42.5027 33.8786 43.2833 34.6592 44.2458 34.6592H44.2615C45.2239 34.659 46.0036 33.8785 46.0037 32.916C46.0037 31.9536 45.2239 31.1731 44.2615 31.1729H44.2458Z"
                    fill="url(#paint0_linear_1180_17037)"
                  />
                  <path
                    d="M35.6121 17.665V18.3622H35.6121L35.6121 17.665ZM43.3191 17.8896L43.3974 17.1969L43.3973 17.1969L43.3191 17.8896ZM48.3523 19.6738L48.7844 19.1267L48.7844 19.1267L48.3523 19.6738ZM49.4851 20.7393L50.0055 20.2753V20.2753L49.4851 20.7393ZM51.4109 25.5566L52.1025 25.4685L52.1025 25.4684L51.4109 25.5566ZM51.6511 32.8242L50.954 32.8242V32.8242H51.6511ZM51.6511 33.0078H50.954V33.0078L51.6511 33.0078ZM51.4109 40.2744L52.1025 40.3626V40.3626L51.4109 40.2744ZM49.4851 45.0928L50.0055 45.5567V45.5567L49.4851 45.0928ZM48.3523 46.1582L48.7844 46.7053L48.7844 46.7053L48.3523 46.1582ZM43.3191 47.9424L43.3973 48.6351H43.3974L43.3191 47.9424ZM35.6121 48.166L35.6121 47.4688H35.6121V48.166ZM30.2175 48.166V47.4688H30.2175L30.2175 48.166ZM22.5105 47.9424L22.4322 48.6351H22.4322L22.5105 47.9424ZM17.4773 46.1582L17.0452 46.7053L17.0452 46.7053L17.4773 46.1582ZM16.3445 45.0928L15.8241 45.5567L15.8241 45.5567L16.3445 45.0928ZM14.4187 40.2744L13.7271 40.3626L13.7271 40.3626L14.4187 40.2744ZM14.1785 33.0078L14.8756 33.0078V33.0078H14.1785ZM14.1785 32.8242H14.8756V32.8242L14.1785 32.8242ZM14.4187 25.5566L13.7271 25.4684L13.7271 25.4685L14.4187 25.5566ZM16.3445 20.7393L15.8241 20.2753L15.8241 20.2753L16.3445 20.7393ZM17.4773 19.6738L17.0452 19.1267L17.0452 19.1267L17.4773 19.6738ZM22.5105 17.8896L22.4322 17.1969L22.4322 17.1969L22.5105 17.8896ZM27.9402 17.6689L27.939 16.9718L27.9368 16.9718L27.9402 17.6689ZM30.2175 17.665V16.9679L30.2163 16.9679L30.2175 17.665ZM32.9148 27.6875L32.9148 26.9903H32.9148V27.6875ZM27.6863 32.916H26.9891V32.916L27.6863 32.916ZM32.9148 38.1445V38.8417H32.9148L32.9148 38.1445ZM38.1433 32.916L38.8405 32.916V32.916H38.1433ZM21.572 31.1729V30.4757H21.572L21.572 31.1729ZM19.8289 32.916H19.1317L19.1317 32.916L19.8289 32.916ZM21.572 34.6592L21.572 35.3563H21.572V34.6592ZM23.3308 32.916L24.028 32.916V32.916H23.3308ZM42.5027 32.916H41.8055V32.916L42.5027 32.916ZM44.2615 34.6592V35.3563H44.2616L44.2615 34.6592ZM46.0037 32.916L46.7008 32.916V32.916H46.0037ZM44.2615 31.1729L44.2616 30.4757H44.2615V31.1729ZM35.6121 17.665L35.6121 18.3622C38.8327 18.3622 41.3044 18.3637 43.2408 18.5824L43.3191 17.8896L43.3973 17.1969C41.3649 16.9673 38.8019 16.9679 35.6121 16.9679L35.6121 17.665ZM43.3191 17.8896L43.2408 18.5824C45.2052 18.8043 46.6999 19.2573 47.9202 20.221L48.3523 19.6738L48.7844 19.1267C47.274 17.9339 45.4839 17.4326 43.3974 17.1969L43.3191 17.8896ZM48.3523 19.6738L47.9202 20.221C48.298 20.5193 48.6478 20.8477 48.9647 21.2032L49.4851 20.7393L50.0055 20.2753C49.6333 19.8578 49.2241 19.474 48.7844 19.1267L48.3523 19.6738ZM49.4851 20.7393L48.9647 21.2032C49.9956 22.3595 50.4817 23.7816 50.7193 25.6448L51.4109 25.5566L52.1025 25.4684C51.8461 23.4588 51.2966 21.7235 50.0055 20.2753L49.4851 20.7393ZM51.4109 25.5566L50.7193 25.6448C50.9523 27.4721 50.954 29.8022 50.954 32.8242L51.6511 32.8242L52.3483 32.8242C52.3483 29.8366 52.3493 27.4038 52.1025 25.4685L51.4109 25.5566ZM51.6511 32.8242H50.954V33.0078H51.6511H52.3483V32.8242H51.6511ZM51.6511 33.0078L50.954 33.0078C50.954 36.0296 50.9523 38.359 50.7193 40.1862L51.4109 40.2744L52.1025 40.3626C52.3492 38.4273 52.3483 35.9952 52.3483 33.0078L51.6511 33.0078ZM51.4109 40.2744L50.7193 40.1862C50.4817 42.0498 49.9957 43.4725 48.9647 44.6288L49.4851 45.0928L50.0055 45.5567C51.2967 44.1084 51.8462 42.3724 52.1025 40.3626L51.4109 40.2744ZM49.4851 45.0928L48.9647 44.6288C48.6478 44.9843 48.2979 45.3128 47.9202 45.6111L48.3523 46.1582L48.7844 46.7053C49.2241 46.3581 49.6333 45.9742 50.0055 45.5567L49.4851 45.0928ZM48.3523 46.1582L47.9202 45.6111C46.6999 46.5747 45.2052 47.0277 43.2408 47.2496L43.3191 47.9424L43.3974 48.6351C45.4839 48.3994 47.274 47.8981 48.7844 46.7053L48.3523 46.1582ZM43.3191 47.9424L43.2408 47.2496C41.3045 47.4684 38.833 47.4689 35.6121 47.4688L35.6121 48.166L35.6121 48.8632C38.8016 48.8632 41.3648 48.8647 43.3973 48.6351L43.3191 47.9424ZM35.6121 48.166V47.4688H30.2175V48.166V48.8632H35.6121V48.166ZM30.2175 48.166L30.2175 47.4688C26.9966 47.4689 24.5251 47.4684 22.5888 47.2496L22.5105 47.9424L22.4322 48.6351C24.4648 48.8647 27.028 48.8632 30.2175 48.8632L30.2175 48.166ZM22.5105 47.9424L22.5888 47.2496C20.6244 47.0277 19.1297 46.5747 17.9094 45.6111L17.4773 46.1582L17.0452 46.7053C18.5556 47.8981 20.3457 48.3994 22.4322 48.6351L22.5105 47.9424ZM17.4773 46.1582L17.9094 45.6111C17.5317 45.3128 17.1818 44.9843 16.8649 44.6288L16.3445 45.0928L15.8241 45.5567C16.1963 45.9742 16.6055 46.3581 17.0452 46.7053L17.4773 46.1582ZM16.3445 45.0928L16.8649 44.6288C15.8339 43.4725 15.3479 42.0498 15.1103 40.1862L14.4187 40.2744L13.7271 40.3626C13.9834 42.3724 14.5329 44.1084 15.8241 45.5567L16.3445 45.0928ZM14.4187 40.2744L15.1103 40.1862C14.8773 38.359 14.8756 36.0296 14.8756 33.0078L14.1785 33.0078L13.4813 33.0078C13.4813 35.9952 13.4804 38.4273 13.7271 40.3626L14.4187 40.2744ZM14.1785 33.0078H14.8756V32.8242H14.1785H13.4813V33.0078H14.1785ZM14.1785 32.8242L14.8756 32.8242C14.8756 29.8022 14.8772 27.4721 15.1103 25.6448L14.4187 25.5566L13.7271 25.4685C13.4803 27.4038 13.4813 29.8366 13.4813 32.8242L14.1785 32.8242ZM14.4187 25.5566L15.1103 25.6449C15.3479 23.7816 15.834 22.3595 16.8649 21.2032L16.3445 20.7393L15.8241 20.2753C14.533 21.7235 13.9835 23.4588 13.7271 25.4684L14.4187 25.5566ZM16.3445 20.7393L16.8649 21.2032C17.1818 20.8477 17.5316 20.5193 17.9094 20.221L17.4773 19.6738L17.0452 19.1267C16.6055 19.474 16.1963 19.8579 15.8241 20.2753L16.3445 20.7393ZM17.4773 19.6738L17.9094 20.221C19.1297 19.2573 20.6244 18.8043 22.5888 18.5824L22.5105 17.8896L22.4322 17.1969C20.3457 17.4326 18.5556 17.934 17.0452 19.1267L17.4773 19.6738ZM22.5105 17.8896L22.5888 18.5824C24.0359 18.4189 25.7903 18.3766 27.9436 18.3661L27.9402 17.6689L27.9368 16.9718C25.7836 16.9823 23.9618 17.0241 22.4322 17.1969L22.5105 17.8896ZM27.9402 17.6689L27.9414 18.3661L30.2187 18.3622L30.2175 17.665L30.2163 16.9679L27.939 16.9718L27.9402 17.6689ZM30.2175 17.665V18.3622H35.6121V17.665V16.9679H30.2175V17.665ZM32.9148 27.6875V26.9903C29.642 26.9903 26.9891 29.6432 26.9891 32.916H27.6863H28.3834C28.3834 30.4133 30.4121 28.3847 32.9148 28.3847V27.6875ZM27.6863 32.916L26.9891 32.916C26.9891 36.1888 29.642 38.8417 32.9148 38.8417V38.1445V37.4474C30.4121 37.4474 28.3835 35.4187 28.3834 32.916L27.6863 32.916ZM32.9148 38.1445L32.9148 38.8417C36.1876 38.8417 38.8405 36.1888 38.8405 32.916L38.1433 32.916L37.4461 32.916C37.4461 35.4187 35.4175 37.4473 32.9148 37.4474L32.9148 38.1445ZM38.1433 32.916H38.8405C38.8405 29.6432 36.1876 26.9904 32.9148 26.9903L32.9148 27.6875L32.9148 28.3847C35.4175 28.3847 37.4461 30.4133 37.4461 32.916H38.1433ZM21.572 31.1729L21.572 30.4757C20.2245 30.4758 19.1317 31.5684 19.1317 32.916H19.8289H20.526C20.526 32.3386 20.9945 31.8701 21.5721 31.87L21.572 31.1729ZM19.8289 32.916L19.1317 32.916C19.1317 34.2636 20.2245 35.3562 21.572 35.3563L21.572 34.6592L21.5721 33.962C20.9945 33.962 20.526 33.4934 20.526 32.916L19.8289 32.916ZM21.572 34.6592V35.3563H21.5876V34.6592V33.962H21.572V34.6592ZM21.5876 34.6592V35.3563C22.9353 35.3563 24.0279 34.2636 24.028 32.916L23.3308 32.916L22.6336 32.916C22.6336 33.4936 22.1652 33.962 21.5876 33.962V34.6592ZM23.3308 32.916H24.028C24.028 31.5684 22.9353 30.4757 21.5876 30.4757V31.1729V31.87C22.1652 31.87 22.6336 32.3385 22.6336 32.916H23.3308ZM21.5876 31.1729V30.4757H21.572V31.1729V31.87H21.5876V31.1729ZM44.2458 31.1729V30.4757C42.8982 30.4757 41.8055 31.5684 41.8055 32.916H42.5027H43.1999C43.1999 32.3385 43.6683 31.87 44.2458 31.87V31.1729ZM42.5027 32.916L41.8055 32.916C41.8055 34.2636 42.8982 35.3563 44.2458 35.3563V34.6592V33.962C43.6683 33.962 43.1999 33.4936 43.1999 32.916L42.5027 32.916ZM44.2458 34.6592V35.3563H44.2615V34.6592V33.962H44.2458V34.6592ZM44.2615 34.6592L44.2616 35.3563C45.6093 35.356 46.7008 34.2631 46.7008 32.916L46.0037 32.916L45.3065 32.916C45.3065 33.4938 44.8384 33.9619 44.2613 33.962L44.2615 34.6592ZM46.0037 32.916H46.7008C46.7008 31.5689 45.6093 30.476 44.2616 30.4757L44.2615 31.1729L44.2613 31.87C44.8385 31.8701 45.3065 32.3382 45.3065 32.916H46.0037ZM44.2615 31.1729V30.4757H44.2458V31.1729V31.87H44.2615V31.1729Z"
                    fill="url(#paint1_linear_1180_17037)"
                    fill-opacity="0.2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1180_17037"
                    x="-22.8583"
                    y="-17.281"
                    width="111.547"
                    height="111.547"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.57733" />
                    <feGaussianBlur stdDeviation="17.4292" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.610577 0 0 0 0 0.610577 0 0 0 0 0.610577 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1180_17037"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1180_17037"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1180_17037"
                    x1="32.9148"
                    y1="17.665"
                    x2="32.9148"
                    y2="56.6192"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1CA2A0" />
                    <stop offset="1" stopColor="#1CA2A0" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1180_17037"
                    x1="32.9148"
                    y1="17.665"
                    x2="32.9148"
                    y2="48.1661"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6CE4DB" />
                    <stop offset="1" stopColor="#6CE4DB" />
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </div>

            <span className="text-[15px] text-center sm:text-2xl font-semibold dark:text-[#fff]">
              دریافت API و شروع فروش
            </span>

            <p className="text-center dark:text-[#BDBDBD] max-w-[290px] mx-auto">
              کد درگاه یا افزونه آماده را دریافت و روی سایت خود نصب کنید. تبریک
              می‌گوییم! فروشگاه شما اکنون به شبکه پرداخت جهانی متصل است.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 container fade-in">
        <div className="bg-[#fff] overflow-hidden dark:bg-[#0B252D] border-[0.98px] border-[#DFDFDF] dark:border-0 z-10 shadow-[0px_0px_103.41px_0px_#0000000D] rounded-lg relative py-6 px-8">
          <img
            src="/images/landing-old/docs-bg.svg"
            alt=""
            className="w-full h-full absolute top-0 right-0 object-cover -z-10"
          />

          <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly flex-wrap lg:flex-nowrap gap-6 lg:gap-20">
            <div className="">
              <h2
                className="opacity-0 animate-fade-in-up text-2xl text-center lg:text-right sm:text-[34px] font-semibold text-title leading-10 sm:leading-[50px]"
              >
                مستندات فنی و راهنمای یکپارچه‌سازی
              </h2>
              <span
                className="opacity-0 animate-fade-in-up my-6 text-center lg:text-right text-[#0E0F1B] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block max-w-[570px]"
                style={{ animationDelay: "150ms" }}
              >
                هر آنچه برای اتصال به شبکه پرداخت رمزینو نیاز دارید، یکجا
                گردآوری شده است. از نمونه کدهای کاربردی برای زبان‌های مختلف تا
                راهنمای جامع متدها؛ مسیری شفاف برای توسعه‌دهندگان.
              </span>
              <Link
                href="https://ramzino.me/docs"
                className="opacity-0 animate-fade-in-up mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
                style={{ animationDelay: "300ms" }}
              >
                مستندات فنی{" "}
              </Link>
            </div>

            <img
              src="/images/landing/api-vector.webp"
              alt="api-vector"
              className="art-float"
              style={{ "--float-y": "14px", "--float-r": "1.8deg", "--float-d": "7s" }}
            />
          </div>

          <div className="flex items-center justify-start gap-6 bg-themeColor dark:bg-[#001F28] rounded-[10px] px-1 py-2 mt-[18px] relative overflow-auto">
            <button
              className={classes(
                "px-10 py-3.5 rounded-[5px] text-[14px] sm:text-base block grow shrink-0",
                true
                  ? "bg-[#fff] dark:bg-[#4EDFD4] text-[#171B23] dark:text-[#000]"
                  : "opacity-80 text-[#373A41] hover:bg-[#e7e7e7] dark:hover:bg-[#0036477a] dark:text-[#FAFAFA]",
              )}
              onClick={() => {}}
            >
              مستندات API
            </button>

            <button
              className={classes(
                "px-10 py-3.5 rounded-[5px] text-[14px] sm:text-base block grow shrink-0",
                false
                  ? "bg-[#fff] dark:bg-[#4EDFD4] text-[#171B23] dark:text-[#000]"
                  : "opacity-80 text-[#373A41] hover:bg-[#e7e7e7] dark:hover:bg-[#0036477a] dark:text-[#FAFAFA]",
              )}
              onClick={() => {}}
            >
              مسندات درگاه پرداخت
            </button>

            <button
              className={classes(
                "px-10 py-3.5 rounded-[5px] text-[14px] sm:text-base block grow shrink-0",
                false
                  ? "bg-[#fff] dark:bg-[#4EDFD4] text-[#171B23] dark:text-[#000]"
                  : "opacity-80 text-[#373A41] hover:bg-[#e7e7e7] dark:hover:bg-[#0036477a] dark:text-[#FAFAFA]",
              )}
              onClick={() => {}}
            >
              مستندات SDK
            </button>

            <button
              className={classes(
                "px-10 py-3.5 rounded-[5px] text-[14px] sm:text-base block grow shrink-0",
                false
                  ? "bg-[#fff] dark:bg-[#4EDFD4] text-[#171B23] dark:text-[#000]"
                  : "opacity-80 text-[#373A41] hover:bg-[#e7e7e7] dark:hover:bg-[#0036477a] dark:text-[#FAFAFA]",
              )}
              onClick={() => {}}
            >
              افزونه ها
            </button>
          </div>
        </div>
      </section>

      <section className="mt-20 w-full full-center flex-col pt-5 relative overflow-hidden fade-in">
        <h3
          className="opacity-0 animate-fade-in-up px-4 text-center w-full text-[#0C0C0C] dark:text-[#fff] text-2xl md:text-[34px] font-black mb-5"
        >
          بهترین ارز های دیجیتال
        </h3>
        <span
          className="opacity-0 animate-fade-in-up block mb-14 px-6 text-center text-lg dark:text-[#ffffff90]"
          style={{ animationDelay: "120ms" }}
        >
          بله؛ در حال حاضر خرید و فروش بیت کوین در بیشتر صرافی‌های ایرانی و
          خارجی نیازمند احراز هویت است. در{" "}
        </span>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={false}
          slidesPerView={"auto"}
          spaceBetween={24}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          centeredSlides={true}
          centerInsufficientSlides={false}
          centeredSlidesBounds={false}
          dir="rtl"
          speed={1500}
          className="marque-slider swiper-tokens-list"
        >
          {[...currencies, ...currencies, ...currencies]?.map((e, i) => (
            <SwiperSlide key={i}>
              <Link title="مشاهده" href="#" className="">
                <Image
                  src={`/images/coins/${e.icon}.webp`}
                  alt="USDT"
                  width={101}
                  height={134}
                  layout="fixed"
                  className="object-cover rounded-full hover:scale-105 hover:grayscale transition-medium max-w-[40px] sm:max-w-[101px]"
                  objectFit="cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mt-32 p-1 relative flex items-center justify-center h-[800px] bg-gradient-to-tl from-[#FAFAFA] via-[#E6F9F9] to-[#9EFBFB] dark:from-[#02151B] dark:via-[#0E3F47] dark:to-[#146B6B] fade-in">
        <img
          src="/images/landing/airdrop-vector-1.webp"
          alt="airdrop-1"
          className="art-float absolute left-0 bottom-8 max-w-[400px] w-[30vw]"
          style={{ "--float-y": "18px", "--float-r": "2deg", "--float-d": "9s" }}
        />

        <img
          src="/images/landing/airdrop-vector-2.webp"
          alt="airdrop-1"
          className="art-float absolute right-0 top-20 max-w-[400px] w-[30vw]"
          style={{ "--float-y": "15px", "--float-r": "-2deg", "--float-d": "7.5s", "--float-delay": "-3.5s" }}
        />
        <div className="flex flex-col justify-center items-center gap-6 w-[400px] shrink-0 lg:shrink mx-auto">
          <div className="opacity-0 animate-fade-in-up w-[75px] h-[75px] rounded-full flex items-center justify-center bg-[#67CCCB] dark:bg-[#67CCCB]">
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.6502 10.6758C32.4093 10.6758 33.0472 10.6758 33.5674 10.7135C34.1073 10.7526 34.6315 10.8378 35.131 11.0685C35.6968 11.3298 36.2023 11.7219 36.5706 12.2322C36.9187 12.7145 37.0487 13.234 37.1052 13.733C37.1564 14.1848 37.1563 14.7265 37.1563 15.3122V15.4352C37.1563 16.0209 37.1564 16.5626 37.1052 17.0144C37.0487 17.5134 36.9187 18.0329 36.5706 18.5152C36.2023 19.0255 35.6968 19.4176 35.131 19.6789C34.6315 19.9096 34.1073 19.9948 33.5674 20.0339C33.0472 20.0716 32.4093 20.0716 31.6502 20.0716H9.34985C8.5907 20.0716 7.9528 20.0716 7.43264 20.0339C6.89277 19.9948 6.36854 19.9096 5.86901 19.6789C5.30325 19.4176 4.7977 19.0255 4.42937 18.5152C4.08133 18.0329 3.95135 17.5134 3.89482 17.0144C3.84363 16.5626 3.84369 16.0209 3.84375 15.4351V15.3123C3.84369 14.7265 3.84363 14.1848 3.89482 13.733C3.95135 13.234 4.08133 12.7145 4.42937 12.2322C4.7977 11.7219 5.30325 11.3298 5.86901 11.0685C6.36854 10.8378 6.89277 10.7526 7.43264 10.7135C7.95279 10.6758 8.59068 10.6758 9.34981 10.6758H31.6502Z"
                fill="white"
              />
              <path
                d="M6.46925 22.0679C6.01932 21.9921 5.79435 21.9542 5.6733 22.0565C5.55225 22.1589 5.55225 22.3687 5.55225 22.7884V25.7172C5.55222 28.4549 5.55219 30.6398 5.78258 32.3534C6.02059 34.1237 6.52541 35.5816 7.67878 36.735C8.83214 37.8884 10.2901 38.3932 12.0603 38.6312C13.7739 38.8616 15.9588 38.8616 18.6966 38.8615C18.7492 38.8615 18.7918 38.8189 18.7918 38.7663L18.7918 22.8886C18.7918 22.5665 18.7918 22.4054 18.6918 22.3054C18.5917 22.2053 18.4306 22.2053 18.1085 22.2053H9.29197C8.58018 22.2053 7.87652 22.2054 7.27836 22.162C7.03002 22.144 6.75761 22.1165 6.46925 22.0679Z"
                fill="white"
              />
              <path
                d="M22.8918 22.2053C22.5697 22.2053 22.4086 22.2053 22.3086 22.3054C22.2085 22.4054 22.2085 22.5665 22.2085 22.8886V38.7663C22.2085 38.8189 22.2511 38.8615 22.3037 38.8615C25.0415 38.8616 27.2264 38.8616 28.94 38.6312C30.7103 38.3932 32.1682 37.8884 33.3216 36.735C34.4749 35.5816 34.9797 34.1237 35.2177 32.3534C35.4481 30.6398 35.4481 28.4549 35.4481 25.7172V22.7884C35.4481 22.3687 35.4481 22.1589 35.327 22.0565C35.206 21.9542 34.981 21.9921 34.5311 22.0679C34.2427 22.1165 33.9703 22.144 33.7219 22.162C33.1238 22.2054 32.4202 22.2053 31.7084 22.2053H22.8918Z"
                fill="white"
              />
              <path
                d="M13.9106 2.13477C16.5964 2.1348 18.983 3.41172 20.4995 5.39062C22.016 3.41152 24.4034 2.13477 27.0894 2.13477H27.6997C30.3277 2.13502 32.4584 4.26549 32.4585 6.89355C32.4585 10.8697 29.2344 14.0928 25.2583 14.0928H15.7407C11.7647 14.0927 8.5415 10.8696 8.5415 6.89355C8.54158 4.26538 10.6721 2.13484 13.3003 2.13477H13.9106ZM13.3003 5.55176C12.5591 5.55183 11.9586 6.15235 11.9585 6.89355C11.9585 8.98264 13.6517 10.6767 15.7407 10.6768H18.7915V10.4326C18.7915 7.73697 16.6063 5.55181 13.9106 5.55176H13.3003ZM27.0894 5.55176C24.3937 5.55176 22.2085 7.73694 22.2085 10.4326V10.6768H25.2583C27.3474 10.6768 29.0415 8.9827 29.0415 6.89355C29.0414 6.15246 28.4408 5.55202 27.6997 5.55176H27.0894Z"
                fill="white"
              />
            </svg>
          </div>

          <span
            className="opacity-0 animate-fade-in-up text-center text-2xl md:text-[35px] font-semibold mt-4 dark:text-[#fff]"
            style={{ animationDelay: "120ms" }}
          >
            دریافت ایردراپ رایگان{" "}
          </span>

          <p
            className="opacity-0 animate-fade-in-up text-center max-w-[290px] mx-auto dark:text-[#fff]"
            style={{ animationDelay: "220ms" }}
          >
            با عضویت در شبکه های اجتماعی کیف پول به صورت روزانه کد ایرداپ دریافت
            کرده و ارز دیجیتال هدیه بگیرید
          </p>

          <Link
            href={"#"}
            className="opacity-0 animate-fade-in-up flex items-center justify-center gap-4 bg-[#2B758C] rounded-lg px-6 w-full py-4 shadow-[0px_0px_0px_1.21px_#151514,0px_1.21px_2.42px_1.21px_#15151466,inset_0px_1.81px_0px_0px_#FFFFFF33]
"
            style={{ animationDelay: "340ms" }}
          >
            <span className="text-xl text-[#fff]">شروع دریافت</span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5074 8.5293L8.52966 20.5071"
                stroke="#FAFAFA"
                strokeWidth="1.81481"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0988 8.46875L20.5074 8.52803L20.5679 16.9379"
                stroke="#FAFAFA"
                strokeWidth="1.81481"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div
            className="opacity-0 animate-fade-in-up w-full flex items-center justify-center gap-6"
            style={{ animationDelay: "460ms" }}
          >
            <Link
              href={"#"}
              className="flex items-center justify-center gap-4 bg-[#42B9B7] rounded-lg px-6 w-full py-4 grow md:grow-0"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-outside-1_1164_16419"
                  maskUnits="userSpaceOnUse"
                  x="0.48077"
                  y="0.524409"
                  width="33.0951"
                  height="33.0951"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="0.48077"
                    y="0.524409"
                    width="33.0951"
                    height="33.0951"
                  />
                  <path d="M17.1727 31.5716C20.2757 31.5627 22.713 31.5555 24.6153 31.2943C26.5647 31.0264 28.111 30.4735 29.3233 29.2543C30.5355 28.035 31.0794 26.4856 31.336 24.5346C31.5864 22.6307 31.5794 20.1929 31.5704 17.0896L31.5699 16.9274C31.561 13.8241 31.554 11.3862 31.2926 9.48388C31.0248 7.53459 30.4718 5.98904 29.2526 4.77686C28.0334 3.56459 26.484 3.02068 24.533 2.7641C22.6292 2.51379 20.1919 2.52074 17.0889 2.52971L16.9268 2.53018C13.8235 2.53911 11.3856 2.54619 9.48321 2.80751C7.53371 3.07534 5.98748 3.62819 4.77521 4.84747C3.56311 6.06665 3.01904 7.61542 2.76245 9.56619C2.51207 11.47 2.51909 13.9079 2.52807 17.0112L2.52853 17.1733C2.53747 20.2767 2.54454 22.7145 2.80587 24.6169C3.0737 26.5664 3.62654 28.1126 4.84582 29.3249C6.0651 30.5371 7.61453 31.0811 9.56552 31.3377C11.4694 31.588 13.9073 31.581 17.0106 31.5721L17.1727 31.5716ZM24.8272 10.6559C24.0483 10.6581 23.4152 10.0253 23.413 9.24294C23.4109 8.46072 24.0403 7.82516 24.819 7.82286L24.8317 7.82283C25.6105 7.82058 26.2435 8.45252 26.246 9.23477C26.2482 10.0172 25.6188 10.6536 24.8399 10.6558L24.8272 10.6559ZM17.0671 23.4283C13.5466 23.4382 10.6849 20.5924 10.6748 17.0717C10.6646 13.5511 13.5098 10.6888 17.0304 10.6784C20.5512 10.6682 23.4136 13.5141 23.4237 17.0349C23.4339 20.5557 20.5879 23.4181 17.0671 23.4283Z" />
                </mask>
                <path
                  d="M17.1727 31.5716C20.2757 31.5627 22.713 31.5555 24.6153 31.2943C26.5647 31.0264 28.111 30.4735 29.3233 29.2543C30.5355 28.035 31.0794 26.4856 31.336 24.5346C31.5864 22.6307 31.5794 20.1929 31.5704 17.0896L31.5699 16.9274C31.561 13.8241 31.554 11.3862 31.2926 9.48388C31.0248 7.53459 30.4718 5.98904 29.2526 4.77686C28.0334 3.56459 26.484 3.02068 24.533 2.7641C22.6292 2.51379 20.1919 2.52074 17.0889 2.52971L16.9268 2.53018C13.8235 2.53911 11.3856 2.54619 9.48321 2.80751C7.53371 3.07534 5.98748 3.62819 4.77521 4.84747C3.56311 6.06665 3.01904 7.61542 2.76245 9.56619C2.51207 11.47 2.51909 13.9079 2.52807 17.0112L2.52853 17.1733C2.53747 20.2767 2.54454 22.7145 2.80587 24.6169C3.0737 26.5664 3.62654 28.1126 4.84582 29.3249C6.0651 30.5371 7.61453 31.0811 9.56552 31.3377C11.4694 31.588 13.9073 31.581 17.0106 31.5721L17.1727 31.5716ZM24.8272 10.6559C24.0483 10.6581 23.4152 10.0253 23.413 9.24294C23.4109 8.46072 24.0403 7.82516 24.819 7.82286L24.8317 7.82283C25.6105 7.82058 26.2435 8.45252 26.246 9.23477C26.2482 10.0172 25.6188 10.6536 24.8399 10.6558L24.8272 10.6559ZM17.0671 23.4283C13.5466 23.4382 10.6849 20.5924 10.6748 17.0717C10.6646 13.5511 13.5098 10.6888 17.0304 10.6784C20.5512 10.6682 23.4136 13.5141 23.4237 17.0349C23.4339 20.5557 20.5879 23.4181 17.0671 23.4283Z"
                  fill="url(#paint0_linear_1164_16419)"
                />
                <path
                  d="M17.1727 31.5716L17.1686 30.1549L17.1686 30.1549L17.1727 31.5716ZM24.6153 31.2943L24.8081 32.6977L24.808 32.6977L24.6153 31.2943ZM29.3233 29.2543L30.3279 30.2531L30.3279 30.2532L29.3233 29.2543ZM31.336 24.5346L32.7406 24.7193L32.7406 24.7193L31.336 24.5346ZM31.5704 17.0896L30.1537 17.0937L30.1537 17.0936L31.5704 17.0896ZM31.5699 16.9274L30.1533 16.9315L30.1533 16.9315L31.5699 16.9274ZM31.2926 9.48388L32.6961 9.29103L32.6961 9.29107L31.2926 9.48388ZM29.2526 4.77686L30.2515 3.77224L30.2515 3.77225L29.2526 4.77686ZM24.533 2.7641L24.7176 1.35952L24.7177 1.35952L24.533 2.7641ZM17.0889 2.52971L17.093 3.94637L17.093 3.94637L17.0889 2.52971ZM16.9268 2.53018L16.9309 3.94684L16.9309 3.94684L16.9268 2.53018ZM9.48321 2.80751L9.2904 1.40403L9.29042 1.40403L9.48321 2.80751ZM4.77521 4.84747L3.77056 3.84866L3.77059 3.84863L4.77521 4.84747ZM2.76245 9.56619L1.35788 9.38147L1.35788 9.38144L2.76245 9.56619ZM2.52807 17.0112L3.94473 17.0071L3.94473 17.0071L2.52807 17.0112ZM2.52853 17.1733L3.94519 17.1693L3.94519 17.1693L2.52853 17.1733ZM2.80587 24.6169L1.40238 24.8097L1.40238 24.8097L2.80587 24.6169ZM4.84582 29.3249L3.84699 30.3295L3.84698 30.3295L4.84582 29.3249ZM9.56552 31.3377L9.38083 32.7422L9.3808 32.7422L9.56552 31.3377ZM17.0106 31.5721L17.0065 30.1554L17.0065 30.1554L17.0106 31.5721ZM24.8272 10.6559L24.8313 12.0725L24.8312 12.0725L24.8272 10.6559ZM23.413 9.24294L21.9963 9.24703L21.9963 9.24671L23.413 9.24294ZM24.819 7.82286L24.8149 6.4062L24.8149 6.4062L24.819 7.82286ZM24.8317 7.82283L24.8276 6.40617L24.8317 7.82283ZM26.246 9.23477L27.6626 9.23037L27.6626 9.23068L26.246 9.23477ZM24.8399 10.6558L24.8358 9.23916L24.8399 10.6558ZM17.0671 23.4283L17.0712 24.845L17.0711 24.845L17.0671 23.4283ZM10.6748 17.0717L9.2581 17.0758L10.6748 17.0717ZM17.0304 10.6784L17.0262 9.26169L17.0263 9.26169L17.0304 10.6784ZM23.4237 17.0349L24.8404 17.0308L23.4237 17.0349ZM17.1727 31.5716L17.1686 30.1549C20.3095 30.1459 22.636 30.1361 24.4225 29.8908L24.6153 31.2943L24.808 32.6977C22.79 32.9749 20.2418 32.9794 17.1767 32.9882L17.1727 31.5716ZM24.6153 31.2943L24.4224 29.8908C26.2153 29.6445 27.4128 29.1665 28.3187 28.2554L29.3233 29.2543L30.3279 30.2532C28.8092 31.7805 26.9141 32.4084 24.8081 32.6977L24.6153 31.2943ZM29.3233 29.2543L28.3186 28.2555C29.2245 27.3444 29.6955 26.1442 29.9314 24.3499L31.336 24.5346L32.7406 24.7193C32.4634 26.827 31.8466 28.7257 30.3279 30.2531L29.3233 29.2543ZM31.336 24.5346L29.9314 24.3499C30.1666 22.5619 30.1628 20.235 30.1537 17.0937L31.5704 17.0896L32.9871 17.0855C32.9959 20.1508 33.0062 22.6995 32.7406 24.7193L31.336 24.5346ZM31.5704 17.0896L30.1537 17.0936L30.1533 16.9315L31.5699 16.9274L32.9866 16.9234L32.9871 17.0855L31.5704 17.0896ZM31.5699 16.9274L30.1533 16.9315C30.1442 13.7902 30.1346 11.4632 29.8891 9.6767L31.2926 9.48388L32.6961 9.29107C32.9734 11.3092 32.9778 13.8581 32.9866 16.9234L31.5699 16.9274ZM31.2926 9.48388L29.8891 9.67673C29.6428 7.88424 29.1649 6.68735 28.2538 5.78147L29.2526 4.77686L30.2515 3.77225C31.7787 5.29072 32.4067 7.18495 32.6961 9.29103L31.2926 9.48388ZM29.2526 4.77686L28.2538 5.78148C27.3427 4.87562 26.1426 4.40464 24.3482 4.16867L24.533 2.7641L24.7177 1.35952C26.8254 1.63671 28.724 2.25355 30.2515 3.77224L29.2526 4.77686ZM24.533 2.7641L24.3483 4.16868C22.5604 3.9336 20.234 3.93729 17.093 3.94637L17.0889 2.52971L17.0848 1.11305C20.1498 1.10419 22.698 1.09397 24.7176 1.35952L24.533 2.7641ZM17.0889 2.52971L17.093 3.94637L16.9309 3.94684L16.9268 2.53018L16.9227 1.11352L17.0848 1.11305L17.0889 2.52971ZM16.9268 2.53018L16.9309 3.94684C13.7895 3.95588 11.4626 3.96558 9.676 4.211L9.48321 2.80751L9.29042 1.40403C11.3086 1.1268 13.8574 1.12234 16.9227 1.11352L16.9268 2.53018ZM9.48321 2.80751L9.67603 4.211C7.88311 4.45732 6.68569 4.93522 5.77983 5.84631L4.77521 4.84747L3.77059 3.84863C5.28927 2.32116 7.18432 1.69337 9.2904 1.40403L9.48321 2.80751ZM4.77521 4.84747L5.77986 5.84628C4.87401 6.75742 4.40296 7.95711 4.16702 9.75093L2.76245 9.56619L1.35788 9.38144C1.63511 7.27372 2.2522 5.37589 3.77056 3.84866L4.77521 4.84747ZM2.76245 9.56619L4.16702 9.7509C3.93189 11.5388 3.93564 13.8658 3.94473 17.0071L2.52807 17.0112L1.1114 17.0153C1.10254 13.95 1.09226 11.4012 1.35788 9.38147L2.76245 9.56619ZM2.52807 17.0112L3.94473 17.0071L3.94519 17.1693L2.52853 17.1733L1.11187 17.1774L1.1114 17.0153L2.52807 17.0112ZM2.52853 17.1733L3.94519 17.1693C3.95424 20.3106 3.96393 22.6375 4.20935 24.4241L2.80587 24.6169L1.40238 24.8097C1.12514 22.7915 1.1207 20.2428 1.11187 17.1774L2.52853 17.1733ZM2.80587 24.6169L4.20935 24.4241C4.45567 26.217 4.93357 27.4144 5.84466 28.3203L4.84582 29.3249L3.84698 30.3295C2.31951 28.8108 1.69173 26.9158 1.40238 24.8097L2.80587 24.6169ZM4.84582 29.3249L5.84466 28.3203C6.75575 29.2261 7.95595 29.6971 9.75023 29.9331L9.56552 31.3377L9.3808 32.7422C7.2731 32.4651 5.37445 31.8482 3.84699 30.3295L4.84582 29.3249ZM9.56552 31.3377L9.7502 29.9331C11.5382 30.1682 13.8652 30.1645 17.0065 30.1554L17.0106 31.5721L17.0147 32.9887C13.9494 32.9976 11.4006 33.0078 9.38083 32.7422L9.56552 31.3377ZM17.0106 31.5721L17.0065 30.1554L17.1686 30.1549L17.1727 31.5716L17.1768 32.9882L17.0146 32.9887L17.0106 31.5721ZM24.8272 10.6559L24.8312 12.0725C23.2635 12.0769 22.0008 10.8052 21.9963 9.24703L23.413 9.24294L24.8296 9.23885C24.8296 9.24116 24.8298 9.24194 24.8298 9.24165C24.8297 9.24143 24.8296 9.24105 24.8295 9.2407C24.8293 9.24019 24.8294 9.24068 24.8302 9.24146C24.831 9.24224 24.8307 9.24165 24.8285 9.2407C24.8272 9.24019 24.8258 9.23973 24.8244 9.23944C24.8228 9.23913 24.8223 9.2392 24.8232 9.2392L24.8272 10.6559ZM23.413 9.24294L21.9963 9.24671C21.9922 7.68793 23.2482 6.41083 24.8149 6.4062L24.819 7.82286L24.8232 9.23952C24.8222 9.23953 24.8226 9.23961 24.8241 9.2393C24.8255 9.23902 24.8269 9.23857 24.828 9.23806C24.8303 9.23712 24.8305 9.23652 24.8299 9.23721C24.8292 9.23791 24.8291 9.23827 24.8294 9.23761C24.8296 9.23718 24.8297 9.23674 24.8298 9.23647C24.8298 9.23612 24.8296 9.23687 24.8296 9.23917L23.413 9.24294ZM24.819 7.82286L24.8149 6.4062L24.8276 6.40617L24.8317 7.82283L24.8358 9.23949L24.8231 9.23952L24.819 7.82286ZM24.8317 7.82283L24.8276 6.40617C26.3945 6.40165 27.6578 7.67165 27.6626 9.23037L26.246 9.23477L24.8293 9.23917C24.8293 9.23685 24.8291 9.23609 24.8292 9.23643C24.8292 9.23669 24.8293 9.23713 24.8295 9.23755C24.8298 9.2382 24.8298 9.23785 24.8291 9.23717C24.8284 9.23649 24.8287 9.2371 24.8309 9.23804C24.8321 9.23855 24.8335 9.23899 24.8349 9.23927C24.8364 9.23957 24.8369 9.23948 24.8358 9.23949L24.8317 7.82283ZM26.246 9.23477L27.6626 9.23068C27.6671 10.7888 26.4119 12.068 24.844 12.0725L24.8399 10.6558L24.8358 9.23916C24.8368 9.23916 24.8362 9.23909 24.8347 9.23941C24.8332 9.23971 24.8318 9.24018 24.8305 9.2407C24.8283 9.24168 24.828 9.24228 24.8288 9.24151C24.8295 9.24074 24.8297 9.24026 24.8295 9.24076C24.8293 9.24111 24.8292 9.24148 24.8292 9.24169C24.8291 9.24197 24.8293 9.24118 24.8293 9.23886L26.246 9.23477ZM24.8399 10.6558L24.844 12.0725L24.8313 12.0725L24.8272 10.6559L24.8231 9.2392L24.8358 9.23916L24.8399 10.6558ZM17.0671 23.4283L17.0711 24.845C12.7681 24.8571 9.27051 21.3787 9.2581 17.0758L10.6748 17.0717L12.0914 17.0676C12.0993 19.806 14.3251 22.0193 17.0632 22.0116L17.0671 23.4283ZM10.6748 17.0717L9.2581 17.0758C9.24568 12.7729 12.7231 9.27443 17.0262 9.26169L17.0304 10.6784L17.0346 12.095C14.2965 12.1031 12.0835 14.3292 12.0914 17.0676L10.6748 17.0717ZM17.0304 10.6784L17.0263 9.26169C21.3295 9.24928 24.828 12.7276 24.8404 17.0308L23.4237 17.0349L22.0071 17.039C21.9992 14.3006 19.7729 12.0871 17.0345 12.095L17.0304 10.6784ZM23.4237 17.0349L24.8404 17.0308C24.8528 21.334 21.3744 24.8325 17.0712 24.845L17.0671 23.4283L17.0631 22.0116C19.8015 22.0037 22.015 19.7774 22.0071 17.039L23.4237 17.0349Z"
                  fill="url(#paint1_linear_1164_16419)"
                  mask="url(#path-1-outside-1_1164_16419)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1164_16419"
                    x1="17.0911"
                    y1="31.5718"
                    x2="17.0073"
                    y2="2.52995"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1164_16419"
                    x1="17.1024"
                    y1="35.4677"
                    x2="17.0073"
                    y2="2.52995"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="text-xl text-[#fff]">اینستاگرام</span>
            </Link>
            <Link
              href={"#"}
              className="flex items-center justify-center gap-4 bg-[#42B9B7] rounded-lg px-6 w-full py-4 grow md:grow-0"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-outside-1_1164_16419"
                  maskUnits="userSpaceOnUse"
                  x="0.48077"
                  y="0.524409"
                  width="33.0951"
                  height="33.0951"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="0.48077"
                    y="0.524409"
                    width="33.0951"
                    height="33.0951"
                  />
                  <path d="M17.1727 31.5716C20.2757 31.5627 22.713 31.5555 24.6153 31.2943C26.5647 31.0264 28.111 30.4735 29.3233 29.2543C30.5355 28.035 31.0794 26.4856 31.336 24.5346C31.5864 22.6307 31.5794 20.1929 31.5704 17.0896L31.5699 16.9274C31.561 13.8241 31.554 11.3862 31.2926 9.48388C31.0248 7.53459 30.4718 5.98904 29.2526 4.77686C28.0334 3.56459 26.484 3.02068 24.533 2.7641C22.6292 2.51379 20.1919 2.52074 17.0889 2.52971L16.9268 2.53018C13.8235 2.53911 11.3856 2.54619 9.48321 2.80751C7.53371 3.07534 5.98748 3.62819 4.77521 4.84747C3.56311 6.06665 3.01904 7.61542 2.76245 9.56619C2.51207 11.47 2.51909 13.9079 2.52807 17.0112L2.52853 17.1733C2.53747 20.2767 2.54454 22.7145 2.80587 24.6169C3.0737 26.5664 3.62654 28.1126 4.84582 29.3249C6.0651 30.5371 7.61453 31.0811 9.56552 31.3377C11.4694 31.588 13.9073 31.581 17.0106 31.5721L17.1727 31.5716ZM24.8272 10.6559C24.0483 10.6581 23.4152 10.0253 23.413 9.24294C23.4109 8.46072 24.0403 7.82516 24.819 7.82286L24.8317 7.82283C25.6105 7.82058 26.2435 8.45252 26.246 9.23477C26.2482 10.0172 25.6188 10.6536 24.8399 10.6558L24.8272 10.6559ZM17.0671 23.4283C13.5466 23.4382 10.6849 20.5924 10.6748 17.0717C10.6646 13.5511 13.5098 10.6888 17.0304 10.6784C20.5512 10.6682 23.4136 13.5141 23.4237 17.0349C23.4339 20.5557 20.5879 23.4181 17.0671 23.4283Z" />
                </mask>
                <path
                  d="M17.1727 31.5716C20.2757 31.5627 22.713 31.5555 24.6153 31.2943C26.5647 31.0264 28.111 30.4735 29.3233 29.2543C30.5355 28.035 31.0794 26.4856 31.336 24.5346C31.5864 22.6307 31.5794 20.1929 31.5704 17.0896L31.5699 16.9274C31.561 13.8241 31.554 11.3862 31.2926 9.48388C31.0248 7.53459 30.4718 5.98904 29.2526 4.77686C28.0334 3.56459 26.484 3.02068 24.533 2.7641C22.6292 2.51379 20.1919 2.52074 17.0889 2.52971L16.9268 2.53018C13.8235 2.53911 11.3856 2.54619 9.48321 2.80751C7.53371 3.07534 5.98748 3.62819 4.77521 4.84747C3.56311 6.06665 3.01904 7.61542 2.76245 9.56619C2.51207 11.47 2.51909 13.9079 2.52807 17.0112L2.52853 17.1733C2.53747 20.2767 2.54454 22.7145 2.80587 24.6169C3.0737 26.5664 3.62654 28.1126 4.84582 29.3249C6.0651 30.5371 7.61453 31.0811 9.56552 31.3377C11.4694 31.588 13.9073 31.581 17.0106 31.5721L17.1727 31.5716ZM24.8272 10.6559C24.0483 10.6581 23.4152 10.0253 23.413 9.24294C23.4109 8.46072 24.0403 7.82516 24.819 7.82286L24.8317 7.82283C25.6105 7.82058 26.2435 8.45252 26.246 9.23477C26.2482 10.0172 25.6188 10.6536 24.8399 10.6558L24.8272 10.6559ZM17.0671 23.4283C13.5466 23.4382 10.6849 20.5924 10.6748 17.0717C10.6646 13.5511 13.5098 10.6888 17.0304 10.6784C20.5512 10.6682 23.4136 13.5141 23.4237 17.0349C23.4339 20.5557 20.5879 23.4181 17.0671 23.4283Z"
                  fill="url(#paint0_linear_1164_16419)"
                />
                <path
                  d="M17.1727 31.5716L17.1686 30.1549L17.1686 30.1549L17.1727 31.5716ZM24.6153 31.2943L24.8081 32.6977L24.808 32.6977L24.6153 31.2943ZM29.3233 29.2543L30.3279 30.2531L30.3279 30.2532L29.3233 29.2543ZM31.336 24.5346L32.7406 24.7193L32.7406 24.7193L31.336 24.5346ZM31.5704 17.0896L30.1537 17.0937L30.1537 17.0936L31.5704 17.0896ZM31.5699 16.9274L30.1533 16.9315L30.1533 16.9315L31.5699 16.9274ZM31.2926 9.48388L32.6961 9.29103L32.6961 9.29107L31.2926 9.48388ZM29.2526 4.77686L30.2515 3.77224L30.2515 3.77225L29.2526 4.77686ZM24.533 2.7641L24.7176 1.35952L24.7177 1.35952L24.533 2.7641ZM17.0889 2.52971L17.093 3.94637L17.093 3.94637L17.0889 2.52971ZM16.9268 2.53018L16.9309 3.94684L16.9309 3.94684L16.9268 2.53018ZM9.48321 2.80751L9.2904 1.40403L9.29042 1.40403L9.48321 2.80751ZM4.77521 4.84747L3.77056 3.84866L3.77059 3.84863L4.77521 4.84747ZM2.76245 9.56619L1.35788 9.38147L1.35788 9.38144L2.76245 9.56619ZM2.52807 17.0112L3.94473 17.0071L3.94473 17.0071L2.52807 17.0112ZM2.52853 17.1733L3.94519 17.1693L3.94519 17.1693L2.52853 17.1733ZM2.80587 24.6169L1.40238 24.8097L1.40238 24.8097L2.80587 24.6169ZM4.84582 29.3249L3.84699 30.3295L3.84698 30.3295L4.84582 29.3249ZM9.56552 31.3377L9.38083 32.7422L9.3808 32.7422L9.56552 31.3377ZM17.0106 31.5721L17.0065 30.1554L17.0065 30.1554L17.0106 31.5721ZM24.8272 10.6559L24.8313 12.0725L24.8312 12.0725L24.8272 10.6559ZM23.413 9.24294L21.9963 9.24703L21.9963 9.24671L23.413 9.24294ZM24.819 7.82286L24.8149 6.4062L24.8149 6.4062L24.819 7.82286ZM24.8317 7.82283L24.8276 6.40617L24.8317 7.82283ZM26.246 9.23477L27.6626 9.23037L27.6626 9.23068L26.246 9.23477ZM24.8399 10.6558L24.8358 9.23916L24.8399 10.6558ZM17.0671 23.4283L17.0712 24.845L17.0711 24.845L17.0671 23.4283ZM10.6748 17.0717L9.2581 17.0758L10.6748 17.0717ZM17.0304 10.6784L17.0262 9.26169L17.0263 9.26169L17.0304 10.6784ZM23.4237 17.0349L24.8404 17.0308L23.4237 17.0349ZM17.1727 31.5716L17.1686 30.1549C20.3095 30.1459 22.636 30.1361 24.4225 29.8908L24.6153 31.2943L24.808 32.6977C22.79 32.9749 20.2418 32.9794 17.1767 32.9882L17.1727 31.5716ZM24.6153 31.2943L24.4224 29.8908C26.2153 29.6445 27.4128 29.1665 28.3187 28.2554L29.3233 29.2543L30.3279 30.2532C28.8092 31.7805 26.9141 32.4084 24.8081 32.6977L24.6153 31.2943ZM29.3233 29.2543L28.3186 28.2555C29.2245 27.3444 29.6955 26.1442 29.9314 24.3499L31.336 24.5346L32.7406 24.7193C32.4634 26.827 31.8466 28.7257 30.3279 30.2531L29.3233 29.2543ZM31.336 24.5346L29.9314 24.3499C30.1666 22.5619 30.1628 20.235 30.1537 17.0937L31.5704 17.0896L32.9871 17.0855C32.9959 20.1508 33.0062 22.6995 32.7406 24.7193L31.336 24.5346ZM31.5704 17.0896L30.1537 17.0936L30.1533 16.9315L31.5699 16.9274L32.9866 16.9234L32.9871 17.0855L31.5704 17.0896ZM31.5699 16.9274L30.1533 16.9315C30.1442 13.7902 30.1346 11.4632 29.8891 9.6767L31.2926 9.48388L32.6961 9.29107C32.9734 11.3092 32.9778 13.8581 32.9866 16.9234L31.5699 16.9274ZM31.2926 9.48388L29.8891 9.67673C29.6428 7.88424 29.1649 6.68735 28.2538 5.78147L29.2526 4.77686L30.2515 3.77225C31.7787 5.29072 32.4067 7.18495 32.6961 9.29103L31.2926 9.48388ZM29.2526 4.77686L28.2538 5.78148C27.3427 4.87562 26.1426 4.40464 24.3482 4.16867L24.533 2.7641L24.7177 1.35952C26.8254 1.63671 28.724 2.25355 30.2515 3.77224L29.2526 4.77686ZM24.533 2.7641L24.3483 4.16868C22.5604 3.9336 20.234 3.93729 17.093 3.94637L17.0889 2.52971L17.0848 1.11305C20.1498 1.10419 22.698 1.09397 24.7176 1.35952L24.533 2.7641ZM17.0889 2.52971L17.093 3.94637L16.9309 3.94684L16.9268 2.53018L16.9227 1.11352L17.0848 1.11305L17.0889 2.52971ZM16.9268 2.53018L16.9309 3.94684C13.7895 3.95588 11.4626 3.96558 9.676 4.211L9.48321 2.80751L9.29042 1.40403C11.3086 1.1268 13.8574 1.12234 16.9227 1.11352L16.9268 2.53018ZM9.48321 2.80751L9.67603 4.211C7.88311 4.45732 6.68569 4.93522 5.77983 5.84631L4.77521 4.84747L3.77059 3.84863C5.28927 2.32116 7.18432 1.69337 9.2904 1.40403L9.48321 2.80751ZM4.77521 4.84747L5.77986 5.84628C4.87401 6.75742 4.40296 7.95711 4.16702 9.75093L2.76245 9.56619L1.35788 9.38144C1.63511 7.27372 2.2522 5.37589 3.77056 3.84866L4.77521 4.84747ZM2.76245 9.56619L4.16702 9.7509C3.93189 11.5388 3.93564 13.8658 3.94473 17.0071L2.52807 17.0112L1.1114 17.0153C1.10254 13.95 1.09226 11.4012 1.35788 9.38147L2.76245 9.56619ZM2.52807 17.0112L3.94473 17.0071L3.94519 17.1693L2.52853 17.1733L1.11187 17.1774L1.1114 17.0153L2.52807 17.0112ZM2.52853 17.1733L3.94519 17.1693C3.95424 20.3106 3.96393 22.6375 4.20935 24.4241L2.80587 24.6169L1.40238 24.8097C1.12514 22.7915 1.1207 20.2428 1.11187 17.1774L2.52853 17.1733ZM2.80587 24.6169L4.20935 24.4241C4.45567 26.217 4.93357 27.4144 5.84466 28.3203L4.84582 29.3249L3.84698 30.3295C2.31951 28.8108 1.69173 26.9158 1.40238 24.8097L2.80587 24.6169ZM4.84582 29.3249L5.84466 28.3203C6.75575 29.2261 7.95595 29.6971 9.75023 29.9331L9.56552 31.3377L9.3808 32.7422C7.2731 32.4651 5.37445 31.8482 3.84699 30.3295L4.84582 29.3249ZM9.56552 31.3377L9.7502 29.9331C11.5382 30.1682 13.8652 30.1645 17.0065 30.1554L17.0106 31.5721L17.0147 32.9887C13.9494 32.9976 11.4006 33.0078 9.38083 32.7422L9.56552 31.3377ZM17.0106 31.5721L17.0065 30.1554L17.1686 30.1549L17.1727 31.5716L17.1768 32.9882L17.0146 32.9887L17.0106 31.5721ZM24.8272 10.6559L24.8312 12.0725C23.2635 12.0769 22.0008 10.8052 21.9963 9.24703L23.413 9.24294L24.8296 9.23885C24.8296 9.24116 24.8298 9.24194 24.8298 9.24165C24.8297 9.24143 24.8296 9.24105 24.8295 9.2407C24.8293 9.24019 24.8294 9.24068 24.8302 9.24146C24.831 9.24224 24.8307 9.24165 24.8285 9.2407C24.8272 9.24019 24.8258 9.23973 24.8244 9.23944C24.8228 9.23913 24.8223 9.2392 24.8232 9.2392L24.8272 10.6559ZM23.413 9.24294L21.9963 9.24671C21.9922 7.68793 23.2482 6.41083 24.8149 6.4062L24.819 7.82286L24.8232 9.23952C24.8222 9.23953 24.8226 9.23961 24.8241 9.2393C24.8255 9.23902 24.8269 9.23857 24.828 9.23806C24.8303 9.23712 24.8305 9.23652 24.8299 9.23721C24.8292 9.23791 24.8291 9.23827 24.8294 9.23761C24.8296 9.23718 24.8297 9.23674 24.8298 9.23647C24.8298 9.23612 24.8296 9.23687 24.8296 9.23917L23.413 9.24294ZM24.819 7.82286L24.8149 6.4062L24.8276 6.40617L24.8317 7.82283L24.8358 9.23949L24.8231 9.23952L24.819 7.82286ZM24.8317 7.82283L24.8276 6.40617C26.3945 6.40165 27.6578 7.67165 27.6626 9.23037L26.246 9.23477L24.8293 9.23917C24.8293 9.23685 24.8291 9.23609 24.8292 9.23643C24.8292 9.23669 24.8293 9.23713 24.8295 9.23755C24.8298 9.2382 24.8298 9.23785 24.8291 9.23717C24.8284 9.23649 24.8287 9.2371 24.8309 9.23804C24.8321 9.23855 24.8335 9.23899 24.8349 9.23927C24.8364 9.23957 24.8369 9.23948 24.8358 9.23949L24.8317 7.82283ZM26.246 9.23477L27.6626 9.23068C27.6671 10.7888 26.4119 12.068 24.844 12.0725L24.8399 10.6558L24.8358 9.23916C24.8368 9.23916 24.8362 9.23909 24.8347 9.23941C24.8332 9.23971 24.8318 9.24018 24.8305 9.2407C24.8283 9.24168 24.828 9.24228 24.8288 9.24151C24.8295 9.24074 24.8297 9.24026 24.8295 9.24076C24.8293 9.24111 24.8292 9.24148 24.8292 9.24169C24.8291 9.24197 24.8293 9.24118 24.8293 9.23886L26.246 9.23477ZM24.8399 10.6558L24.844 12.0725L24.8313 12.0725L24.8272 10.6559L24.8231 9.2392L24.8358 9.23916L24.8399 10.6558ZM17.0671 23.4283L17.0711 24.845C12.7681 24.8571 9.27051 21.3787 9.2581 17.0758L10.6748 17.0717L12.0914 17.0676C12.0993 19.806 14.3251 22.0193 17.0632 22.0116L17.0671 23.4283ZM10.6748 17.0717L9.2581 17.0758C9.24568 12.7729 12.7231 9.27443 17.0262 9.26169L17.0304 10.6784L17.0346 12.095C14.2965 12.1031 12.0835 14.3292 12.0914 17.0676L10.6748 17.0717ZM17.0304 10.6784L17.0263 9.26169C21.3295 9.24928 24.828 12.7276 24.8404 17.0308L23.4237 17.0349L22.0071 17.039C21.9992 14.3006 19.7729 12.0871 17.0345 12.095L17.0304 10.6784ZM23.4237 17.0349L24.8404 17.0308C24.8528 21.334 21.3744 24.8325 17.0712 24.845L17.0671 23.4283L17.0631 22.0116C19.8015 22.0037 22.015 19.7774 22.0071 17.039L23.4237 17.0349Z"
                  fill="url(#paint1_linear_1164_16419)"
                  mask="url(#path-1-outside-1_1164_16419)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1164_16419"
                    x1="17.0911"
                    y1="31.5718"
                    x2="17.0073"
                    y2="2.52995"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1164_16419"
                    x1="17.1024"
                    y1="35.4677"
                    x2="17.0073"
                    y2="2.52995"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="text-xl text-[#fff]">اینستاگرام</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
