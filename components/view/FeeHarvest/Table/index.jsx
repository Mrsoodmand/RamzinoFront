import dynamic from "next/dynamic";
import { dataHead } from "./data";
import classes from "hooks/classes";
import Image from "next/image";

const IconSearch = dynamic(() => import("icons/Layout/IconSearch.svg"), {
  ssr: false,
});

function Table() {
  return (
    <section className="container mt-[30px]">
      <div className="bg-white shadow-[0px_0px_74px_0px_#0000000A] rounded-[5px] py-4 sm:py-6 px-4 sm:px-7">
        <div className="mb-4 sm:mb-6 border border-solid border-[#CACACA] dark:border-[#084355] rounded-md sm:rounded-lg gap-2.5 center h-[54px] sm:h-[68px] w-full max-w-[471px] overflow-hidden px-4">
          <input
            type="text"
            placeholder="جستجو رمز ارز ها"
            className="w-full h-full text-[#373A41]  dark:text-[#f5f5f5] placeholder:text-[#373A41] dark:placeholder:text-[#f5f5f5] text-sm sm:text-[17px] font-semibold bg-[#fff] bg-opacity-0 outline-none dark:font-normal"
          />
          <IconSearch className="scale-[0.9] dark:[&>path]:stroke-[#fff]" />
        </div>
        <div className="w-full overflow-auto none-scroll">
          <table className="w-full">
            <thead className="">
              <tr className="relative after:contents-[''] after:bg-[#F5F5F6] dark:after:bg-[#032833] after:rounded-md sm:after:rounded-[10px] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:z-[0]">
                {dataHead?.map((e, i) => (
                  <th
                    key={i}
                    className={classes(
                      " text-[#373A41] dark:text-[#f5f5f5] font-medium text-xs sm:text-sm h-[50px] sm:h-[75px]",
                      i === dataHead?.length - 1 ? "text-center" : "text-start",
                      i === 0 ? "pr-4" : ""
                    )}
                  >
                    <span className="z-[10] sticky">{e}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8]?.map((e, i) => (
                <tr key={i} className="">
                  <td
                    className={classes(
                      "pb-8 sm:pb-10 pr-2",
                      i === 0 ? "pt-[25px]" : ""
                    )}
                  >
                    <div className="center min-w-[130px] sm:min-w-[147px] gap-2">
                      <Image
                        src="/images/tests/Layer x0020 1.webp"
                        alt="NAME"
                        layout="fixed"
                        width={34}
                        height={34}
                        className="rounded-full"
                      />
                      <div>
                        <div className="text-[#171B23] dark:text-[#fff] text-sm">
                          Bitcoin
                        </div>
                        <div className="text-[#43464C] dark:text-[#ccc] text-xs">
                          بیت کوین
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    className={classes(
                      i === 0 ? "pt-[25px]" : "",
                      "pb-8 sm:pb-10"
                    )}
                  >
                    <div className="min-w-[105px] sm:min-w-[132px] text-[#171B23] dark:text-[#fff] text-xs sm:text-sm">
                      BITCOIN
                    </div>
                  </td>
                  <td
                    className={classes(
                      i === 0 ? "pt-[25px]" : "",
                      "pb-8 sm:pb-10"
                    )}
                  >
                    <div className="min-w-[120px] sm:min-w-[144px] text-[#171B23] dark:text-[#fff] text-xs sm:text-sm">
                      BTC 0.0008
                    </div>
                  </td>
                  <td
                    className={classes(
                      i === 0 ? "pt-[25px]" : "",
                      "pb-8 sm:pb-10"
                    )}
                  >
                    <div className="min-w-[120px] sm:min-w-[144px] text-[#171B23] dark:text-[#fff] text-xs sm:text-sm">
                      BTC 0.0008
                    </div>
                  </td>
                  <td
                    className={classes(
                      i === 0 ? "pt-[25px]" : "",
                      "pb-8 sm:pb-10"
                    )}
                  >
                    <div className="min-w-[165px] sm:min-w-[201px] full-center">
                      <div className="full-center bg-[#ECFFF3] dark:bg-[#0163254f] w-[50px] sm:w-[65px] h-[30px] sm:h-[36px] rounded-[4px] text-[#00A652] text-xs sm:text-base">
                        فعال
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Table;
