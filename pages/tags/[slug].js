import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import BlogCard from "components/common/BlogCard";
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
        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {data?.blogs?.map((e, i) => (
            <BlogCard key={e?.id ?? i} data={e} index={i} />
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
