import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import SingleDocPage from "components/view/Doc";
import { flatDocs, getDocBySlug } from "components/view/Doc/data";

function SingleDoc({ doc }) {
  return (
    <MainLayout>
      <Seo
        data={
          doc && {
            metaTitle: `${doc.title} | مستندات API رمزینو`,
            metaDescription: doc.description,
          }
        }
      />
      {doc ? (
        <Breadcrumb
          list={[
            { text: "مستندات API", href: "/docs" },
            { text: doc.title, href: "#" },
          ]}
        />
      ) : null}
      <SingleDocPage doc={doc} />
    </MainLayout>
  );
}

export default SingleDoc;

export const getStaticPaths = async () => {
  return {
    paths: flatDocs.map((doc) => ({ params: { slug: doc.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      doc: getDocBySlug(params?.slug) || null,
    },
  };
};
