import ItemFaq from "components/common/Faqs/ItemFaq";
import classes from "hooks/classes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const IconUser = dynamic(
  () => import("components/view/Faqs/icons/IconUser.svg"),
  { ssr: false }
);

function List({ faqs, categoryList }) {
  const [catSelect, setCatSelect] = useState(null);
  const [open, setOpen] = useState(0);
  const keys = categoryList ? Object.keys(categoryList) : [];

  useEffect(() => {
    if (categoryList) {
      const keys = Object.keys(categoryList);

      setCatSelect(keys[0]);
    }
  }, [categoryList]);

  return (
    <section className="container my-[27px] sm:my-11">
      <div className="fade-in flex items-start flex-col 2md:flex-row gap-[39px] lg:gap-[26px]">
        <div className="center 2md:hidden bg-themeColor dark:bg-[#032934] rounded-[7px] w-full h-[46px] overflow-auto none-scroll gap-1.5 px-2">
          {Object.values(categoryList || {})?.map((e, i) => (
            <button
              key={i}
              className={classes(
                "full-center text-[#171B23] font-medium text-[15px] min-w-fit rounded-[3px] h-[34px] px-3.5 opacity-80 dark:opacity-100",
                keys[i] === catSelect
                  ? "bg-white dark:bg-primary"
                  : "dark:text-[#E3E2E1]"
              )}
              onClick={() => {
                setOpen(0);
                setCatSelect(keys[i]);
              }}
            >
              {e}
            </button>
          ))}
        </div>
        <ul className="fade-in h-fit w-[251px] min-w-[251px] sticky top-3 hidden 2md:block">
          {Object.values(categoryList || {})?.map((e, i) => (
            <li key={i}>
              <button
                className={classes(
                  "center gap-2.5 h-[120px] w-full text-title font-semibold px-2.5 rounded-[4px] group dark:font-medium",
                  keys[i] === catSelect
                    ? "bg-white"
                    : "hover:bg-[#f3f3f3] dark:hover:bg-[#043746]"
                )}
                onClick={() => {
                  setOpen(0);
                  setCatSelect(keys[i]);
                }}
              >
                <span
                  className={classes(
                    "full-center w-[93px] h-[91px] rounded-full",
                    keys[i] === catSelect
                      ? "bg-[#4EDFD4]"
                      : "bg-[#EDEDED] dark:bg-[#032934] group-hover:bg-white"
                  )}
                >
                  <IconUser
                    className={
                      keys[i] === catSelect
                        ? ""
                        : "dark:[&>path]:stroke-[#EDEDED]"
                    }
                  />
                </span>
                {e}
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full h-fit sticky top-3">
          <div className="text-title font-semibold text-[18px] mb-[20px] 2md:hidden">
            سوالات خرید و فروش
          </div>
          <ul>
            {typeof (faqs || {})[catSelect] == "undefined"
              ? []
              : faqs[catSelect]?.map((e, i) => (
                  <ItemFaq
                    key={i}
                    i={i}
                    open={open}
                    setOpen={setOpen}
                    data={e}
                  />
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default List;
