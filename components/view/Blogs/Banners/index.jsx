import Card from "./Card";

function Banners({ data }) {
  if (!data || data?.length < 1) return null;

  return (
    <section className="container mt-12 sm:mt-24 fade-in">
      <div className="grid grid-cols-12 gap-x-4 gap-y-7">
        <div className="col-span-12 md:col-span-6">
          <Card theme={"light"} data={data[0]} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Card
            theme={"dark"}
            image="/images/tests/matic.webp"
            data={data[1]}
          />
        </div>
      </div>
    </section>
  );
}

export default Banners;
