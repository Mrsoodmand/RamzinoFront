import Faqs from "components/common/Faqs";
import BannerInstagram from "./BannerInstagram";
import Header from "./Header";
import HottestSlider from "./HottestSlider";
import NewCourrency from "./NewCourrency";
import NewDrops from "./NewDrops";
import TableList from "./TableList";
import TokensList from "./TokensList";
import dynamic from "next/dynamic";
import FAQs from "../Home/FAQ";
const BannerProgram = dynamic(() => import("components/common/BannerProgram"), {
  ssr: false,
});
const LastBlogs = dynamic(() => import("components/common/LastBlogs"), {
  ssr: false,
});
const StoryInstagram = dynamic(() => import("./StoryInstagram"), {
  ssr: false,
});
const WyMe = dynamic(() => import("./WyMe"), {
  ssr: false,
});
const VideoSection = dynamic(() => import("./VideoSection"), {
  ssr: false,
});
const Hottest = dynamic(() => import("./Hottest"), {
  ssr: false,
});
const Comments = dynamic(() => import("./Comments"), {
  ssr: false,
});

function Home() {
  return (
    <>
      <Header />
      <Hottest />
      <HottestSlider />
      <TableList />
      <NewDrops />
      <TokensList />
      <WyMe />
      <NewCourrency />
      <VideoSection />
      {/* <Comments /> */}
      <FAQs />
      <BannerInstagram />
      {/* <Faqs /> */}
      {/* <StoryInstagram /> */}
      {/* <LastBlogs /> */}
      <BannerProgram />
    </>
  );
}

export default Home;
