import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classes from "hooks/classes";
import dynamic from "next/dynamic";

const IconBottom = dynamic(
  () => import("components/view/SingleCurrency/icons/IconBottom.svg"),
  { ssr: false }
);

export default function Select({
  theme = "light",
  id,
  label,
  list,
  onChange,
  value,
  disabled = false,
  labelBold = false,
}) {
  const index = list?.findIndex((x) => x?.value === value);
  const selected = list[index];

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={classes(
          "text-[#1C1C1C] dark:text-[#F5F5F5] text-sm sm:text-base mb-2 sm:mb-[11px] block",
          labelBold ? "font-semibold dark:font-medium" : "font-medium"
        )}
      >
        {label}
      </label>
      <Listbox value={value} onChange={onChange} name={id} disabled={disabled}>
        <div className="relative w-full">
          <Listbox.Button
            className={classes(
              "relative rounded-[4px] px-[13px] text-sm sm:text-base h-12 sm:h-[63px] border border-solid flex items-center justify-between gap-[10px] hover:opacity-85 w-full font-medium",
              theme === "light"
                ? "bg-[#F5F5F5] bg-opacity-0 border-[#BFBFBF] dark:border-[#324B53] text-[#0D0D0D] dark:text-[#FAFAFA]"
                : "bg-[#0D0D0D] border-[#2E2E2E] text-[#DEDEDE]",
              "buttonSelect"
            )}
          >
            {selected?.label}

            <IconBottom
              aria-hidden="true"
              className="dark:[&>path]:stroke-[#FAFAFA] scale-90 sm:scale-100"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={classes(
                "absolute light-scroll max-h-[190px] z-10 mt-0 w-full overflow-auto rounded-md py-1 text-base shadow-select outline-none sm:text-sm bg-[#fff] dark:bg-[#05242e] border border-solid border-[#ccc] dark:border-[#0b313f] border-t-0 shadow-[0px_3px_30px_1px_#afafaf9a] dark:shadow-none"
              )}
            >
              {list.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative select-none py-2 px-4 cursor-pointer ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    } ${
                      theme === "light"
                        ? "bg-[#fff] dark:bg-[#05242e] text-[#1c1c1] dark:text-[#fff] hover:bg-[#f1f1f1] dark:hover:bg-[#05242e]"
                        : "text-themeColor hover:bg-[#000]"
                    }`
                  }
                  value={item?.value}
                >
                  {({ selected }) => (
                    <>
                      <span className={`truncate center gap-2 font-medium `}>
                        {item?.label}
                        {item?.jsx}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
