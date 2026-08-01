import Head from "next/head";

function Seo({ data }) {
  if (!data?.metaTitle) return null;
  return (
    <Head>
      <title>{data.metaTitle}</title>
      <meta
        name="description"
        property="description"
        content={data.metaDescription}
      />
    </Head>
  );
}

export default Seo;
