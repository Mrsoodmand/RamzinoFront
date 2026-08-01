import IconUserEdit from "icons/Home/IconUserEdit.svg";
import IconEhraz from "icons/Home/IconEhraz.svg";
import IconMony from "icons/Home/IconMony.svg";
import IconShopSmall from "icons/Home/IconShopSmall.svg";
import classes from "hooks/classes";

const steeps = [
  {
    icon: (isActive) => (
      <IconUserEdit
        className={classes(
          "scale-90 sm:scale-100 ",
          isActive ? "" : "dark:[&>*]:stroke-[#fff]"
        )}
      />
    ),
    title: "ثبت نام در رمزینو در کمتر از ۵ دقیقه",
    des: "با شماره موبایل و اطلاعات پایه، سریع حساب کاربری بسازید.",
  },
  {
    icon: (isActive) => (
      <IconEhraz
        className={classes(
          "scale-90 sm:scale-100 ",
          isActive ? "" : "dark:[&>*]:stroke-[#fff]"
        )}
      />
    ),
    title: "انتخاب سرویس مورد نیاز شما",
    des: "خرید و فروش ارز، لینک پرداخت اختصاصی یا سرویس های ویژه را انتخاب کنید.",
  },
  {
    icon: (isActive) => (
      <IconShopSmall
        className={classes(
          "scale-90 sm:scale-100 ",
          isActive ? "" : "dark:[&>*]:stroke-[#fff]"
        )}
      />
    ),
    title: "شارژ کیف پول یا ثبت سفارش",
    des: "موجودی را شارژ کنید یا مستقیم سفارش خرید و فروش را ثبت کنید.",
  },
  {
    icon: (isActive) => (
      <IconMony
        className={classes(
          "scale-90 sm:scale-100 ",
          isActive ? "" : "dark:[&>*]:stroke-[#fff]"
        )}
      />
    ),
    title: "دریافت نتیجه و تسویه سریع",
    des: "پرداخت انجام میشود و نتیجه سفارش یا تسویه حساب را سریع دریافت میکنید.",
  },
];

export default steeps;
