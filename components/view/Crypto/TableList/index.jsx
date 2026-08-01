import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import IconCourency from "icons/Home/IconCourency.svg";
import AddIcon from "components/common/addIcon";
import MobileList from "./MobileList";

function TableList() {
  const [filters, setFilters] = useState({
    category: "toman",
    search: "",
    type: 0,
  });

  return (
    <main className="container fade-in">
      <Header setFilters={setFilters} filters={filters} />
      <List />
      <MobileList />
      <div className="full-center mt-[23px] sm:mt-[29px]">
        <button
          title=" لیست 2,000 ارز دیگر"
          className="full-center gap-1.5 sm:gap-2.5 text-primaryText bg-primary w-[169px] sm:w-[206px] h-[46px] sm:h-[56px] rounded-md sm:rounded-lg glass hover:opacity-90 text-[13px] sm:text-base"
        >
          <AddIcon>
            <IconCourency className="scale-90 sm:scale-100" />
          </AddIcon>
          لیست 2,000 ارز دیگر
        </button>
      </div>
    </main>
  );
}

export default TableList;
