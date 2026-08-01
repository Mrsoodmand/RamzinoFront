import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import ContactUs from "components/view/ContactUs";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function ContactUsPage({ pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.seo} />

      <Breadcrumb
        list={[
          {
            text: "تماس با ما",
            href: "#",
          },
        ]}
      />
      <ContactUs data={pageData?.data} />
    </MainLayout>
  );
}

export default ContactUsPage;

export const getServerSideProps = async () => {
  return {
    props: {
      pageData: await serverFetcher.get("pages/contact-us"),
    },
  };
};
