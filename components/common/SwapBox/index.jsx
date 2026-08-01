import React, { useState } from "react";
import ChangeCoin from "icons/Layout/ChangeCoin.svg";
import Image from "next/image";
import ShopIcon from "icons/Layout/ShopIcon.svg";
import AddIcon from "components/common/addIcon";
import classes from "hooks/classes";
import dynamic from "next/dynamic";
const IconArrowBottom = dynamic(
  () => import("icons/Layout/IconArrowBottom.svg"),
  { ssr: false }
);

const SwapBox = () => {
  const [sell, setSell] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  const swapHandler = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div
      style={{
        boxShadow: " 0px 0px 74px 0px rgba(0, 0, 0, 0.02)",
      }}
      className="flex items-center w-full justify-center sm:max-w-[490px]  bg-white md:py-[25px] py-5 lg:px-[18px] md:px-4 px-3 dark:bg-white md:gap-4 gap-2 rounded-[7px]"
    >
      <div className="flex items-center flex-col md:gap-5 gap-3 w-full">
        <div className="dark:bg-[#032z934] bg-themeColor dark:bg-[#032934] w-full rounded-[6px] px-2 py-2 flex items-center justify-between lg:gap-6 gap-4">
          <button
            title="خرید ارز"
            onClick={() => setSell(true)}
            className={classes(
              !sell
                ? "dark:text-[#F5F5F5]  text-[#373A41]"
                : " dark:text-[#fff]  text-[#fff] bg-primaryDark",
              " text-[#373A41]  md:px-4 w-[49%]    overflow-hidden  relative rounded-[3px] sm:rounded-[5px] md:text-[17px] h-[30px] md:h-[45px]  text-[11px]  font-semibold"
            )}
          >
            خرید ارز
          </button>
          <button
            title="فروش ارز"
            onClick={() => setSell(false)}
            className={classes(
              sell
                ? "dark:text-[#F5F5F5] text-[#373A41]"
                : "  text-[#fff]   bg-primaryDark",
              "   md:px-4 px-3 w-[49%] z-10  flex items-center gap-3 overflow-hidden relative rounded-[3px] sm:rounded-[5px] md:text-[17px]  h-[30px] md:h-[45px]  text-[11px]  font-semibold sm:min-w-fit"
            )}
          >
            فروش ارز
            <span
              className={classes(
                "   p-[6px] px-2 h-6 md:h-auto  text-[#0C0C0C] rounded-[3px] sm:rounded-[5px] md:text-[14px] text-[10px] bg-primary font-semibold sm:min-w-fit"
              )}
            >
              بدون کارمزد
            </span>
          </button>
        </div>
        <div className="flex flex-wrap w-full relative md:gap-[9px] gap-[7px]">
          {/* باکس‌ها */}
          <div
            className={`transition-all  ${
              isSwapped ? "translate-y-[110%]" : "translate-y-[0%]"
            }  w-full`}
          >
            {/* پرداخت میکنم */}
            <div
              className={classes(
                isSwapped ? "pt-4" : "md:pb-[35px] pb-6",
                "flex bg-themeColor dark:bg-[#032934] rounded-[6px] md:min-h-[132px] dark:text-[#fff]  flex-wrap w-full py-4  px-5 md:gap-[15px] gap-[10px]"
              )}
            >
              <span className="text-[#373A41] dark:text-[#fff] w-full flex items-center text-[11px] md:text-[15px] font-semibold ">
                پرداخت میکنم
              </span>
              <div className=" flex items-center justify-between text-greyBlack w-full">
                <span className="text-[18px] md:text-[24px] font-semibold text-[#373A41] dark:text-[#fff]">
                  {Number(24000).toLocaleString()}
                </span>
                <button
                  title="لیست ارزها"
                  className="flex items-center cursor-pointer gap-[10px] group md:px-4 px-2 py-2 rounded-[500px] bg-white"
                >
                  <span className="flex items-center justify-center   dark:text-[#fff] rounded-md">
                    <AddIcon>
                      <IconArrowBottom className="rotate-0 transition-all ease-out  dark:[&>path]:stroke-[#8c8c8c]" />
                    </AddIcon>
                  </span>
                  <span className="  md:text-[16px] text-[11px] font-semibold text-title">
                    DOGS
                  </span>
                  <Image
                    src="/images/tests/Blum.webp"
                    width={34}
                    height={34}
                    className="rounded-full md:max-w-[34px]  md:max-h-[34px] max-w-[24px]  max-h-[24px]"
                    alt="عکس برند"
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`transition-all  ${
              !isSwapped ? "translate-y-[0%]" : "translate-y-[-102%]"
            }  w-full`}
          >
            {/* دریافت میکنم */}
            <div
              className={classes(
                !isSwapped ? "pt-4" : "md:pb-[35px] pb-6",
                "flex bg-themeColor dark:bg-[#032934] rounded-[6px] md:md:min-h-[132px] dark:text-[#fff]  flex-wrap w-full py-4  px-5 md:gap-[15px] gap-[10px]px] gap-[10px]"
              )}
            >
              <span className="w-full flex items-center text-[11px] md:text-[15px] font-semibold text-[#373A41] dark:text-[#fff]">
                دریافت میکنم
              </span>
              <div className=" flex items-center justify-between text-greyBlack w-full">
                <span className="text-[18px] md:text-[24px] font-semibold text-[#373A41] dark:text-[#fff]">
                  {Number(24000).toLocaleString()}
                </span>
                <button
                  title="لیست ارزها"
                  className="flex items-center gap-[10px] cursor-pointer group md:px-4 px-2 py-2 rounded-[500px] bg-white"
                >
                  <div className="flex items-center justify-center  rounded-md">
                    <AddIcon>
                      <IconArrowBottom className="rotate-0 transition-all ease-out  dark:[&>path]:stroke-[#8c8c8c]" />
                    </AddIcon>
                  </div>
                  <span className="md:text-[16px] text-[11px] font-semibold text-title">
                    DOGS
                  </span>
                  <Image
                    src="/images/tests/Blum.webp"
                    width={34}
                    height={34}
                    className="rounded-full md:max-w-[34px]  md:max-h-[34px] max-w-[24px]  max-h-[24px]"
                    alt="Name"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* دکمه تعویض با انیمیشن چرخش */}
          <button
            title="عوض کردن ارز"
            className={`flex items-center border-[6px] border-[#fff] dark:border-[#005975] top-[50%] -translate-x-[50%] -translate-y-[50%] left-[50%] absolute justify-center p-2 bg-themeColor dark:bg-[#003E52] rounded-full  ${
              isSwapped ? "rotate-[360deg]" : "rotate-0"
            }`}
            onClick={swapHandler}
          >
            <AddIcon>
              <ChangeCoin className="dark:[&>path]:stroke-[#fff] scale-75 md:scale-100" />
            </AddIcon>
          </button>
        </div>
        <button
          title="همین الان خرید کن"
          className="flex md:text-[16px] h-[41px] md:h-[60px] text-[11px] font-medium py-3 md:py-4  justify-center  items-center gap-4 w-full bg-primary rounded-lg dark:text-[#0c0c0c]"
        >
          <AddIcon>
            <ShopIcon className="dark:[&>path]:stroke-[#0c0c0c] scale-90 md:scale-100 [&>path]:stroke-[#0c0c0c]" />
          </AddIcon>
          همین حالا خرید کن
        </button>
      </div>
    </div>
  );
};

export default SwapBox;
