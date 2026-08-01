import dynamic from "next/dynamic";

const IconEmail = dynamic(
  () => import("/components/view/ContactUs/icons/IconEmail.svg"),
  {
    ssr: false,
  }
);
const IconMap = dynamic(
  () => import("/components/view/ContactUs/icons/IconMap.svg"),
  {
    ssr: false,
  }
);
const IconPhone = dynamic(
  () => import("/components/view/ContactUs/icons/IconPhone.svg"),
  {
    ssr: false,
  }
);

export const dataCards = [
  {
    icon: <IconEmail className="dark:[&>*]:stroke-[#6CE4DB]" />,
    title: "Soroushnorozyui@gmail.com",
    key: "آدرس ایمیل",
    value: "ارسال ایمیل",
  },
  {
    icon: <IconMap className="dark:[&>*]:stroke-[#6CE4DB]" />,
    title: "مشهد ,  خیابان میردامادر , نرسیده به کوچه اول",
    key: "آدرس دفتر",
    value: "مشاهده روی نقشه",
  },
  {
    icon: <IconPhone className="dark:[&>*]:stroke-[#6CE4DB]" />,
    title: "021-5465464654",
    key: "شماره تماس",
    value: "تماس با رمزینو",
  },
];
