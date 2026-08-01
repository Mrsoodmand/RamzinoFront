import Image from "next/image";
import Timer from "./Timer";
import classes from "hooks/classes";

function Hero({ data }) {
  return (
    <header className="container mt-5 sm:mt-14">
      <div className="flex items-center gap-x-6 gap-y-[17px] justify-between flex-col lg:flex-row">
        <div className="lg:max-w-[719px] fade-in">
          <h1 className="text-[25px] sm:text-[35px] font-semibold ">
            <span className="text-[#0C0C0C] dark:text-[#FAFAFA]">خرید</span>
            <strong className="text-[#6264E0] mx-0.5 dark:text-[#6264E0]">
              {data?.nameFa || data?.nameEn}
            </strong>
            <span className="text-[#606060] dark:text-[#B1B1B1]">
              ({data?.nameEn})
            </span>
          </h1>
          <p className="text-[#383838] dark:text-[#E3E2E1] font-normal text-justify leading-[17px] sm:leading-[23px] mt-[14px] sm:mt-5 text-xs sm:text-base">
            {data?.shortDetail}
          </p>
        </div>
        <div className="relative w-full overflow-hidden center-end lg:min-w-[490px] lg:max-w-[586px]">
          <div className="w-full border border-solid border-[#E2E2E2] dark:border-[#032934] rounded-md sm:rounded-[10px] bg-[#FFFFFF03] backdrop-blur-[70px] pt-4 sm:pt-6 pb-0.5 z-10">
            <div
              className={classes(
                "pl-3.5 sm:pl-[26px] pr-4 center-between border-solid border-[#E2E2E2] dark:border-[#032934b6] pb-4 sm:pb-7",
                data?.lunchTime ? "border-b" : ""
              )}
            >
              <Image
                src="/images/tests/chart-eth.png"
                alt="TITLE"
                width={195}
                height={63}
                layout="fixed"
                className="max-w-[116px] sm:max-w-[195px] fade-in"
              />
              <div className="center gap-[13px] sm:gap-[23px] fade-in">
                <div>
                  <div className="text-[#373A41] dark:text-[#fff] font-semibold text-sm sm:text-2xl">
                    {Number(data?.rialPrice)?.toLocaleString()}
                    <span className="text-[#6D6F74] dark:text-[#f5f5f5] text-[10px] sm:text-xl font-medium sm:mr-0.5">
                      تومان
                    </span>
                  </div>
                  <div
                    dir="ltr"
                    className="text-[#52555A] dark:text-[#EDEDED] text-[11px] sm:text-[18px] font-semibold text-left mt-2.5 sm:mt-[18px] "
                  >
                    $ {Number(data?.price)?.toLocaleString()}
                  </div>
                </div>
                <Image
                  src={data?.logo || "/images/tests/eth 1.png"}
                  alt={data?.nameEn}
                  layout="fixed"
                  width={81}
                  height={81}
                  className="max-w-[50px] sm:max-w-[81px]"
                />
              </div>
            </div>
            {data?.lunchTime && (
              <div className="center-between py-2 sm:py-3 px-3 sm:px-4">
                <div className="text-[#373A41] dark:text-[#f5f5f5] text-[10px] sm:text-xs">
                  زمان باقی مانده تا لیست شدن
                </div>
                <Timer lunchTime={new Date(data?.lunchTime)} />
              </div>
            )}
          </div>
          <div className="absolute top-2 left-10 bg-[#6262E1] w-[76px] h-[76px] rounded-full z-[-1] animate-pulse"></div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
