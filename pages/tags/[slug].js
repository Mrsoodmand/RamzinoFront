import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import CardBlog from "components/view/Blogs/LastBlogs/CardBlog";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function TagPage({ pageData }) {
  const data = pageData?.data?.data;

  return (
    <MainLayout>
      <Seo data={data?.seo} />
      <Breadcrumb
        list={[
          { text: "بلاگ", href: "/blogs" },
          { text: `برچسب: ${data?.tag?.name}`, href: "#" },
        ]}
      />
      <main className="container mt-6 sm:mt-10">
        <h1 className="text-[#262931] dark:text-[#fff] font-semibold text-xl sm:text-2xl mb-6 sm:mb-10">
          مقالات با برچسب #{data?.tag?.name}
        </h1>
        <div className="grid grid-cols-12 gap-y-[18px] sm:gap-y-[27px] gap-x-3">
          {data?.blogs?.map((e) => (
            <div key={e?.id} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <CardBlog data={e} />
            </div>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}

export default TagPage;

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      pageData: await serverFetcher.get(`blogs/tag/${params?.slug}`),
    },
  };
};
