import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const IconTelegram = dynamic(
  () => import("components/view/SingleCurrency/icons/IconTelegram.svg"),
  { ssr: false }
);
const IconTwitter = dynamic(
  () => import("components/view/SingleCurrency/icons/IconTwitter.svg"),
  { ssr: false }
);
const IconInstagram = dynamic(
  () => import("components/view/SingleCurrency/icons/IconInstagram.svg"),
  { ssr: false }
);

export const dataDetail = (data) => [
  {
    key: "لوگو",
    value: (
      <Image
        src={data?.logo || "/images/tests/eth 1.png"}
        alt={data?.nameEn}
        layout="fixed"
        width={39}
        height={39}
        className="max-w-6 sm:max-w-[39px]"
      />
    ),
  },
  {
    key: "اسم فارسی",
    value: data?.nameFa,
  },
  {
    key: "اسم انگلیسی",
    value: data?.nameEn,
  },
  {
    key: "نماد",
    value: data?.nameEn,
  },
  {
    key: "لینک وب سایت",
    value: data?.websiteLink,
  },
  {
    key: "شبکه های اجتماعی",
    value: (
      <div className="center gap-1 sm:gap-2.5">
        <Link
          title="مشاهده"
          aria-label="مشاهده"
          href="#"
          className="hover:opacity-80"
        >
          <IconTelegram className="dark:[&>path]:stroke-[#f5f5f5] scale-75 sm:scale-100" />
        </Link>
        <Link
          title="مشاهده"
          aria-label="مشاهده"
          href="#"
          className="hover:opacity-80"
        >
          <IconTwitter className="dark:[&>path]:stroke-[#ccc] scale-75 sm:scale-100" />
        </Link>
        <Link
          title="مشاهده"
          aria-label="مشاهده"
          href="#"
          className="hover:opacity-80"
        >
          <IconInstagram className="dark:[&>path]:stroke-[#f5f5f5] scale-75 sm:scale-100" />
        </Link>
      </div>
    ),
  },
];

export const dataTableDetail = [
  {
    key: "ارزش بازار:",
    value: "$1.24T",
  },
  {
    key: "سهم از بازار:",
    value: "56.6%",
  },
  {
    key: "رتبه در بازار:",
    value: "#1",
  },
  {
    key: "قیمت :",
    value: "$62,540",
  },
  {
    key: "حجم معاملات روزانه:",
    value: "$15.7B",
  },
  {
    key: "پایین/بالاترین:",
    value: "$73,104 - $0.0564",
  },
  {
    key: "تغییرات 1h:",
    value: <span className="text-[#DD4B4B]">-36.8 %</span>,
    color: "#D42424",
  },
  {
    key: "تغییرات 24h:",
    value: <span className="text-[#DD4B4B]">-36.8 %</span>,
    color: "#D42424",
  },
  {
    key: "تغییرات 1w:",
    value: <span className="text-[#63D772]">-36.8 %</span>,
    color: "#45BD54",
  },
  {
    key: "تغییرات 3m:",
    value: <span className="text-[#63D772]">-36.8 %</span>,
    color: "#45BD54",
  },
];
