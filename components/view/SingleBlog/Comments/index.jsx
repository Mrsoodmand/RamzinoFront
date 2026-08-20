import classes from "hooks/classes";
import useFetcher from "hooks/useFetcher";
import { toTime } from "hooks/faDate";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import Comment from "./Comment";
import Form from "./Form";

const IconMore = dynamic(() => import("icons/Blog/IconMore.svg"), {
  ssr: false,
});

const PAGE_SIZE = 4;

const SORTS = [
  { key: "newest", label: "جدیدترین" },
  { key: "liked", label: "محبوب‌ترین" },
];

function Comments({ post_id }) {
  const { get } = useFetcher(false);
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [paginate, setPaginate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("newest");

  // Guards the double invoke React's strict mode does in development, which
  // would otherwise fetch page 1 twice and append it to itself.
  const requested = useRef(0);

  useEffect(() => {
    if (!post_id || requested.current === page) return;
    requested.current = page;

    setLoading(true);
    get(
      `comment/list?type=blog&post_id=${post_id}&paginate=true&count=${PAGE_SIZE}&page=${page}`,
      (res) => {
        // The endpoint returns { comments, paginate } at the top level. The
        // previous code read res.data.data, which is undefined — spreading it
        // threw and the list never rendered at all.
        const payload = res?.data;
        const incoming = payload?.comments || [];

        setComments((current) => {
          const seen = new Set(current.map((item) => item?.id));
          return [...current, ...incoming.filter((item) => !seen.has(item?.id))];
        });
        setPaginate(payload?.paginate || null);
      },
    ).finally(() => setLoading(false));
  }, [page, post_id]);

  const sorted = useMemo(() => {
    const list = [...comments];
    if (sort === "liked") {
      return list.sort((a, b) => (b?.like || 0) - (a?.like || 0));
    }
    return list.sort((a, b) => toTime(b?.created_at) - toTime(a?.created_at));
  }, [comments, sort]);

  const total = paginate?.totalItems ?? comments.length;
  const hasMore = paginate ? paginate.lastPage > page : false;

  return (
    <section className="container mt-9 sm:mt-16">
      <div className="fade-in center-between flex-wrap gap-3">
        <h2 className="center gap-2.5 text-base font-semibold text-title sm:text-[22px]">
          نظرات کاربران
          {total > 0 && (
            <span className="rounded-full bg-themeColor px-2.5 py-0.5 text-xs font-medium text-[#5C6165] dark:text-[#8FA3AB]">
              {Number(total).toLocaleString("fa-IR")}
            </span>
          )}
        </h2>

        {comments.length > 1 && (
          <div className="center gap-1 rounded-[4px] bg-themeColor p-1">
            {SORTS.map((option) => (
              <button
                key={option.key}
                onClick={() => setSort(option.key)}
                aria-pressed={sort === option.key}
                className={classes(
                  "rounded-[3px] px-3 py-1.5 text-[12px] transition-colors duration-300 sm:text-[13px]",
                  sort === option.key
                    ? "bg-white font-semibold text-title"
                    : "text-[#5C6165] hover:text-title dark:text-[#8FA3AB]",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <Form post_id={post_id} />

      {sorted.length ? (
        <ul className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-7">
          {sorted.map((comment, i) => (
            <Comment
              key={comment?.id}
              data={comment}
              className={
                i === 0
                  ? ""
                  : "border-t border-solid border-[#DFE0E1] pt-5 dark:border-[#003E52] sm:pt-7"
              }
            />
          ))}
        </ul>
      ) : (
        !loading && (
          <p className="fade-in mt-6 text-center text-[13px] leading-[1.9] text-[#5C6165] dark:text-[#8FA3AB] sm:mt-8 sm:text-sm">
            هنوز دیدگاهی ثبت نشده است. اولین نفری باشید که نظرش را می‌نویسد.
          </p>
        )
      )}

      {hasMore && (
        <div className="fade-in full-center mt-5 sm:mt-7">
          <button
            onClick={() => setPage((c) => c + 1)}
            disabled={loading}
            className="glass full-center h-[50px] w-[200px] gap-1.5 rounded-[4px] border border-solid border-[#D4D4D4] text-[13px] text-[#373A41] hover:bg-white hover:shadow-medium disabled:opacity-60 dark:border-[#1B3D48] dark:text-[#FAFAFA] sm:h-[57px] sm:w-[230px] sm:gap-2.5 sm:text-base"
          >
            {loading ? "در حال بارگذاری…" : "نمایش دیدگاه های بیشتر"}
            {!loading && (
              <IconMore className="scale-90 dark:[&>path]:stroke-[#FAFAFA] sm:scale-100" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}

export default Comments;
