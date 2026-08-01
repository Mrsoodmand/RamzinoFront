import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const IconHots = dynamic(
  () => import("components/view/Currency/icons/IconHots.svg"),
  { ssr: false }
);
const IconLows = dynamic(
  () => import("components/view/Currency/icons/IconLows.svg"),
  { ssr: false }
);
const IconHeight = dynamic(
  () => import("components/view/Currency/icons/IconHeight.svg"),
  { ssr: false }
);

const heads = [
  {
    title: "محبوبترین ها",
    icon: <IconHots className="scale-90 sm:scale-100" />,
  },
  {
    title: "پرسودترین",
    icon: <IconLows className="scale-90 sm:scale-100" />,
  },
  {
    title: "پر ضررترین",
    icon: <IconHeight className="scale-90 sm:scale-100" />,
  },
];

function Card({ index, data }) {
  return (
    <div className="w-full bg-white shadow-[0px_0px_75.05px_0px_#0000000A] px-[11px] sm:px-4 py-3 sm:py-5 rounded-[5px]">
      <div className="center gap-1.5 sm:gap-[11px] text-[#373A41] dark:text-[#FAFAFA] font-semibold text-xs sm:text-[18px] mb-[18px] sm:mb-[29px]">
        {heads[index]?.icon}
        {heads[index]?.title}
      </div>
      <ul>
        {data?.map((e, i) => (
          <li key={i} className="mb-[17px] sm:mb-6 last:mb-0">
            <Link
              href={`/currency/${e?.slug}`}
              className="center-between hover:opacity-80"
              title="مشاهده"
              aria-label="مشاهده"
            >
              <div className="center text-[#373A41] dark:text-[#FAFAFA] font-semibold gap-1.5 sm:gap-2.5 text-[11px] sm:text-base">
                <Image
                  src={e?.cover || "/images/tests/Layer x0020 1.webp"}
                  layout="fixed"
                  width={34}
                  height={34}
                  alt={e?.nameEn}
                  className="max-w-6 sm:max-w-[34px]"
                />
                {e?.nameEn}
              </div>
              <div className="text-[#373A41] dark:text-[#FAFAFA] text-[10px] sm:text-sm">
                ${Number(e?.sellPrice)?.toLocaleString()}
              </div>
              <div className="text-[#373A41] dark:text-[#FAFAFA] text-[10px] sm:text-sm">
                {" "}
                {Number(e?.rialPrice)?.toLocaleString()} ت
              </div>
              <div
                className="text-[10px] sm:text-sm"
                dir="ltr"
                style={{
                  color: index !== 2 ? "#45BD54" : "#DC0000",
                }}
              >
                {" "}
                +{e?.changePercentage || 0}%
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
