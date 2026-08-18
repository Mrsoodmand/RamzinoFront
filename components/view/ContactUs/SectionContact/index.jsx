import Link from "next/link";
import { dataCards } from "./data";
import Image from "next/image";

function SectionContact({ data }) {
  return (
    <section className="container mt-6 sm:mt-9">
      <div className="grid grid-cols-12 gap-[15px] sm:gap-3 md:gap-2 xl:gap-[21px]">
        {data?.map((e, i) => (
          <div
            key={i}
            className="fade-in col-span-12 sm:col-span-6 lg:col-span-4 shadow-[0px_0px_76.35px_0px_#0000000A] bg-white rounded-md sm:rounded-[5px] full-center flex-col h-[296px] md:h-[362px] last:col-span-12 last:lg:col-span-4 border border-solid border-[#E0E0E0] dark:border-opacity-0"
          >
            <div className="full-center w-[146px] md:w-[182px] h-[146px] md:h-[182px] rounded-full relative">
              <div className="dark:hidden absolute pointer-events-none select-none">
                <Image
                  src="/images/border-contact.png"
                  alt={e?.title}
                  layout="fixed"
                  width={182}
                  height={182}
                  className="animate-pulse"
                />
              </div>
              <div className="hidden dark:block absolute pointer-events-none select-none">
                <Image
                  src="/images/border-contact.png"
                  alt={e?.title}
                  layout="fixed"
                  width={182}
                  height={182}
                  className="animate-pulse"
                />
              </div>
              <div className="full-center w-[107px] md:w-[131px] h-[107px] md:h-[131px] rounded-full">
                <Image
                  layout="fixed"
                  width={76}
                  height={76}
                  alt={e?.altImg}
                  src={e?.img}
                />
              </div>
            </div>
            <div className="center-between my-[22px] md:my-[27px] w-full px-7 sm:px-4 xl:px-8">
              <div className="text-[#292929] dark:text-[#FAFAFA] text-[15px] sm:text-[17px] md:text-[18px]">
                {e?.title}
              </div>
              <Link
                href={e?.buttonLink}
                className="btn btn-accent text-center"
              >
                {e?.buttonName}
              </Link>
            </div>
            <div className="text-[#2E2E2E] dark:text-[#DFDFDF] font-medium text-[13px] md:text-base text-center">
              {e?.value?.join(" - ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionContact;
