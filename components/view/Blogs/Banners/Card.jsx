import classes from "hooks/classes";
import Image from "next/image";
import Link from "next/link";

function Card({ theme, image = "/images/tests/usdt.webp", data }) {
  return (
    <div
      className={classes(
        theme === "dark" ? "bg-primaryDark" : "bg-primary",
        "w-full h-[94px] 2md:h-[150px] rounded-md 2md:rounded-[10px] center-between pr-6 pl-9 2md:pl-[52px]",
      )}
    >
      <div>
        <div
          className={classes(
            "text-base 2md:text-[25px] font-semibold mb-3.5 2md:mb-[18px]",
            theme === "dark" ? "text-[#fff]" : "text-[#0C0C0C]",
          )}
        >
          {data?.title}
        </div>
        <Link
          href="https://panel.ramzino.me/user/login"
          className="full-center bg-[#fff] rounded-[4px] w-[82px] 2md:w-[127px] h-[30px] 2md:h-[47px] hover:opacity-85 glass text-[8px] 2md:text-base"
        >
          ورود و ثبت نام
        </Link>
      </div>
      <Image
        src={data?.image}
        alt="خرید و فروش همسترت با من"
        layout="fixed"
        width={109}
        height={165}
        className="scale-[1.3] translate-y-[2%] max-w-[70px] 2md:max-w-[109px]"
      />
    </div>
  );
}

export default Card;
