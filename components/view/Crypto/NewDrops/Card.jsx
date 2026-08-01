import Image from "next/image";
import IconList from "icons/Home/IconList.svg";
import IconShop from "icons/Home/IconShop.svg";
import IconTime from "icons/Home/IconTime.svg";
import AddIcon from "components/common/addIcon";

function Card() {
  return (
    <div className="col-span-6 bg-primary pr-5 pl-5 min-h-[143px] center-between flex-wrap gap-x-4 gap-y-5 rounded-[5px] py-4">
      <div className="center gap-[9px] lg:gap-[17px]">
        <Image
          src="/images/tests/Blum.webp"
          layout="fixed"
          width={79}
          height={79}
          alt="Name"
          className="rounded-full max-w-[38px] md:max-w-[48px] lg:max-w-[79px] object-cover"
        />
        <div>
          <div className="text-[#373A41] font-semibold text-xs sm:text-base lg:text-xl mb-1 sm:mb-2 lg:mb-3">
            بلوم
          </div>
          <div className="text-[#373A41] font-semibold text-[7px] sm:text-sm sm:gap-[9px] center">
            <AddIcon>
              <IconList className="scale-[0.65] sm:scale-90" />
            </AddIcon>
            244 مطلب
          </div>
        </div>
      </div>
      <div className="hidden lg:full-center flex-col">
        <div className="text-[#373A41] text-[7px] md:text-xs text-center mb-3 dark:font-semibold">
          زمان باقی مانده تا لیست شدن
        </div>
        <div className="full-center gap-[5px] bg-[#fff] w-[147px] h-[42px] rounded-md text-[#373A41] text-[10px] md:text-xs">
          هنوز مشخص نشده
          <AddIcon>
            <IconTime />
          </AddIcon>
        </div>
      </div>
      <button
        title="مشاهده اخبار"
        className="full-center sm:gap-[5px] bg-[#003E52] w-[74px] sm:w-[132px] h-[27px] sm:h-[42px] rounded-[4px] sm:rounded-md text-[#fff] glass hover:opacity-90 text-[7px] sm:text-xs"
      >
        <AddIcon>
          <IconShop className="[&>path]:stroke-[#fff] scale-50" />
        </AddIcon>
        <span className="translate-x-0.5 sm:translate-x-0">مشاهده اخبار</span>
      </button>
      <div className="full-center lg:hidden flex-col w-full">
        <div className="text-[#373A41] text-[7px] md:text-xs text-center mb-1.5 sm:mb-3 dark:font-semibold">
          زمان باقی مانده تا لیست شدن
        </div>
        <div className="full-center gap-0.5 sm:gap-[5px] bg-[#fff] w-[110px] sm:w-[147px] h-[32px] sm:h-[42px] rounded-[4px] sm:rounded-md text-[#373A41] text-[8px] md:text-xs">
          هنوز مشخص نشده
          <AddIcon>
            <IconTime className="scale-75 sm:scale-100" />
          </AddIcon>
        </div>
      </div>
    </div>
  );
}

export default Card;
