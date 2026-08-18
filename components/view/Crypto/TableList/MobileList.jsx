import AddIcon from "components/common/addIcon";
import IconTop from "icons/Home/IconTop.svg";
import IconSort from "icons/Home/IconSort.svg";
import IconStar from "icons/Home/IconStar.svg";
import IconArrowBottom from "icons/Layout/IconArrowBottom.svg";
import IconShop from "icons/Home/IconShop.svg";
import IconRead from "icons/Home/IconRead.svg";
import classes from "hooks/classes";
import Image from "next/image";
import { useState } from "react";

function MobileList() {
  const [open, setOpen] = useState(null);

  return (
    <main className="mt-[18px] 2md:hidden">
      <ul>
        {[1, 2, 3, 4]?.map((e, i) => (
          <li
            key={i}
            className={classes(
              "overflow-hidden transition-medium bg-white w-full py-[11px] px-3 rounded-[5px] mb-[13px]"
            )}
          >
            <div className="center-between">
              <div className="center gap-1">
                <button title="استار">
                  <AddIcon>
                    <IconStar
                      className={classes("scale-75 dark:[&>path]:stroke-title")}
                    />
                  </AddIcon>
                </button>
                <div className="center gap-2 z-10 sticky">
                  <Image
                    src="/images/tests/Layer x0020 1.webp"
                    alt="NAME"
                    layout="fixed"
                    width={34}
                    height={34}
                  />
                  <div>
                    <div className="text-[#171B23] dark:text-[#F5F5F5] text-sm font-medium ">
                      Dogs
                    </div>
                    <div className="text-primaryText dark:text-[#E3E2E1] text-xs font-medium">
                      داگز
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#171B23] dark:text-[#F5F5F5] text-sm font-medium ">
                8,678,097 ت
              </div>
              <button
                title="جزئیات"
                onClick={() => setOpen((c) => (c === i ? null : i))}
                className="btn btn-accent"
              >
                جزئیات
                <AddIcon>
                  <IconArrowBottom
                    className={classes(
                      "scale-75",
                      i === open ? "rotate-180" : ""
                    )}
                  />
                </AddIcon>
              </button>
            </div>
            <div
              className={classes(
                open === i ? "mt-2.5 max-h-screen " : "max-h-0",
                "overflow-hidden transition-medium"
              )}
            >
              <ul>
                <li className="center-between h-[29px] border-b border-solid dark:border-[#002733] border-[#EEE6E6] pb-[9px] mb-3">
                  <span className="text-[#373A41] dark:text-[#fafafa] text-[10px] font-semibold">
                    قیمت
                  </span>
                  <span className="text-[#171B23] dark:text-[#fff] text-sm font-medium">
                    $136.2
                  </span>
                </li>
                <li className="center-between h-[29px] border-b border-solid dark:border-[#002733] border-[#EEE6E6] pb-[9px] mb-3">
                  <span className="text-[#373A41] dark:text-[#fafafa] text-[10px] font-semibold">
                    قیمت تومانی
                  </span>
                  <span className="text-[#171B23] dark:text-[#fff] text-sm font-medium">
                    8,678,097 ت
                  </span>
                </li>
                <li className="center-between h-[29px] border-b border-solid dark:border-[#002733] border-[#EEE6E6] pb-[9px] mb-3">
                  <span className="text-[#373A41] dark:text-[#fafafa] text-[10px] font-semibold">
                    حجم بازار
                  </span>
                  <span className="text-[#171B23] dark:text-[#fff] text-sm font-medium">
                    <span className="dark:text-[#fafafa] text-xs text-primaryText ml-3.5">
                      121 همت
                    </span>
                    $2.3B
                  </span>
                </li>
                <li className="center-between h-[29px] border-b border-solid dark:border-[#002733] border-[#EEE6E6] pb-[9px] mb-3">
                  <span className="text-[#373A41] dark:text-[#fafafa] text-[10px] font-semibold">
                    معاملات روزانه
                  </span>
                  <span className="text-[#171B23] dark:text-[#fff] text-sm font-medium">
                    <span className="dark:text-[#fafafa] text-xs text-primaryText ml-3.5">
                      121 همت
                    </span>
                    $2.3B
                  </span>
                </li>
                <li className="center-between h-[29px] border-b border-solid dark:border-[#002733] border-[#EEE6E6] pb-[9px] mb-3">
                  <span className="text-[#373A41] dark:text-[#fafafa] text-[10px] font-semibold">
                    روزانه
                  </span>
                  <div className="full-center bg-[#ECFFF3] dark:bg-[#092B15] text-[#00A652] rounded-[4px] gap-0.5 sm:gap-[5px] w-[66px] h-[24px] z-10 sticky text-[11px]">
                    110%
                    <AddIcon>
                      <IconTop className="scale-75" />
                    </AddIcon>
                  </div>
                </li>
                <li className="center-between h-[29px] border-b border-solid dark:border-[#002733] border-[#EEE6E6] pb-[9px] mb-3">
                  <span className="text-[#373A41] dark:text-[#fafafa] text-[10px] font-semibold">
                    هفتگی
                  </span>
                  <span className="text-[#00A652] dark:text-[#fff] text-sm font-medium">
                    -8,8 %
                  </span>
                </li>
                <li className="center-between h-[29px] pb-[9px] mb-3">
                  <span className="text-[#373A41] dark:text-[#fafafa] text-[10px] font-semibold">
                    نمودار هفتگی
                  </span>
                  <Image
                    src="/images/tests/Line Chart (Courtney Green).webp"
                    alt="CHART_SUCCESS"
                    width={68}
                    height={35}
                    layout="fixed"
                    className=" z-10 sticky"
                  />
                </li>
                <li className="full-center gap-[7px]">
                  <button
                    title="خرید و فروش"
                    className="border border-solid dark:border-[#fafafa4b] border-[#DFE0E1] h-11 w-full gap-0.5 dark:text-[#fafafa] text-primaryText full-center text-xs rounded-[3px]"
                  >
                    <AddIcon>
                      <IconShop className="scale-75 dark:[&>path]:stroke-[#fafafa] " />
                    </AddIcon>
                    خرید و فروش
                  </button>
                  <button
                    title="جزئیات بیشتر"
                    className="border border-solid dark:border-[#fafafa4b] border-[#DFE0E1] h-11 w-full gap-0.5 dark:text-[#fafafa] text-primaryText full-center text-xs rounded-[3px]"
                  >
                    <AddIcon>
                      <IconRead className="scale-75 dark:[&>path]:stroke-[#fafafa] " />
                    </AddIcon>
                    جزئیات بیشتر
                  </button>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MobileList;
