import AddIcon from "components/common/addIcon";
import IconTop from "icons/Home/IconTop.svg";
import IconSort from "icons/Home/IconSort.svg";
import IconStar from "icons/Home/IconStar.svg";
import IconRead from "icons/Home/IconRead.svg";
import IconShop from "icons/Home/IconShop.svg";
import { dataHeads } from "./data";
import classes from "hooks/classes";
import Image from "next/image";

function List() {
  return (
    <main className="hidden md:block mt-[25px] overflow-auto none-scroll">
      <table className="w-full min-w-[1100px]">
        {/* heads  */}
        <thead className="relative before:contents-[''] before:w-full before:h-[75px] before:bg-[#F5F5F6] dark:before:bg-[#001F28] before:rounded-[10px] before:absolute before:top-0 before:left-0 before:inline pb-[17px]">
          <tr className="relative h-[90px] ">
            <th className="min-w-[50px] max-w-[50px] pb-[15px]"></th>
            {dataHeads?.map((e, i) => (
              <th
                key={i}
                className={classes(
                  `min-w-[${e?.width}] cursor-pointer group hover:opacity-70 pb-[15px]`,
                  i === dataHeads?.length - 1 ? "pl-4" : ""
                )}
              >
                <div
                  className={classes(
                    " text-[#373A41] dark:text-[#EDEDED] text-sm font-semibold gap-[7px] z-10 sticky",
                    i === 0 ? "center" : "full-center"
                  )}
                >
                  {e?.title}
                  {e?.showSort !== false && (
                    <button title="مرتب سازی" className="">
                      <AddIcon>
                        <IconSort className="[&>path]:fill-[#373A41] dark:[&>path]:fill-[#EDEDED]" />
                      </AddIcon>
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {/* body  */}
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((e, i) => (
            <tr
              key={i}
              className={classes(
                "h-[90px]",
                i % 2 === 0
                  ? ""
                  : "relative after:contents-[''] after:w-full after:h-[75px] after:bg-[#F5F5F6] dark:after:bg-[#001F28] after:rounded-[10px] after:absolute after:top-0 after:left-0 after:inline"
              )}
            >
              <td className="min-w-[50px] max-w-[50px] pr-5 pb-[17px]">
                <button
                  title="استار"
                  className="sticky z-10 hover:opacity-75 full-center"
                >
                  <AddIcon>
                    <IconStar className="dark:[&>path]:stroke-[#F5F5F5]" />
                  </AddIcon>
                </button>
              </td>
              <td className="pb-[17px] ">
                <div className="center gap-2 z-10 sticky">
                  <Image
                    src="/images/tests/Layer x0020 1.webp"
                    alt="NAME"
                    layout="fixed"
                    width={32}
                    height={32}
                  />
                  <div>
                    <div className="text-[#171B23] dark:text-[#F5F5F5] text-sm font-normal ">
                      Bitcoin
                    </div>
                    <div className="text-primaryText dark:text-[#E3E2E1] text-xs font-normal">
                      بیت کوین
                    </div>
                  </div>
                </div>
              </td>
              <td className="pb-[17px]">
                <div className="text-[#171B23] dark:text-[#F5F5F5] text-sm font-normal  z-10 sticky full-center">
                  $136.2
                </div>
              </td>
              <td className="pb-[17px]">
                <div className="text-[#171B23] dark:text-[#F5F5F5] text-sm font-normal  z-10 sticky full-center">
                  8,678,097 ت
                </div>
              </td>
              <td className="pb-[17px]">
                <div className="text-[#171B23] dark:text-[#F5F5F5] text-sm font-normal  z-10 sticky full-center">
                  $2.3B
                </div>
                <div className="text-primaryText dark:text-[#E3E2E1] text-xs font-normal  z-10 sticky full-center">
                  121 همت
                </div>
              </td>
              <td className="pb-[17px]">
                <div className="text-[#171B23] dark:text-[#F5F5F5] text-sm font-normal  z-10 sticky full-center">
                  $2.3B
                </div>
                <div className="text-primaryText dark:text-[#E3E2E1] text-xs font-normal z-10 sticky full-center">
                  121 همت
                </div>
              </td>
              <td className="pb-[17px]">
                <div className="full-center">
                  <div className="full-center bg-[#ECFFF3] dark:bg-[#092B15] text-[#00A652] rounded-[4px] gap-[5px] w-[80px] h-[29px]  z-10 sticky">
                    110%
                    <AddIcon>
                      <IconTop />
                    </AddIcon>
                  </div>
                </div>
              </td>
              <td className="pb-[17px]">
                <div className="full-center">
                  <Image
                    src="/images/tests/Line Chart (Courtney Green).webp"
                    alt="CHART_SUCCESS"
                    width={138}
                    height={41}
                    layout="fixed"
                    className=" z-10 sticky"
                  />
                </div>
              </td>
              <td className="pb-[17px] pl-4">
                <div className="full-center gap-[15px] z-10 sticky">
                  <button title="مشاهده" className="hover:opacity-75">
                    <AddIcon>
                      <IconShop className="dark:[&>path]:stroke-[#F5F5F5]" />
                    </AddIcon>
                  </button>
                  <button title="مشاهده" className="hover:opacity-75">
                    <AddIcon>
                      <IconRead className="dark:[&>path]:stroke-[#F5F5F5]" />
                    </AddIcon>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default List;
