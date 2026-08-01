import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Image from "next/image";

const IconShop = dynamic(
  () => import("components/view/SingleCurrency/icons/IconShop.svg"),
  { ssr: false }
);

function Swap() {
  return (
    <div>
      <div className="text-[#373A41] dark:text-[#fff] font-semibold text-base sm:text-[22px] mb-[19px] sm:mb-[25px]">
        خرید و فروش انواع ارز ها
      </div>
      <div className="rounded-md sm:rounded-[9px] w-full bg-white px-[14px] sm:px-[21px] py-3 sm:py-3.5">
        <div className="center gap-2 sm:gap-3 bg-[#F5F5F5] dark:bg-[#032934] rounded-[5px] h-[36px] sm:h-[55px] px-1.5 w-fit">
          <button
            className={classes(
              true ? "bg-[#6CE4DB]" : "hover:bg-white dark:text-[#F5F5F5]",
              "full-center h-[28px] sm:h-[42px] px-5 sm:px-[29px] rounded-[3px] sm:rounded-[5px] text-[10px] sm:text-base"
            )}
          >
            خرید ارز
          </button>
          <button
            className={classes(
              false ? "bg-[#6CE4DB]" : "hover:bg-white dark:text-[#F5F5F5]",
              "full-center h-[28px] sm:h-[42px] px-5 sm:px-[29px] rounded-[3px] sm:rounded-[5px] text-[10px] sm:text-base"
            )}
          >
            خرید ارز
          </button>
        </div>
        <div className="mt-[11px] sm:mt-[17px]">
          <div>
            <div className="text-[#373A41] dark:text-[#f5f5f5] font-semibold mb-[11px] text-[10px] sm:text-base">
              پرداخت میکنم
            </div>
            <div className="center-between bg-[#F5F5F5]  dark:bg-[#032934] pr-2 sm:pr-3 pl-2.5 sm:pl-3.5 h-[46px] sm:h-[69px]">
              <button className="bg-[#fff] dark:bg-[#0E343F] rounded-[3px] sm:rounded-[5px] w-[91px] sm:w-[136px] h-[32px] sm:h-[49px] text-[#373A41] dark:text-[#F5F5F5] font-semibold gap-[5px] sm:gap-2 full-center hover:opacity-80 text-[10px] sm:text-base">
                Toman
                <Image
                  src="/images/tests/ETH.png"
                  alt="Toman"
                  width={34}
                  height={34}
                  layout="fixed"
                  className="max-w-[22px] sm:max-w-[34px]"
                />
              </button>
              <div className="text-[#373A41] dark:text-[#F5F5F5] text-xs sm:text-[18px]">
                24,000
              </div>
            </div>
          </div>
          <div className="mt-3 sm:mt-[19px]">
            <div className="text-[#373A41] dark:text-[#f5f5f5] font-semibold mb-[11px] text-[10px] sm:text-base">
              دریافت میکنم
            </div>
            <div className="center-between bg-[#F5F5F5] dark:bg-[#032934] pr-2 sm:pr-3 pl-2.5 sm:pl-3.5 h-[46px] sm:h-[69px]">
              <button className="bg-[#fff] dark:bg-[#0E343F] rounded-[3px] sm:rounded-[5px] w-[91px] sm:w-[136px] h-[32px] sm:h-[49px] text-[#373A41] dark:text-[#F5F5F5] font-semibold gap-[5px] sm:gap-2 full-center hover:opacity-80 text-[10px] sm:text-base">
                Etherium
                <Image
                  src="/images/tests/ETH.png"
                  alt="Toman"
                  width={34}
                  height={34}
                  layout="fixed"
                  className="max-w-[22px] sm:max-w-[34px]"
                />
              </button>
              <div className="text-[#373A41] dark:text-[#F5F5F5] text-xs sm:text-[18px]">
                24,000
              </div>
            </div>
          </div>
        </div>
        <button className="full-center bg-[#6CE4DB] w-full h-10 sm:h-[60px] gap-1 sm:gap-2.5 rounded-[5px] sm:rounded-lg mt-3 sm:mt-[17px] glass hover:opacity-80 text-xs sm:text-base">
          <IconShop className="scale-75 sm:scale-100" />
          همین حالا خرید کن
        </button>
      </div>
    </div>
  );
}

export default Swap;
