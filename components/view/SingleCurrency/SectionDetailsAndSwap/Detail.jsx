import React from "react";
import { dataTableDetail } from "../data";
import classes from "hooks/classes";

function Detail({ currencyDetail }) {
  return (
    <div>
      <div className="text-[#373A41] dark:text-[#fff] font-semibold text-base sm:text-[22px] mb-3 sm:mb-[25px]">
        جزئیات ارز دیجیتال
      </div>
      <div className="grid grid-cols-12 gap-x-1.5 sm:gap-x-[11px] gap-y-3 sm:gap-y-[19px]">
        {currencyDetail?.map((e, i) => (
          <div
            key={i}
            className="col-span-6 border border-solid border-[#DCDCDC] dark:border-[#0C2F39] rounded-md sm:rounded-[10px] center-between h-[41px] sm:h-[66px] px-2 sm:px-[14px]"
          >
            <div className="text-[#373A41] dark:text-[#F5F5F5] text-[10px] sm:text-sm">
              {e?.key}
            </div>
            <div
              className={classes(
                `text-[10px] sm:text-[17px] text-[#373A41] dark:text-[#F5F5F5]`
              )}
            >
              {e?.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
