import Detail from "./Detail";
import Swap from "./Swap";

function SectionDetailsAndSwap({ currencyDetail }) {
  return (
    <main className="container mt-10">
      <div className="grid grid-cols-12 gap-x-5 xl:gap-x-14 gap-y-[45px]">
        <section className="col-span-12 2md:col-span-7 fade-in">
          <Detail currencyDetail={currencyDetail} />
        </section>
        <section className="col-span-12 2md:col-span-5 fade-in">
          <Swap />
        </section>
      </div>
    </main>
  );
}

export default SectionDetailsAndSwap;
