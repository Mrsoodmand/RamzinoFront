import Image from "next/image";

function Hero() {
  return (
    <header className="container fade-in">
      <div className="center-between flex-col-reverse 2md:flex-row gap-[26px]">
        <div className="w-full">
          <h1 className="text-title font-semibold text-[25px] sm:text-[30px]">
            کارمزد ها برای کاربران ما
          </h1>
          <p className="text-[#404040] dark:text-[#DFDFDF] font-semibold text-[15px] sm:text-xl my-6 text-justify sm:text-start">
            سطح کارمزد معاملات بر اساس حجم معامله‌های ۳۰ روز گذشته شما در هر
            پایه بازار محاسبه می‌شود.
          </p>
          <div className="font-normal text-[#3C3C3C] dark:text-[#DFDFDF] text-[15px] sm:text-xl mb-6">
            برای مشاهده سطح کارمزد معاملات خود، ابتدا وارد شوید.
          </div>
          <button className="btn btn-accent">
            ورود به حساب کاربری
          </button>
        </div>

        <div className="w-[366px] sm:w-[414px] min-w-[366px] sm:min-w-[414px]">
          <Image
            src="/images/ethereum-technology.png"
            alt="کارمزد ها برای کاربران ما"
            layout="fixed"
            width={414}
            height={414}
            className="max-w-[366px] sm:max-w-[414px]"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
