import dynamic from "next/dynamic";
import CardBlog from "./CardBlog";

const IconView = dynamic(
  () => import("components/common/LastBlogs/IconBlog.svg"),
  { ssr: false }
);

function LastBlogs({ data }) {
  return (
    <section className="container mt-5 sm:mt-11 fade-in">
      <div className="text-title font-semibold text-xl sm:text-2xl mb-[18px] sm:mb-5">
        آخرین اخبار
      </div>
      <div className="grid grid-cols-12 gap-x-[13px] gap-y-5 sm:gap-y-6">
        {data?.map((e, i) => (
          <CardBlog data={e} key={i} />
        ))}
      </div>
      <div className="full-center sm:hidden mt-[19px]">
        <button className="full-center glass hover:opacity-80 text-[#404040] bg-primary rounded-lg text-base gap-2.5 w-[206px] h-[56px]">
          <IconView />
          مشاهده همه خبر ها
        </button>
      </div>
    </section>
  );
}

export default LastBlogs;
