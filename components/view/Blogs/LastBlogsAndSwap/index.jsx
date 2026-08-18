import dynamic from "next/dynamic";
import CardBlog from "../LastBlogs/CardBlog";
import Swap from "components/view/SingleCurrency/SectionDetailsAndSwap/Swap";
import Tags from "./Tags";
import SliderBanners from "./SliderBanners";

const IconView = dynamic(
  () => import("components/common/LastBlogs/IconBlog.svg"),
  { ssr: false },
);

function LastBlogsAndSwap({ data }) {
  return (
    <section className="container mt-10 sm:mt-20">
      <div className="center-between">
        <div className="text-[#0C0C0C] font-semibold tet-xl sm:text-2xl">
          آخرین مقالات
        </div>
        <button className="btn btn-accent hidden">
          مشاهده تمام مقالات
          <IconView />
        </button>
      </div>
      <div className="flex items-start gap-x-7 mt-[18px] sm:mt-[29px]">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-y-[18px] sm:gap-y-[27px] gap-x-3">
            {data?.blogs?.map((e, i) => (
              <div key={e?.id} className="col-span-12 sm:col-span-4">
                <CardBlog data={e} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fade-in full-center sm:hidden mt-[19px]">
        <button className="btn btn-accent">
          <IconView />
          مشاهده تمام مقالات
        </button>
      </div>
    </section>
  );
}

export default LastBlogsAndSwap;
