import { flatDocs } from "components/view/Doc/data";

export default function DocsIndex() {
  return null;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: `/docs/${flatDocs[0].slug}`,
      permanent: false,
    },
  };
};
