import dynamic from "next/dynamic";
import BannerInstagram from "../Crypto/BannerInstagram";
import Banners from "./Banners";
import HeroSection from "./Hero";
import LastBlogs from "./LastBlogs";
import LastBlogsAndSwap from "./LastBlogsAndSwap";
const LastVideos = dynamic(() => import("./LastVideos"), { ssr: false });
const Podcasts = dynamic(() => import("./Podcasts"), { ssr: false });
const VideoSection = dynamic(() => import("../Crypto/VideoSection"), {
  ssr: false,
});
const BannerProgram = dynamic(() => import("components/common/BannerProgram"), {
  ssr: false,
});

function BlogsPage({ data }) {
  return (
    <>
      <HeroSection data={data?.slide} />
      <LastBlogs data={data?.news} />
      <Banners data={data?.banners} />
      <LastBlogsAndSwap data={data} />
      <BannerInstagram />
      {/* <LastVideos data={data?.video} /> */}
      {/* <Podcasts data={data?.podcast} /> */}
      <VideoSection />
      <BannerProgram />
    </>
  );
}

export default BlogsPage;
