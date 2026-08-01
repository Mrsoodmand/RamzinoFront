import Card from "./Card";

function HeroSection({ data }) {
  if (!data) return null;
  if (data?.length < 3) return null;

  return (
    <header className="container mt-10">
      <div className="grid grid-cols-12 lg:h-[596px] gap-y-[7px] gap-x-2.5">
        <div className="col-span-12 lg:col-span-7">
          <Card data={data[0]} />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Card isSmall image="/images/tests/test-blog2.jfif" data={data[1]} />
          <Card isSmall data={data[2]} />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
