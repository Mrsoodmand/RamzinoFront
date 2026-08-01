import dynamic from "next/dynamic";

const IconStar = dynamic(() => import("icons/Blog/IconStar.svg"), {
  ssr: false,
});

function Rating() {
  return (
    <div className="w-full bg-white rounded-[10px] full-center flex-col py-7 min-h-[206px] gap-[22px] mt-[19px]">
      <div className="text-[#43464C] dark:text-[#fff] text-xl font-semibold">
        ثبت امتیاز به مطلب
      </div>
      <div className="text-[#52555A] dark:text-[#E3E2E1] text-sm font-semibold">
        امتیاز خود به این مطلب را ثبت کنید
      </div>

      <div className="flex items-start gap-3">
        <button className="full-center w-[62px] group text-[#6D6F74] dark:text-[#EDEDED] font-semibold text-sm flex-col gap-1.5">
          <IconStar className="group-hover:[&>*]:fill-[#ffce2d] group-hover:[&>*]:stroke-[#ffce2d] [&>*]:transition-all dark:[&>path]:stroke-[#FAFAFA]" />
          خیلی خوب
        </button>
        <button className="full-center w-[62px] group">
          <IconStar className="group-hover:[&>*]:fill-[#ffce2d] group-hover:[&>*]:stroke-[#ffce2d] [&>*]:transition-all dark:[&>path]:stroke-[#FAFAFA]" />
        </button>
        <button className="full-center w-[62px] group">
          <IconStar className="group-hover:[&>*]:fill-[#ffce2d] group-hover:[&>*]:stroke-[#ffce2d] [&>*]:transition-all dark:[&>path]:stroke-[#FAFAFA]" />
        </button>
        <button className="full-center w-[62px] group">
          <IconStar className="group-hover:[&>*]:fill-[#ffce2d] group-hover:[&>*]:stroke-[#ffce2d] [&>*]:transition-all dark:[&>path]:stroke-[#FAFAFA]" />
        </button>
        <button className="full-center w-[62px] group text-[#6D6F74] dark:text-[#EDEDED] font-semibold text-sm flex-col gap-1.5">
          <IconStar className="group-hover:[&>*]:fill-[#ffce2d] group-hover:[&>*]:stroke-[#ffce2d] [&>*]:transition-all dark:[&>path]:stroke-[#FAFAFA]" />
          خیلی بد
        </button>
      </div>
    </div>
  );
}

export default Rating;
