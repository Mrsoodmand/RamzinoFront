import SliderBanners from "../../Blogs/LastBlogsAndSwap/SliderBanners";
import ShareRow from "./ShareRow";
import TableOfContents from "./TableOfContents";

function ReadingRail({
  blog,
  promo,
  headings,
  blocks,
  activeId,
  progress,
  minutes,
}) {
  return (
    <aside className="fade-in hidden w-[360px] min-w-[360px] lg:block">
      <div className="sticky top-28 flex flex-col gap-3.5 sm:gap-5">
        <TableOfContents
          headings={headings}
          blocks={blocks}
          activeId={activeId}
          progress={progress}
          minutes={minutes}
        />
        <ShareRow title={blog?.title} />
        <SliderBanners data={promo} className="" />
      </div>
    </aside>
  );
}

export default ReadingRail;
