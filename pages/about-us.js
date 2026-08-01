import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import AboutUs from "components/view/AboutUs";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function AboutUsPage({ pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.seo} />

      <Breadcrumb
        list={[
          {
            text: "درباره ما",
            href: "#",
          },
        ]}
      />
      <AboutUs data={pageData?.data} />
    </MainLayout>
  );
}

export default AboutUsPage;

export const getServerSideProps = async () => {
  return {
    props: {
      pageData: await serverFetcher.get("pages/about-us"),
    },
  };
};
