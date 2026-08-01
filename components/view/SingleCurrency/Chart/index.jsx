import classes from "hooks/classes";
import dynamic from "next/dynamic";

const IconTradingView = dynamic(
  () => import("components/view/SingleCurrency/icons/IconTradingView.svg"),
  { ssr: false }
);

function Chart() {
  return (
    <section className="container mt-10 sm:mt-14 fade-in">
      <div className="overflow-auto none-scroll">
        <div className="flex items-start sm:items-center sm:justify-between gap-4 min-w-fit flex-col sm:flex-row">
          <div className="text-[#373A41] dark:text-[#FFFFFF] font-semibold text-base sm:text-[22px] min-w-fit">
            نمودار اتریوم
          </div>
          <div className="flex items-start gap-[11px] flex-col sm:flex-row w-full sm:w-fit">
            <div className="center gap-[9px] w-full sm:w-fit">
              <div className="min-w-max full-center bg-[#EBECEC] dark:bg-[#032934] rounded-[5px] sm:rounded-[4px] h-[40px] sm:h-[47px] px-1 sm:px-1.5 gap-1">
                <button
                  className={classes(
                    true
                      ? " bg-white dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                      : "text-[#373A41] dark:text-[#F5F5F5] hover:bg-white hover:opacity-55",
                    "full-center text-[10px] sm:text-sm h-[31px] sm:h-[37px] opacity-80 rounded-sm px-2 sm:px-5 min-w-fit"
                  )}
                >
                  قیمت تومانی
                </button>
                <button
                  className={classes(
                    false
                      ? " bg-white dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                      : "text-[#373A41] dark:text-[#F5F5F5] hover:bg-white hover:opacity-55",
                    "full-center text-[10px] sm:text-sm h-[31px] sm:h-[37px] opacity-80 rounded-sm px-2 sm:px-5 min-w-fit"
                  )}
                >
                  قیمت ریالی
                </button>
              </div>
              <div className="min-w-fit full-center sm:hidden bg-[#EBECEC] dark:bg-[#032934] rounded-[5px] sm:rounded-[4px] h-[40px] sm:h-[47px] px-1 sm:px-1.5 gap-1">
                <button
                  className={classes(
                    true
                      ? "bg-white dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                      : "text-[#373A41] dark:text-[#F5F5F5] hover:bg-white hover:opacity-55",
                    "full-center text-[10px] sm:text-sm h-[31px] sm:h-[37px] opacity-80 rounded-sm px-2.5 sm:px-4"
                  )}
                >
                  قیمت
                </button>
                <button
                  className={classes(
                    false
                      ? "bg-white dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                      : "text-[#373A41] dark:text-[#F5F5F5] hover:bg-white hover:opacity-55",
                    "full-center text-[10px] sm:text-sm h-[31px] sm:h-[37px] opacity-80 rounded-sm px-2 sm:px-3"
                  )}
                >
                  ارزش بازار
                </button>
              </div>
              <button className="min-w-fit full-center sm:hidden bg-[#EBECEC] dark:bg-[#032934] h-10 sm:h-[47px] rounded-[5px] sm:rounded-[4px] gap-1.5 text-[#373A41] dark:text-[#F5F5F5] w-[53px] sm:w-[191px] text-xs hover:bg-white glass">
                <IconTradingView className="dark:[&>path]:stroke-[#fff] scale-90 sm:scale-100" />
              </button>
            </div>
            <div className="min-w-fit full-center bg-[#EBECEC] dark:bg-[#032934] rounded-[4px] h-[32px] sm:h-[47px] px-1 gap-1 w">
              {[1, 2, 3, 4, 5, 6, 7]?.map((e, i) => (
                <button
                  key={i}
                  className={classes(
                    i === 1
                      ? "bg-white dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                      : "text-[#373A41] dark:text-[#F5F5F5] hover:bg-white hover:opacity-55",
                    "full-center h-6 sm:h-[37px] opacity-80 rounded-sm px-[17.9px] sm:px-4 text-[11px] sm:text-sm"
                  )}
                >
                  {i === 0 ? "All" : `${i + 1}y`}
                </button>
              ))}
            </div>
            <div className="hidden sm:full-center min-w-fit bg-[#EBECEC] dark:bg-[#032934] rounded-[4px] h-[47px] px-1.5 gap-1">
              <button
                className={classes(
                  true
                    ? "bg-white dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                    : "text-[#373A41] dark:text-[#F5F5F5] hover:bg-white hover:opacity-55",
                  "full-center text-sm h-[37px] opacity-80 rounded-sm px-4"
                )}
              >
                قیمت
              </button>
              <button
                className={classes(
                  false
                    ? "bg-white dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                    : "text-[#373A41] dark:text-[#F5F5F5] hover:bg-white hover:opacity-55",
                  "full-center text-sm h-[37px] opacity-80 rounded-sm px-1.5"
                )}
              >
                ارزش بازار
              </button>
            </div>
            <button className="hidden min-w-fit sm:full-center bg-[#EBECEC] dark:bg-[#032934] h-[47px] rounded-[4px] gap-1.5 text-[#373A41] dark:text-[#F5F5F5] w-[191px] text-xs hover:bg-white glass">
              مشاهده در تریدینگ ویو
              <IconTradingView className="dark:[&>path]:stroke-[#fff]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chart;
