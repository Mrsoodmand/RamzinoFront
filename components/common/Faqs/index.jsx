import Image from "next/image";
import { useState } from "react";
import ItemFaq from "./ItemFaq";
import BannerContact from "./BannerContact";

function Faqs({ data }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="container mt-16">
      <h4 className="font-semibold text-[18px] sm:text-2xl mb-[21px] text-title  fade-in">
        سوالات متداول کاربران
      </h4>
      <div className="flex items-start justify-between flex-col-reverse lg:flex-row gap-[21px] ">
        <ul className=" fade-in w-full">
          {data?.data?.map((e, i) => (
            <ItemFaq key={i} i={i} open={open} setOpen={setOpen} data={e} />
          ))}
        </ul>
        <BannerContact image={data?.image} />
      </div>
    </section>
  );
}

export default Faqs;
