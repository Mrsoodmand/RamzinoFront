import Breadcrumb from "components/common/Breadcrumb";
import Hero from "./Hero";
import TableDetails from "./CardsDetails";
import SectionDetailsAndSwap from "./SectionDetailsAndSwap";
import Chart from "./Chart";
import Comments from "./Comments";
import dynamic from "next/dynamic";
const BannerProgram = dynamic(() => import("components/common/BannerProgram"), {
  ssr: false,
});
const LastBlogs = dynamic(() => import("components/common/LastBlogs"), {
  ssr: false,
});
const Faqs = dynamic(() => import("components/common/Faqs"), {
  ssr: false,
});
const VideoSection = dynamic(
  () => import("components/view/Crypto/VideoSection"),
  {
    ssr: false,
  }
);
const BannerInstagram = dynamic(() =>
  import("components/view/Crypto/BannerInstagram")
);

function SingleCurrencyPage({ data }) {
  return (
    <>
      <Breadcrumb
        list={[
          {
            href: "#",
            text: "ارز دیجیتال اتریوم",
          },
        ]}
      />
      <Hero data={data?.single} />
      <TableDetails data={data?.single} />
      <SectionDetailsAndSwap currencyDetail={data?.currencyDetail} />
      <Chart />
      <BannerInstagram />
      <Comments />
      <VideoSection />
      <div className="h-[50px] sm:h-[109px]"></div>

      <Faqs data={{ data: data?.faq }} />
      <LastBlogs />
      <BannerProgram />
    </>
  );
}

export default SingleCurrencyPage;
