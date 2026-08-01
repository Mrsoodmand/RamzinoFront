function List() {
  return (
    <section className="container mt-8 sm:mt-14">
      <div className="grid grid-cols-12 gap-5">
        {[1, 2]?.map((e, i) => (
          <div
            key={i}
            className="fade-in col-span-12 2md:col-span-6 shadow-[0px_0px_74px_0px_#0000000A] bg-white rounded-[5px] px-[19px] sm:px-[21px] py-6 sm:py-7"
          >
            <h3 className="text-title dark:font-medium font-semibold text-[15px] sm:text-[21px] mb-[14px] sm:mb-[19px]">
              سطوح کارمزد معاملاتی در پایه بازار تومان
            </h3>
            <ul>
              {[1, 2, 3, 4, 5, 6, 7]?.map((e, i) => (
                <li
                  key={i}
                  className="center-between py-5 sm:py-[23px] first:pt-0 last:border-b-0 last:pb-0 border-b sm:border-b-2 border-solid border-[#DFDFDF] dark:border-[#18333C]"
                >
                  <div>
                    <div className="text-[#171B23] dark:text-[#F5F5F5] dark:font-medium font-semibold text-sm sm:text-[18px]">
                      سطح {i + 1}
                    </div>
                    <div className="text-[#43464C] dark:text-[#CBCBCB] mt-[7px] sm:mt-[9px] text-xs sm:text-base">
                      0 تا 10 میلیون تومان
                    </div>
                  </div>
                  <div>
                    <div className="text-[#43464C] dark:text-[#CBCBCB] text-xs sm:text-base">
                      ثابت
                    </div>
                    <div className="text-[#171B23] dark:text-[#F5F5F5] dark:font-medium font-semibold sm:text-[18px] mt-[7px] sm:mt-[9px] text-sm">
                      0.35 ٪
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default List;
