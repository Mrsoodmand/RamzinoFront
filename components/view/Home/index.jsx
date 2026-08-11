import Header from "./Header";
import Services from "./Services";
import FAQs from "./FAQ";
import dynamic from "next/dynamic";
import BlogsSlider from "./Blogs";

const Hottest = dynamic(() => import("./Hottest"), {
  ssr: false,
});

function Home({ blogs, crypto }) {
  return (
    <>
      <Header />
      <Hottest data={crypto?.hotCurrencies || []} />
      <Services />
      <FAQs />
      <BlogsSlider data={blogs?.blogs || []} />
    </>
  );
}

export default Home;
