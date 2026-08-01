import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const IconDate = dynamic(
  () => import("components/view/Blogs/icons/IconDate.svg"),
  { ssr: false }
);
const IconView = dynamic(
  () => import("components/view/Blogs/icons/IconView.svg"),
  { ssr: false }
);

function Card({ isSmall, data }) {
  return (
    <Link
      href={`/blogs/${data?.slug}`}
      className={classes(
        isSmall
          ? "h-[192px] sm:h-[300px] lg:h-[49%] mb-[7px] sm:mb-[11.2px]"
          : "h-[192px] sm:h-[300px] lg:h-full",
        "fade-in relative overflow-hidden w-full rounded-md sm:rounded-[10px] block group hover:opacity-85"
      )}
    >
      <Image
        src={data?.cover}
        alt={data?.title}
        layout="responsive"
        width={300}
        height={150}
        className="absolute top-0 left-0 object-cover min-w-full min-h-full group-hover:scale-110"
      />
      <div
        className={classes(
          "absolute bg-gradient-to-t from-[#08242F] to-[#08242F00] w-full h-full flex justify-end items-start flex-col",
          isSmall ? "px-3.5 sm:px-5 pb-3 sm:pb-6" : "px-4 sm:px-6 pb-3 sm:pb-8"
        )}
      >
        <div
          className={classes(
            "absolute font-semibold text-[#fff] bg-primaryDark rounded-full full-center right-3 sm:right-[22px]",
            isSmall
              ? "text-[10px] sm:text-[15px] h-[29px] sm:h-[45px] px-2 sm:px-4  top-3 sm:top-5"
              : "text-[10px] sm:text-[18px] h-[29px] sm:h-11 px-2 sm:px-4  top-3 sm:top-6"
          )}
        >
          تحلیل ارز دیجیتال
        </div>
        <div
          className={classes(
            "center -mr-2 sm:mr-0",
            isSmall ? "sm:gap-[14px]" : "sm:gap-[18px]",
            "gap-[9px]"
          )}
        >
          <div
            className={classes(
              isSmall
                ? "sm:text-[15px] gap-0 sm:gap-[9px]"
                : "gap-1 sm:gap-3 sm:text-base",
              "center text-[#fff] text-[10px]"
            )}
          >
            <IconDate
              className={classes(
                "scale-50",
                isSmall ? "sm:scale-90" : "sm:scale-100"
              )}
            />
            {new Date(data?.created_at)?.toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div
            className={classes(
              isSmall
                ? "sm:text-[15px] gap-0 sm:gap-[9px]"
                : "gap-0 sm:gap-3 sm:text-base",
              "center text-[#fff] text-[10px]"
            )}
          >
            <IconView
              className={classes(
                "scale-50",
                isSmall ? "sm:scale-90" : "sm:scale-100"
              )}
            />
            {data?.view || "0"} بازید
          </div>
        </div>
        <div
          className={classes(
            isSmall
              ? "text-xs sm:text-[19px] mt-1 sm:mt-3"
              : "text-xs sm:text-[26px] mt-1 sm:mt-5",
            "font-semibold text-[#fff]"
          )}
        >
          {data?.name}
        </div>
      </div>
    </Link>
  );
}

export default Card;
