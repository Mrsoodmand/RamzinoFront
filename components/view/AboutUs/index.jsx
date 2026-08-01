import BannerProgram from "components/common/BannerProgram";
import WyMe from "../Crypto/WyMe";
import AboutMe from "./AboutMe";
import HeroSection from "./Hero";
import WySuccess from "./WySuccess";

function AboutUs({ data }) {
  return (
    <>
      <HeroSection data={data?.sectionNumOne} />
      <AboutMe data={data?.sectionNumTwo} />
      <WyMe data={data?.sectionNumThree} />
      <WySuccess data={data?.sectionNumFour} />
      <BannerProgram />
    </>
  );
}

export default AboutUs;
