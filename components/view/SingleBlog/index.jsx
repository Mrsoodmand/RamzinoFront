import LastBlogs from "components/common/LastBlogs";
import { Tag } from "../Blogs/LastBlogsAndSwap/Tags";
import Comments from "./Comments";
import HeroBlog from "./HeroBlog";
import MobileToc from "./MobileToc";
import ReadingRail from "./ReadingRail";
import ShareRow from "./ReadingRail/ShareRow";
import {
  ARTICLE_ID,
  readingMinutes,
  useHeadings,
  useReadingState,
  useSearchIndex,
} from "./reading";
import VideoSection from "../Crypto/VideoSection";
import BannerProgram from "components/common/BannerProgram";

function SingleBlogPage({ data }) {
  // Read once here so the desktop rail and the mobile sheet share a single
  // set of scroll listeners instead of running one each.
  const headings = useHeadings(data?.blog?.long_detail);
  const { activeId, progress } = useReadingState(headings);
  const blocks = useSearchIndex(data?.blog?.long_detail, headings);
  const minutes = readingMinutes(data?.blog?.long_detail);

  return (
    <>
      <main className="container mt-1 sm:mt-10">
        <div className="flex gap-5 xl:gap-10">
          <article className="w-full min-w-0">
            <HeroBlog data={data?.blog} />
            <div
              id={ARTICLE_ID}
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

            {/* Below lg the rail is off screen, so sharing lands here instead —
                at the end of the text, where a reader who has finished is the
                one most likely to pass it on. */}
            <ShareRow
              title={data?.blog?.title}
              className="fade-in mt-6 lg:hidden"
            />
          </article>

          <ReadingRail
            blog={data?.blog}
            promo={data?.sideBarSlider}
            headings={headings}
            blocks={blocks}
            activeId={activeId}
            progress={progress}
            minutes={minutes}
          />
        </div>
      </main>

      <MobileToc
        headings={headings}
        blocks={blocks}
        activeId={activeId}
        progress={progress}
        minutes={minutes}
      />

      <Comments post_id={data?.blog?.id} />
      <LastBlogs data={data?.related} title="مقالات مرتبط" />
      <VideoSection />
      <BannerProgram />
    </>
  );
}

export default SingleBlogPage;
