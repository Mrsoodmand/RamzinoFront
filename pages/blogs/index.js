import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import BlogsPage from "components/view/Blogs";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function Blogs({ pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.seo} />
      <BlogsPage data={pageData?.data} />
    </MainLayout>
  );
}

export default Blogs;

export const getServerSideProps = async () => {
  return {
    props: {
      pageData: await serverFetcher.get("blogs"),
    },
  };
};
