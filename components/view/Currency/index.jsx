import TableList from "../Crypto/TableList";
import Header from "./Header";
import SliderBest from "./SliderBest";
import dynamic from "next/dynamic";
const BannerProgram = dynamic(() => import("components/common/BannerProgram"), {
  ssr: false,
});
const VideoSection = dynamic(
  () => import("components/view/Crypto/VideoSection"),
  {
    ssr: false,
  }
);
const LastBlogs = dynamic(() => import("components/common/LastBlogs"), {
  ssr: false,
});
const Faqs = dynamic(() => import("components/common/Faqs"), {
  ssr: false,
});

function CurrencyPage({ pageData }) {
  return (
    <>
      <Header data={pageData} />
      <SliderBest data={pageData} />
      <TableList />
      <VideoSection />
      <Faqs data={pageData?.faq} />
      <LastBlogs data={pageData?.recentBlogs} title="مقالات مرتبط" />
      <BannerProgram />
    </>
  );
}

export default CurrencyPage;
