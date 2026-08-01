import AddIcon from "components/common/addIcon";
import steeps from "./data";
import classes from "hooks/classes";
import { useState } from "react";
import Image from "next/image";

function VideoSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white min-h-[481px] sm:min-h-[517px] w-full py-7 sm:py-[81px] mt-36">
      <div className="mx-auto w-full max-w-[1318px] px-5  fade-in">
        <h3 className="text-title text-[19px] sm:text-[28px] font-semibold mb-[18px] sm:mb-[41px]">
          چطور ارز دیجیتال بخریم؟
        </h3>
        <article className="grid grid-cols-12 gap-y-[18px]">
          <ul className="col-span-12 lg:col-span-6 relative px-5 order-last lg:order-first">
            <li className="absolute bg-[#EDEDED] w-1 rounded-lg h-full top-0 right-0">
              <div
                className={`bg-primary w-full block`}
                style={{
                  height:
                    open === steeps?.length - 1
                      ? "33%"
                      : `${120 / steeps?.length}%`,
                  transform: `translateY(${open * 70}%)`,
                }}
              ></div>
            </li>
            {steeps?.map((e, i) => (
              <li key={i} className="mb-[7px] sm:mb-[17px]">
                <button
                  title={e?.title}
                  onClick={() => setOpen((c) => (c === i ? null : i))}
                  className={classes(
                    "center text-title text-[18px] sm:text-[22px] gap-[14px] hover:opacity-80 text-start",
                    i === open ? "font-semibold" : "font-medium "
                  )}
                >
                  <span
                    className={classes(
                      "rounded-[4px] sm:rounded-[5px] w-[38px] sm:w-[42px] h-[38px] sm:h-[42px] full-center",
                      open === i
                        ? "bg-primary"
                        : "dark:bg-[#032934] dark:shadow-[0px_0px_74px_0px_#00000005]"
                    )}
                  >
                    <AddIcon>{e?.icon(i === open)}</AddIcon>
                  </span>
                  {e?.title}
                </button>
                <div
                  className={classes(
                    "text-xs sm:text-sm font-normal text-primaryText dark:text-[#EDEDED] pr-14 overflow-hidden",
                    i === open ? "mt-0 sm:mt-[11px] max-h-screen" : "max-h-0"
                  )}
                >
                  {e?.des}
                </div>
              </li>
            ))}
          </ul>
          <div className="col-span-12 lg:col-span-6 center lg:center-end order-first lg:order-last">
            <Image
              src="/images/tests/Frame 1261153580.webp"
              alt="TITLE_VIDEO"
              layout="fixed"
              width={584}
              height={292}
              className="rounded-[5px]"
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default VideoSection;
