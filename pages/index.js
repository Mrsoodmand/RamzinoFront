import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import Home from "components/view/Home";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function HomePage({ blogsData, cryptoData }) {
  return (
    <MainLayout>
      <Seo data={cryptoData?.data?.data?.seo} />
      <Home blogs={blogsData?.data} crypto={cryptoData?.data?.data} />
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      blogsData: await serverFetcher.get("blogs"),
      cryptoData: await serverFetcher.get("crypto/page"),
    },
  };
};

export default HomePage;
