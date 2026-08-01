import { Dialog, Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Select from "./Select";

const IconClose = dynamic(
  () => import("components/view/SingleCurrency/icons/IconClose.svg"),
  { ssr: false }
);
const IconPhone = dynamic(
  () => import("components/view/SingleCurrency/icons/IconPhone.svg"),
  { ssr: false }
);
const IconSend = dynamic(
  () => import("components/view/SingleCurrency/icons/IconSend.svg"),
  { ssr: false }
);

export default function ModalComment({ open, handelClose }) {
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
                    `w-full transform overflow-hidden bg-white align-middle transition-medium rounded-b-none sm:rounded-b-[5px] rounded-t-[5px] rounded-[5px] px-5 py-5 sm:px-5 sm:pb-6 sm:pt-7 sm:my-6 max-w-[802px]`
                  )}
                >
                  <div className="center-between mb-4">
                    <span className="text-[#393939] dark:text-[#E3E2E1] text-[19px] sm:text-[18px] font-semibold font-pinar">
                      ارسال نظر
                    </span>
                    <button
                      className="rounded-[7px] full-center bg-[#F5F5F6] dark:bg-[#032934] w-[36px] h-[36px]"
                      onClick={handelClose}
                    >
                      <>
                        <IconClose className="scale-95 dark:[&>path]:stroke-[#fff]" />
                      </>
                    </button>
                  </div>

                  <form>
                    <div className="mb-5">
                      <label
                        className="text-[#1C1C1C] dark:text-[#F5F5F5] font-medium text-sm sm:text-base mb-2 sm:mb-[11px] block"
                        htmlFor="currency"
                      >
                        طرفدار چه ارز دیجیتالی هستید؟
                      </label>
                      <div className="h-12 sm:h-[63px] w-full  border border-solid border-[#B0B0B0] rounded-[5px] dark:border-[#324B53] overflow-hidden">
                        <input
                          type="text"
                          className="w-full h-full border-none outline-none text-[#0D0D0D] dark:text-[#FAFAFA] placeholder:text-[#757575] px-2.5 sm:px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base"
                          placeholder="نام ارز مورد علاقه"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-[#1C1C1C] dark:text-[#F5F5F5] font-medium text-sm sm:text-base mb-2 sm:mb-[11px] block"
                        htmlFor="currency"
                      >
                        شماره موبایل
                      </label>
                      <div className="h-12 sm:h-[63px] w-full  border border-solid border-[#B0B0B0] rounded-[5px] dark:border-[#324B53] overflow-hidden center">
                        <input
                          type="text"
                          className="w-full h-full border-none outline-none text-[#0D0D0D] dark:text-[#FAFAFA] placeholder:text-[#757575] px-2.5 sm:px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base"
                          placeholder="شماره موبایل را وارد نمایید"
                        />
                        <span className="block bg-[#EDFCFB] dark:bg-[#032934] w-[56px] h-full rounded-[5px] min-w-[56px] full-center">
                          <IconPhone />
                        </span>
                      </div>
                    </div>
                    <div className="mb-5">
                      <Select
                        value="1"
                        id={"jayezeh"}
                        label={"جایزه مورد نظر"}
                        list={[
                          { value: "1", label: "Yushioo 3,000" },
                          { value: "1", label: "Yushioo 3,000" },
                          { value: "1", label: "Yushioo 3,000" },
                          { value: "1", label: "Yushioo 3,000" },
                        ]}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-[#1C1C1C] dark:text-[#F5F5F5] font-medium text-sm sm:text-base mb-2 sm:mb-[11px] block"
                        htmlFor="currency"
                      >
                        پیام ( حداقل ده کلمه )
                      </label>
                      <div className="h-[131px] w-full  border border-solid border-[#B0B0B0] rounded-[5px] dark:border-[#324B53] overflow-hidden center">
                        <textarea
                          type="text"
                          className="w-full h-full border-none outline-none text-[#0D0D0D] dark:text-[#FAFAFA] placeholder:text-[#757575] px-2.5 sm:px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base resize-none py-3"
                          placeholder="شماره موبایل را وارد نمایید"
                        />
                      </div>
                    </div>
                    <button className="full-center bg-[#4EDFD4] rounded-[5px] w-[125px] sm:w-[142px] h-12 sm:h-[53px] gap-2 text-[#404040] glass hover:opacity-80 text-sm sm:text-[17px]">
                      <IconSend className="scale-90 sm:scale-100" />
                      ارسال پیام
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
