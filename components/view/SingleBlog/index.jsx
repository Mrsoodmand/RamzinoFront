import LastBlogs from "components/common/LastBlogs";
import SliderBanners from "../Blogs/LastBlogsAndSwap/SliderBanners";
import Tags, { Tag } from "../Blogs/LastBlogsAndSwap/Tags";
import Swap from "../SingleCurrency/SectionDetailsAndSwap/Swap";
import Comments from "./Comments";
import HeroBlog from "./HeroBlog";
import Rating from "./Rating";
import Result from "./Result";
import VideoSection from "../Crypto/VideoSection";
import BannerProgram from "components/common/BannerProgram";

function SingleBlogPage({ data }) {
  return (
    <>
      <main className="container mt-1 sm:mt-10">
        <div className="flex gap-5 xl:gap-10">
          <article className="w-full min-w-0">
            <HeroBlog data={data?.blog} />
            <Result />
            <div
              id="main-blog"
              className="fade-in mt-4 sm:mt-5 mainBlog dark:text-[#fff] leading-8 opacity-95"
              dangerouslySetInnerHTML={{ __html: data?.blog?.long_detail }}
            />

            <div className="fade-in mt-10 sm:mt-[19px]">
              <div className="text-[#262931] dark:text-[#fafafa] mb-[13px] sm:mb-[15px] text-xs sm:text-base">
                برچسب ها :
              </div>

              <div className="center gap-[11px] flex-wrap">
                {data?.blogTags?.map((e, i) => (
                  <Tag key={i} data={e} />
                ))}
              </div>
            </div>
            {/* <Rating /> */}
          </article>
          <div className="fade-in hidden lg:block xl:w-[466px] xl:min-w-[466px] w-[370px] min-w-[370px]">
            {/* <Swap /> */}
            <div className="sticky top-28">
              <Tags data={data?.tags} />
              <SliderBanners data={data?.sideBarSlider} />
            </div>
          </div>
        </div>
      </main>
      <Comments post_id={data?.blog?.id} />
      <LastBlogs data={data?.related} />
      <VideoSection />
      <BannerProgram />
    </>
  );
}

export default SingleBlogPage;
