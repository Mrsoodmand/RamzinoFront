import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import SingleBlogPage from "components/view/SingleBlog";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function SingleBlog({ pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.seo} />

      <Breadcrumb
        list={[
          {
            text: "بلاگ",
            href: "/blogs",
          },
          {
            text: pageData?.data?.blog?.title || "مقاله",
            href: "#",
          },
        ]}
      />
      <SingleBlogPage data={pageData?.data} />
    </MainLayout>
  );
}

export default SingleBlog;

// export const getStaticPatch = async () => {
//   const res = await serverFetcher.get("blogs");
// };

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      pageData: await serverFetcher.get(`blogs/${params?.slug}`),
    },
  };
};
