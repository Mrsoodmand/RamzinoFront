import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import CurrencyPage from "components/view/Currency";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function Currency({ pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.data?.seo} />

      <Breadcrumb
        list={[
          {
            text: "همه ارز های دیجیتال",
            href: "#",
          },
        ]}
      />
      <CurrencyPage pageData={pageData?.data?.data} />
    </MainLayout>
  );
}

export default Currency;

export const getStaticProps = async () => {
  return {
    props: {
      pageData: await serverFetcher.get("crypto/page"),
    },
    revalidate: 5000,
  };
};
