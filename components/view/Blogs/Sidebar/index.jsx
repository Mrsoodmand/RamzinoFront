import Link from "next/link";
import { Tag } from "../LastBlogsAndSwap/Tags";
import Categories from "./Categories";
import LatestNews from "./LatestNews";

const LOGIN_URL = "https://panel.ramzino.me/user/login";

function Sidebar({ news, categories, activeCategory, promo, tags }) {
  return (
    <aside className="flex w-full flex-col gap-3.5 sm:gap-5 lg:sticky lg:top-28">
      <LatestNews items={news} />
      <Categories items={categories} active={activeCategory} />

      <section className="rounded-[5px] bg-primary px-5 pb-6 pt-[22px] shadow-[0px_0px_75px_0px_#0000000B]">
        <h2 className="text-[18px] font-semibold leading-[1.45] text-primaryText">
          {promo?.title || "خرید و فروش ارز تون"}
        </h2>
        <p className="mb-[18px] mt-2 text-[13px] leading-[1.8] text-primaryText opacity-90">
          {promo?.detail || "بهترین و سریع‌ترین راه خرید و فروش."}
        </p>
        <Link
          href={LOGIN_URL}
          className="inline-flex h-11 items-center rounded-md bg-white px-[22px] text-[13px] font-semibold text-title transition-transform duration-300 hover:-translate-y-0.5"
        >
          ورود و ثبت نام
        </Link>
      </section>

      {tags?.length > 0 && (
        <section
          aria-labelledby="blogs-tags"
          className="rounded-[5px] bg-white px-[18px] pb-5 pt-[18px] shadow-[0px_0px_75px_0px_#0000000B]"
        >
          <h2 id="blogs-tags" className="mb-3.5 text-base font-semibold text-title">
            برچسب‌های محبوب
          </h2>
          <div className="grid grid-cols-12 gap-[17px]">
            {tags.map((tag) => (
              <Tag key={tag?.id} data={tag} />
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}

export default Sidebar;
