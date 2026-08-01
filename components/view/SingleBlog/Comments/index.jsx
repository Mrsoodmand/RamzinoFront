import dynamic from "next/dynamic";
import Form from "./Form";
import Image from "next/image";
import useSWR from "swr";
import useFetcher from "hooks/useFetcher";
import { useEffect, useState } from "react";

const IconReplay = dynamic(() => import("icons/Blog/IconReplay.svg"), {
  ssr: false,
});
const IconLike = dynamic(() => import("icons/Blog/IconLike.svg"), {
  ssr: false,
});
const IconView = dynamic(() => import("icons/Blog/IconView.svg"), {
  ssr: false,
});
const IconMore = dynamic(() => import("icons/Blog/IconMore.svg"), {
  ssr: false,
});

function Comments({ post_id }) {
  const { get } = useFetcher();
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ comments: [] });

  useEffect(() => {
    const handelFetch = async () => {
      get(
        `comment/list?type=blog&post_id=${post_id}&paginate=true&count=4&page=${page}`,
        (res) => {
          const copy = { ...res?.data, ...data };
          copy.comments = [...copy.comments, ...res?.data?.comments];
          setData(copy);
        }
      );
    };

    handelFetch();
  }, [page]);

  return (
    <section className="mt-9 sm:mt-16 container">
      <div className="fade-in text-[#373A41] dark:text-[#fff] font-semibold text-base sm:text-[22px]">
        نظرات کاربران
      </div>
      <Form post_id={post_id} />

      {data?.comments?.length ? (
        <ul className="mt-5 sm:mt-[25px]">
          {data?.comments?.map((e, i) => (
            <li
              key={e?.id}
              className="fade-in w-full border border-solid border-[#B3B5B7] dark:border-[#0F2329] rounded-[4px] px-[14px] sm:px-[26px] py-[16px] sm:py-[21px] mb-[15px] sm:mb-[19px] last:mb-0"
            >
              <div className="center-between">
                <div className="center gap-1 sm:gap-[5px] text-[#43464C] dark:text-[#fff] font-semibold dark:font-medium">
                  <Image
                    src={e?.image}
                    alt={e?.name}
                    width={35}
                    height={35}
                    layout="fixed"
                    className="rounded-full max-w-[27px] sm:max-w-[35px]"
                  />
                  <span className="text-xs">{e?.name}</span>
                  <span className="dark:text-[#E3E2E1] text-[11px] sm:text-sm">
                    {new Date(e?.created_at)?.toLocaleDateString("fa-IR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                {/* <button className="center text-[#43464C] dark:text-[#E3E2E1] text-[11px] sm:text-sm gap-0.5 sm:gap-2 hover:opacity-80">
                  <IconReplay className="dark:[&>path]:stroke-[#E3E2E1] scale-[0.8] sm:scale-100" />
                  پاسخ به نظر
                </button> */}
              </div>
              <div className="text-[#43464C] dark:text-[#DFDFDF] text-xs sm:text-base leading-[19px] sm:leading-[25px] my-[14px] sm:my-[18px] text-justify">
                {e?.comment}
              </div>

              {e?.reply?.length ? (
                <ul className="mt-6">
                  {e?.reply?.map((e, i) => (
                    <li
                      key={e?.id}
                      className="fade-in w-full border border-solid border-[#B3B5B7] dark:border-[#0F2329] rounded-[4px] px-[14px] sm:px-[26px] py-[16px] sm:py-[21px] mb-[15px] sm:mb-[19px] last:mb-0"
                    >
                      <div className="center-between">
                        <div className="center gap-1 sm:gap-[5px] text-[#43464C] dark:text-[#fff] font-semibold dark:font-medium">
                          <Image
                            src={e?.image}
                            alt={e?.name}
                            width={35}
                            height={35}
                            layout="fixed"
                            className="rounded-full max-w-[27px] sm:max-w-[35px]"
                          />
                          <span className="text-xs">{e?.name}</span>
                          <span className="dark:text-[#E3E2E1] text-[11px] sm:text-sm">
                            {new Date(e?.created_at)?.toLocaleDateString(
                              "fa-IR",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        {/* <button className="center text-[#43464C] dark:text-[#E3E2E1] text-[11px] sm:text-sm gap-0.5 sm:gap-2 hover:opacity-80">
                          <IconReplay className="dark:[&>path]:stroke-[#E3E2E1] scale-[0.8] sm:scale-100" />
                          پاسخ به نظر
                        </button> */}
                      </div>
                      <div className="text-[#43464C] dark:text-[#DFDFDF] text-xs sm:text-base leading-[19px] sm:leading-[25px] my-[14px] sm:my-[18px] text-justify">
                        {e?.comment}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}

      {data?.paginate?.lastPage !== page && (
        <div
          onClick={() => setPage((c) => c + 1)}
          className="fade-in full-center mt-5 sm:mt-7"
        >
          <button className="full-center text-[#373A41] border border-solid border-[#D4D4D4] w-[200px] sm:w-[230px] h-[50px] sm:h-[57px] rounded-[4px] hover:bg-white hover:shadow-medium glass gap-1.5 sm:gap-2.5 dark:border-[#1B3D48] dark:text-[#FAFAFA]  text-[13px] sm:text-base">
            نمایش دیدگاه های بیشتر
            <IconMore className="dark:[&>path]:stroke-[#FAFAFA] scale-90 sm:scale-100" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Comments;
