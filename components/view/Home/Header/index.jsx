import Link from "next/link";

function Header() {
  return (
    <header className="w-full min-h-[clamp(600px,85vh,820px)] relative overflow-hidden flex items-center">
      <div className="container relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 lg:pt-24 pb-16 lg:pb-20">
        <h1 className="text-title text-2xl sm:text-[35px] lg:text-[42px] font-semibold mb-4 leading-10 sm:leading-[50px] lg:leading-[56px] opacity-0 animate-fade-in-up text-balance max-w-[720px]">
          رمزینو؛ پلتفرم جامع تبادل و پرداخت ارزی
        </h1>
        <span
          className="text-[#383838] dark:text-[#DFDFDF] font-normal text-xs sm:text-base block max-w-[480px] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          تجربه‌ای امن و یکپارچه از خرید و فروش لحظه‌ای ارزهای دیجیتال و ارائه
          درگاه پرداخت بین‌المللی برای کسب‌وکارهای پیشرو.
        </span>

        <Link
          href="https://panel.ramzino.me/user/login"
          className="mt-8 text-center bg-primaryDark w-[200px] text-base h-[55px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center opacity-0 animate-fade-in-up transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{ animationDelay: "300ms" }}
        >
          ورود به دنیای رمزینو
        </Link>

        <div
          className="relative mt-10 lg:mt-14 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <img
            src="/images/landing/hand-phone.webp"
            alt="رمزینو"
            className="relative z-10 w-[220px] sm:w-[280px] lg:w-[340px] h-auto mx-auto"
          />

          <div
            className="hidden xl:flex absolute top-[15%] left-[-15vw] w-[190px] flex-col gap-1 rounded-[24px] bg-gradient-to-b from-white/60 to-white/15 dark:from-white/20 dark:to-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.10),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.15)] px-4 py-3 animate-float"
            style={{ animationDelay: "0s", animationDuration: "4.5s" }}
          >
            <span className="text-title text-[13px] font-semibold">
              بدون کارمزد پنهان
            </span>
            <span className="text-[#383838] dark:text-[#DFDFDF] text-[11px]">
              خرید و فروش شفاف
            </span>
          </div>

          <div
            className="hidden xl:flex absolute bottom-[10%] left-[-13vw] w-[190px] flex-col gap-1 rounded-[24px] bg-gradient-to-b from-white/60 to-white/15 dark:from-white/20 dark:to-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.10),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.15)] px-4 py-3 animate-float"
            style={{ animationDelay: "0.8s", animationDuration: "5.5s" }}
          >
            <span className="text-title text-[13px] font-semibold">
              معامله لحظه‌ای
            </span>
            <span className="text-[#383838] dark:text-[#DFDFDF] text-[11px]">
              تسویه آنی سفارش‌ها
            </span>
          </div>

          <div
            className="hidden xl:flex absolute top-[15%] right-[-15vw] w-[190px] flex-col gap-1 rounded-[24px] bg-gradient-to-b from-white/60 to-white/15 dark:from-white/20 dark:to-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.10),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.15)] px-4 py-3 animate-float"
            style={{ animationDelay: "0.4s", animationDuration: "4s" }}
          >
            <span className="text-title text-[13px] font-semibold">
              پشتیبانی از ارزهای برتر
            </span>
            <span className="text-[#383838] dark:text-[#DFDFDF] text-[11px]">
              دسترسی به بازار جهانی
            </span>
          </div>

          <div
            className="hidden xl:flex absolute bottom-[10%] right-[-13vw] w-[190px] flex-col gap-1 rounded-[24px] bg-gradient-to-b from-white/60 to-white/15 dark:from-white/20 dark:to-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.10),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.15)] px-4 py-3 animate-float"
            style={{ animationDelay: "1.2s", animationDuration: "5s" }}
          >
            <span className="text-title text-[13px] font-semibold">
              امنیت بانکی
            </span>
            <span className="text-[#383838] dark:text-[#DFDFDF] text-[11px]">
              نگهداری امن دارایی
            </span>
          </div>
        </div>
      </div>

      {/* Floating crypto / gateway symbols */}
      <div
        className="hidden xl:flex absolute top-[12%] left-[6%] w-11 h-11 items-center justify-center rounded-full bg-gradient-to-b from-white/50 to-white/10 dark:from-white/15 dark:to-white/[0.03] backdrop-blur-md border border-white/60 dark:border-white/10 text-[#2B758C] dark:text-[#7FE9DF] animate-float"
        style={{ animationDelay: "0.2s", animationDuration: "4.8s" }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 8h3.2a2 2 0 0 1 0 4H9.5m0 0h3.6a2 2 0 0 1 0 4H9.5m0-8V7m0 9v1m2.5-10V7m0 9v1" />
        </svg>
      </div>

      <div
        className="hidden xl:flex absolute top-[38%] right-[5%] w-11 h-11 items-center justify-center rounded-full bg-gradient-to-b from-white/50 to-white/10 dark:from-white/15 dark:to-white/[0.03] backdrop-blur-md border border-white/60 dark:border-white/10 text-[#2B758C] dark:text-[#7FE9DF] animate-float"
        style={{ animationDelay: "0.9s", animationDuration: "5.2s" }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
          <path d="M6 15h4" />
        </svg>
      </div>

      <div
        className="hidden xl:flex absolute bottom-[8%] left-[16%] w-11 h-11 items-center justify-center rounded-full bg-gradient-to-b from-white/50 to-white/10 dark:from-white/15 dark:to-white/[0.03] backdrop-blur-md border border-white/60 dark:border-white/10 text-[#2B758C] dark:text-[#7FE9DF] animate-float"
        style={{ animationDelay: "0.5s", animationDuration: "4.3s" }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
          <circle cx="16.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <div
        className="hidden xl:flex absolute bottom-[6%] right-[18%] w-11 h-11 items-center justify-center rounded-full bg-gradient-to-b from-white/50 to-white/10 dark:from-white/15 dark:to-white/[0.03] backdrop-blur-md border border-white/60 dark:border-white/10 text-[#2B758C] dark:text-[#7FE9DF] animate-float"
        style={{ animationDelay: "1.3s", animationDuration: "5.6s" }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8h13l-3-3" />
          <path d="M20 16H7l3 3" />
        </svg>
      </div>

      <div
        className="hidden xl:flex absolute top-[10%] right-[30%] w-11 h-11 items-center justify-center rounded-full bg-gradient-to-b from-white/50 to-white/10 dark:from-white/15 dark:to-white/[0.03] backdrop-blur-md border border-white/60 dark:border-white/10 text-[#2B758C] dark:text-[#7FE9DF] animate-float"
        style={{ animationDelay: "0s", animationDuration: "4.6s" }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

      {/* MESH GRADIENT — light */}
      <div
        className="absolute inset-0 -z-10 dark:hidden animate-mesh-flow motion-reduce:animate-none"
        style={{
          backgroundImage:
            "radial-gradient(38% 45% at 12% 18%, rgba(78,223,212,0.38), transparent 70%), radial-gradient(42% 50% at 88% 12%, rgba(43,117,140,0.22), transparent 70%), radial-gradient(50% 55% at 80% 88%, rgba(78,223,212,0.30), transparent 70%), radial-gradient(42% 46% at 12% 90%, rgba(43,117,140,0.18), transparent 70%)",
          backgroundColor: "#ffffff",
        }}
      />

      {/* MESH GRADIENT — dark */}
      <div
        className="absolute inset-0 -z-10 hidden dark:block animate-mesh-flow motion-reduce:animate-none"
        style={{
          backgroundImage:
            "radial-gradient(42% 48% at 15% 15%, rgba(127,233,223,0.30), transparent 70%), radial-gradient(45% 50% at 85% 10%, rgba(95,201,193,0.28), transparent 70%), radial-gradient(52% 58% at 78% 92%, rgba(43,117,140,0.45), transparent 70%), radial-gradient(45% 50% at 10% 88%, rgba(14,111,108,0.5), transparent 70%), linear-gradient(180deg, #0E6F6C 0%, #0B5F5D 45%, #083E42 100%)",
        }}
      />

      {/* OPTIONAL GRID OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 -z-10 hidden md:block animate-grid-pulse motion-reduce:animate-none"
        style={{
          backgroundImage: "url('/images/landing/grid.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
    </header>
  );
}

export default Header;
