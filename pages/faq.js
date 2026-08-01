import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import FaqsPage from "components/view/Faqs";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function Faqs({ pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.seo} />

      <FaqsPage data={pageData?.data} />
    </MainLayout>
  );
}

export default Faqs;

export const getServerSideProps = async () => {
  return {
    props: {
      pageData: await serverFetcher.get("pages/faq"),
    },
  };
};
