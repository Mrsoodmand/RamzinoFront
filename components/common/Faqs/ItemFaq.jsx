import classes from "hooks/classes";
import IconNext from "icons/Home/IconNext.svg";
import AddIcon from "../addIcon";

function ItemFaq({ open, setOpen, i, data }) {
  return (
    <li className="border border-solid border-[#D9D9D9] dark:border-[#0F3F4E] rounded-[3px] sm:rounded-[5px] mb-2.5 sm:mb-[14px] w-full">
      <button
        title={data?.question}
        onClick={() => setOpen((c) => (c === i ? null : i))}
        className={classes(
          "flex items-start justify-between w-full pl-3 sm:pl-5 pr-4 py-[17px] sm:py-[28px] rounded-[5px]",
          i === open ? "" : "hover:bg-[#f5f5f5] dark:hover:bg-[#003e527a]"
        )}
      >
        <div
          className={classes(
            "text-[15px] sm:text-[18px] md:text-xl text-start dark:text-[#fff]",
            open === i
              ? "text-[#003E52] font-semibold"
              : "text-primaryText  font-medium"
          )}
        >
          {data?.question}
        </div>
        <AddIcon>
          <IconNext
            className={classes(
              "[&>path]:stroke-title",
              open === i ? "-rotate-90" : "rotate-90"
            )}
          />
        </AddIcon>
      </button>
      <p
        className={classes(
          "text-primaryText dark:text-[#DFDFDF] text-sm sm:text-base md:text-[19px] overflow-hidden block px-3 sm:px-5 ",
          open === i ? " max-h-screen pb-[17px] sm:pb-[28px]" : "max-h-0"
        )}
      >
        {data?.answer}
      </p>
    </li>
  );
}

export default ItemFaq;
