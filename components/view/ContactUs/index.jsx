import BannerProgram from "components/common/BannerProgram";
import MainContact from "./MainContact";
import MapSection from "./MapSection";
import SectionContact from "./SectionContact";

function ContactUs({ data }) {
  return (
    <>
      <SectionContact data={data?.sectionNumOne} />
      <MainContact />
      {/* <MapSection data={data?.sectionNumThree} /> */}
      <BannerProgram />
    </>
  );
}

export default ContactUs;
