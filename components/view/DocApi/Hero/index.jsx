import Image from "next/image";

function Hero() {
  return (
    <header className="fade-in max-w-[1325px] px-5 sm:px-10 mx-auto mt-3 sm:mt-0">
      <div className="center-between flex-col-reverse 2md:flex-row gap-y-[26px]">
        <div className="w-full">
          <div className="text-title dark:text-[#DFDFDF] text-[19px] sm:text-2xl">
            همواره کنار شما،
          </div>
          <h1 className="font-semibold text-[25px] sm:text-[30px] my-6 text-title">
            با API اختصاصی رمزینو!
          </h1>
          <p className="text-[#3C3C3C] dark:text-[#DFDFDF] text-[15px] sm:text-xl font-normal">
            بهره‌مندی از بیش از ۳۰ بازار معاملاتی و امکان خرید و فروش بیش از ۱۰۰
            کوین
          </p>
          <div className="center gap-[18px] sm:gap-5 mt-6">
            <button className="btn btn-accent">
              ساخت کلید API
            </button>
            <button className="text-sm sm:text-base full-center text-primaryText rounded-[7px] sm:rounded-lg w-2/4 sm:w-[166px] h-[51px] sm:h-[56px] border border-solid border-[#CBCBCB] dark:border-[#1C353D] hover:bg-white hover:border-opacity-0 hover:shadow-medium dark:text-[#EDEDED]">
              مشاهده مستندات
            </button>
          </div>
        </div>
        <div className="w-[366px] sm:w-[414px] min-w-[366px] sm:min-w-[414px]">
          <Image
            src="/images/api-robot.png"
            alt="با API اختصاصی رمزینو!"
            layout="fixed"
            width={414}
            height={414}
            className="dark:hidden max-w-[366px] sm:max-w-[414px]"
          />
          <Image
            src="/images/api-robot-dark.png"
            alt="با API اختصاصی رمزینو!"
            layout="fixed"
            width={414}
            height={414}
            className="hidden dark:block max-w-[366px] sm:max-w-[414px]"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
