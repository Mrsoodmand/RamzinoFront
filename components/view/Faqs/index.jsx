import dynamic from "next/dynamic";
import Hero from "./Hero";
import List from "./List";
const BannerProgram = dynamic(() => import("components/common/BannerProgram"), {
  ssr: false,
});

function FaqsPage({ data }) {
  return (
    <>
      <Hero data={data} />
      <List faqs={data?.faq} categoryList={data?.category} />
      <BannerProgram />
    </>
  );
}

export default FaqsPage;
