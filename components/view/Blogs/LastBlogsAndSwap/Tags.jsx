import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const IconBlog = dynamic(
  () => import("components/common/LastBlogs/IconBlog.svg"),
  { ssr: false },
);

export const Tag = ({ data }) => (
  <Link
    href={`/currency/${data?.slug}`}
    className="bg-white rounded-[10px] col-span-6 center gap-2.5 h-[61px] sm:h-[76px] px-7 hover:opacity-80 max-w-[48%] sm:max-w-none"
  >
    <Image
      src={data?.cover}
      alt={data?.name}
      layout="fixed"
      width={45}
      height={45}
      className="rounded-full max-w-[35px] xl:max-w-[45px]"
    />
    <div>
      <div className="text-[#373A41] dark:text-[#FAFAFA] font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">
        #{data?.name}
      </div>
      <div className="center gap-1 text-[10px] sm:text-xs xl:text-sm text-[#373A41] dark:text-[#FAFAFA]">
        {data?.slug}
      </div>
    </div>
  </Link>
);

function Tags({ data }) {
  return (
    <section className="">
      <div className="text-[#373A41] dark:text-[#F5F5F5] font-semibold text-xl mb-[19px]">
        محبوبترین برچسب ها
      </div>
      <div className="grid grid-cols-12 gap-[17px]">
        {data?.map((e) => (
          <Tag key={e?.id} data={e} />
        ))}
      </div>
    </section>
  );
}

export default Tags;
