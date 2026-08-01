import classes from "hooks/classes";
import IconStar from "icons/Home/IconStar.svg";
import IconSearch from "icons/Layout/IconSearch.svg";
import IconArrowBottom from "icons/Layout/IconArrowBottom.svg";
import AddIcon from "components/common/addIcon";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const dataList = [
  {
    value: "stars",
    text: "تحت نظر",
    icon: (
      <IconStar className="[&>path]:stroke-[#373A41] dark:[&>path]:stroke-[#E3E2E1] scale-50 " />
    ),
  },
  {
    value: "toman",
    text: "پایه تومان",
  },
  {
    value: "tetter",
    text: "پایه تتر",
  },
  {
    value: "best",
    text: "جدیدترین ها",
  },
];

function Header({ filters, setFilters }) {
  const swiperRef = useRef();

  const onNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <header className="mt-10">
      <h2 className="text-[#373A41] dark:text-[#fff] font-semibold text-base sm:text-2xl mb-[18px] sm:mb-[29px]">
        قیمت ارز های دیجیتال
      </h2>
      <section className="flex items-start lg:items-center justify-between flex-col lg:flex-row gap-[18px] sm:gap-6 max-w-[100vw] overflow-auto none-scroll">
        <div className="center bg-white rounded-[5px] gap-1.5 sm:gap-2.5 h-[36px] sm:h-[57px] px-2">
          {dataList?.map((e, i) => (
            <button
              title={e?.text}
              key={i}
              className={classes(
                "text-[10px] sm:text-base font-semibold px-2 min-w-[83px] w-fit sm:min-w-[134px] full-center sm:gap-2.5 rounded-[3px] sm:rounded-[5px] text-[#373A41] h-[17px] sm:h-[41px]",
                filters?.category !== e?.value
                  ? "text-[#373A41]  hover:bg-themeColor dark:text-[#E3E2E1]"
                  : "bg-primary text-primaryText"
              )}
              onClick={() => setFilters((c) => ({ ...c, category: e?.value }))}
            >
              {e?.text}
              {e?.icon}
            </button>
          ))}
        </div>
        <div className="center bg-themeColor dark:bg-[#001F28] backdrop-blur-[56px] w-full max-w-full sm:max-w-[407px] h-[37px] sm:h-[56px] rounded-[4px] sm:rounded-lg px-2 sm:px-4 gap-2.5">
          <input
            type="text"
            placeholder="ارز مورد نظر را جستجو کنید."
            className="w-full h-full text-[#373A41] dark:text-[#CBCBCB] placeholder:text-[#373A41]  dark:placeholder:text-[#CBCBCB] font-semibold text-[10px] sm:text-sm bg-[#fff] bg-opacity-0 border-0 outline-none"
          />
          <IconSearch className="[&>path]:dark:stroke-[#CBCBCB] scale-90 sm:scale-100" />
        </div>
      </section>
      <section className="center bg-themeColor dark:bg-[#001F28] rounded-[10px] px-[7px] h-[32px] sm:h-[48px] gap-1.5 mt-[18px] sm:mt-[25px] overflow-auto none-scroll relative swiper-types-btn">
        <button
          title="بعدی"
          onClick={onNext}
          className="hidden sm:full-center absolute left-2 top-2/4 -translate-y-2/4 w-7 h-[37px] rounded-[5px] bg-[#fff] dark:bg-[#003647] z-10"
        >
          <AddIcon>
            <IconArrowBottom className="fill-title [&>*]:fill-title rotate-90" />
          </AddIcon>
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={false}
          slidesPerView={"auto"}
          spaceBetween={6}
          navigation={false}
          loop={false}
          centeredSlides={false}
          centerInsufficientSlides={false}
          centeredSlidesBounds={false}
          dir="rtl"
          speed={600}
          ref={swiperRef}
        >
          {[1, 2, 2, 3, 5, 4, 5, 5, 5, 4, 45, 5, 4, 5]?.map((e, i) => (
            <SwiperSlide key={i}>
              <button
                title={i === 0 ? "همه" : " میم کوین"}
                className={classes(
                  "min-w-[64px] sm:min-w-[131px] h-7 sm:h-[37px] rounded-[5px] text-[11px] sm:text-base",
                  filters?.type === i
                    ? "bg-[#fff] dark:bg-[#003647] text-[#171B23] dark:text-[#fff]"
                    : "opacity-80 text-[#373A41] hover:bg-[#e7e7e7] dark:hover:bg-[#0036477a] dark:text-[#FAFAFA]"
                )}
                onClick={() => setFilters((c) => ({ ...c, type: i }))}
              >
                {i === 0 ? "همه" : " میم کوین"}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </header>
  );
}

export default Header;
