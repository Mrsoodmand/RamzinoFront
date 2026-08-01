import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const IconLocation = dynamic(
  () => import("components/view/ContactUs/icons/IconLocation.svg"),
  { ssr: false }
);

function MapSection({ data }) {
  return (
    <section className="max-w-[1436px] w-full mx-auto sm:px-10">
      <div className="bg-white border-opacity-0 sm:border-opacity-100 border border-solid border-[#E0E0E0] dark:border-0 px-5 py-5 sm:py-7 lg:min-h-[475px] full-center flex-col gap-[27px]">
        <div className="flex items-start justify-between sm:items-center w-full flex-col sm:flex-row gap-y-[18px]">
          <h3 className="text-[#2E2E2E] dark:text-[#fff] font-semibold text-[18px] sm:text-[23px]">
            {data?.title}
          </h3>
          <div className="text-xs sm:text-base gap-1 sm:gap-3 center text-[#2E2E2E] dark:text-[#fff] font-semibold -mr-2">
            <IconLocation className="dark:[&>*]:stroke-[#E3E2E1] scale-75 sm:scale-100" />
            {data?.address}
          </div>
        </div>
        <div className="center-between gap-3 lg:gap-5 xl:gap-10 relative">
          <div className="hidden md:block w-[350px] lg:w-[458px] min-w-[350px] lg:min-w-[458px]">
            <Image
              src="/images/map-shape.png"
              alt="آدرس  دفتر رمزینو"
              layout="fixed"
              width={458}
              height={346}
              quality={100}
            />
          </div>
          <Link
            href={`https://www.google.com/maps/@?api=1&map_action=map&center=${data?.location?.lat},${data?.location?.lng}`}
            className="w-full hover:opacity-80 h-full"
            target="_blank"
          >
            <Image
              src="/images/map.png"
              layout="responsive"
              width={320}
              height={200}
              alt="آدرس رمزینو در نقشه"
              className="max-h-[351px] object-cover h-full min-h-[265px] lg:min-h-[347px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
