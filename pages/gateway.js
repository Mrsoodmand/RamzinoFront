import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import Gateway from "components/view/Gateway";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function GatewayPage({ blogsData, pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.seo} />
      <Gateway blogs={blogsData?.data} data={pageData?.data} />
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      blogsData: await serverFetcher.get("blogs"),
      pageData: await serverFetcher.get("pages/gateway"),
    },
  };
};

export default GatewayPage;
