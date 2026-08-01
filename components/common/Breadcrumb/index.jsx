import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";

const IconLeft = dynamic(() => import("icons/Layout/IconLeft.svg"), {
  ssr: false,
});

function Breadcrumb({ list }) {
  return (
    <div className="center gap-1 sm:gap-1.5 container mt-3 md:mt-10 overflow-auto none-scroll fade-in">
      <Link
        href="/"
        className="min-w-fit center gap-1.5 sm:gap-[9px] text-[#43464C] dark:text-[#CDCDCD] font-semibold text-xs sm:text-sm  "
      >
        رمزینو
      </Link>
      {list?.map((e, i) => (
        <Fragment key={i}>
          <IconLeft className="scale-75 sm:scale-90 md:scale-100 min-w-fit dark:[&>path]:stroke-[#FAFAFA]" />
          {i == list.length - 1 ? (
            <span
              className={classes(
                i === list?.length - 1 ? "" : "",
                "min-w-fit text-[#43464C] dark:text-[#F2F2F2] font-semibold text-xs sm:text-sm hover:opacity-80"
              )}
            >
              {e?.text}
            </span>
          ) : (
            <Link
              href={e?.href}
              className={classes(
                i === list?.length - 1 ? "" : "",
                "min-w-fit text-[#43464C] dark:text-[#F2F2F2] font-semibold text-xs sm:text-sm hover:opacity-80"
              )}
            >
              {e?.text}
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Breadcrumb;
