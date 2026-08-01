import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classes from "hooks/classes";
import Image from "next/image";
import dynamic from "next/dynamic";

const IconBottom = dynamic(() => import("icons/Layout/IconArrowBottom.svg"), {
  ssr: false,
});
const IconSearch = dynamic(() => import("icons/Layout/IconSearch.svg"), {
  ssr: false,
});

export default function ModalSelectCurrency({ open, handelClose }) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1000000000]"
          onClose={handelClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-[#00000057]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex items-end sm:items-center justify-center sm:px-5 sm:pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full sm:translate-y-0"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full sm:translate-y-0"
              >
                <Dialog.Panel
                  className={classes(
                    `w-full transform overflow-hidden bg-white align-middle transition-medium rounded-b-none sm:rounded-b-[10px] rounded-t-[10px] rounded-[10px] px-[22px] py-5 sm:px-5 sm:my-6 max-w-[572px] shadow-[0px_0px_74px_0px_#0000000A]`
                  )}
                >
                  <div className="center bg-[#FAFAFA] dark:bg-[#032934] rounded-[7px] sm:rounded-[10px] h-[75px] sm:h-[99px] pr-5 pl-1.5 py-1.5 gap-3 sm:gap-4">
                    <div className="center-between w-full">
                      <div>
                        <div className="text-[#373A41] dark:text-[#F5F5F5] font-semibold text-xs sm:text-[15px] mb-2 sm:mb-[13px]">
                          پرداخت میکنم
                        </div>
                        <div className="center gap-1 sm:gap-1.5 text-[#373A41] dark:text-[#F5F5F5] font-semibold text-[13px] sm:text-[17px]">
                          <Image
                            src="/images/tests/toman.png"
                            alt="TOMAN"
                            layout="fixed"
                            width={30}
                            height={30}
                            className="rounded-full max-w-[23px] sm:max-w-[30px]"
                          />
                          TMN
                        </div>
                      </div>
                      <IconBottom className="rotate-90 sm:scale-125 dark:[&>path]:stroke-[#F5F5F5]" />
                    </div>
                    <div className="min-w-[146px] sm:min-w-[228px] h-full bg-[#EDEDED] dark:bg-[#003647] rounded-[3px] sm:rounded-[5px] flex justify-center flex-col px-3">
                      <div className="text-[#373A41] dark:text-[#F5F5F5] font-semibold text-xs sm:text-[15px] mb-2 sm:mb-[13px]">
                        دریافت میکنم{" "}
                      </div>
                      <div className="center gap-1 sm:gap-1.5 text-[#373A41] dark:text-[#F5F5F5] font-semibold text-[13px] sm:text-[17px]">
                        <Image
                          src="/images/tests/Layer x0020 1.webp"
                          alt="TOMAN"
                          layout="fixed"
                          width={30}
                          height={30}
                          className="rounded-full max-w-[23px] sm:max-w-[30px]"
                        />
                        TMN
                      </div>
                    </div>
                  </div>
                  <div className="center bg-[#F5F5F6] dark:bg-[#032934] h-[42px] sm:h-[56px] w-full px-3 sm:px-[18px] rounded-md sm:rounded-lg mt-[18px] sm:mt-6">
                    <input
                      type="text"
                      placeholder="جستجو در کوین ها"
                      className="w-full h-full font-normal placeholder:text-[#373A41] text-[#373A41] dark:placeholder:text-[#E3E2E1] dark:text-[#E3E2E1] bg-[#fff] bg-opacity-0 border-none outline-none text-xs sm:text-base"
                    />
                    <IconSearch className="dark:[&>path]:stroke-[#fafafa] scale-[0.8] sm:scale-100" />
                  </div>
                  <div className="center gap-[7px] mt-[18px] sm:mt-6">
                    <button
                      className={classes(
                        true
                          ? "bg-[#4EDFD4] text-[#404040]"
                          : "bg-[#EDEDED] text-[#606060]  hover:opacity-80 glass",
                        "full-center font-semibold text-[10px] sm:text-sm h-[29px] sm:h-[39px] px-3.5 sm:px-[18px] rounded-full"
                      )}
                    >
                      پرطرفدارترین
                    </button>
                    <button
                      className={classes(
                        false
                          ? "bg-[#4EDFD4] text-[#404040]"
                          : "bg-[#EDEDED] dark:bg-[#003647] text-[#606060]  hover:opacity-80 glass dark:text-[#E3E2E1]",
                        "full-center font-semibold text-[10px] sm:text-sm h-[29px] sm:h-[39px] px-3.5 sm:px-[18px] rounded-full"
                      )}
                    >
                      جدیدترین
                    </button>
                  </div>
                  <ul className="mt-2">
                    {[1, 2, 3, 4, 5, 6, 7]?.map((e, i) => (
                      <li
                        key={i}
                        className="border-b border-solid border-[#E5E5E5] dark:border-[#19343C] last:border-b-0"
                      >
                        <button className="center gap-1.5 sm:gap-2 w-full py-2.5 sm:py-3.5 group hover:opacity-80">
                          <Image
                            src="/images/tests/Layer x0020 1.webp"
                            alt="NAME"
                            width={34}
                            height={34}
                            layout="fixed"
                            className="group-hover:scale-105 group-hover:grayscale max-w-[26px] sm:max-w-[34px]"
                          />
                          <div>
                            <div className="text-[#171B23] dark:text-[#FFFFFF] text-[10px] sm:text-sm">
                              Bitcoin
                            </div>
                            <div className="text-[#43464C] dark:text-[#E3E2E1] text-[9px] sm:text-xs -mt-0.5">
                              بیت کوین
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
