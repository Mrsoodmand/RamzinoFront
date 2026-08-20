import classes from "hooks/classes";
import { formatFaDate, formatFaRelative } from "hooks/faDate";
import Image from "next/image";

const FALLBACK_AVATAR =
  "https://panel.ramzino.me/userfiles/files/comment-cover.png";

// `like` is a read-only count: the API returns it but exposes no endpoint to
// change it, so this is a figure, not a button.
const Likes = ({ count }) => {
  if (!count) return null;

  return (
    <span className="center gap-1 text-[11px] text-[#5C6165] dark:text-[#8FA3AB] sm:text-xs">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
        className="h-[15px] w-[15px]"
      >
        <path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />
      </svg>
      {Number(count).toLocaleString("fa-IR")}
    </span>
  );
};

function Comment({ data, isReply = false, className = "" }) {
  const size = isReply ? 30 : 40;

  return (
    <li className={classes("fade-in", className)}>
      <div className="flex gap-3 sm:gap-3.5">
        <Image
          src={data?.image || FALLBACK_AVATAR}
          alt=""
          width={size}
          height={size}
          className="shrink-0 rounded-full object-cover"
          style={{ width: size, height: size }}
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span
              className={classes(
                "font-semibold text-title dark:font-medium",
                isReply ? "text-xs sm:text-[13px]" : "text-[13px] sm:text-sm",
              )}
            >
              {data?.name}
            </span>
            <time
              title={formatFaDate(data?.created_at)}
              className="text-[11px] text-[#5C6165] dark:text-[#8FA3AB] sm:text-xs"
            >
              {formatFaRelative(data?.created_at)}
            </time>
          </div>

          <p className="mt-1.5 text-justify text-xs leading-[1.9] text-[#43464C] dark:text-[#DFDFDF] sm:mt-2 sm:text-sm">
            {data?.comment}
          </p>

          <div className="mt-2 center gap-4">
            <Likes count={data?.like} />
          </div>

          {data?.reply?.length ? (
            <ul className="mt-4 flex flex-col gap-4 border-r border-solid border-[#DFE0E1] pr-3.5 dark:border-[#003E52] sm:mt-5 sm:gap-5 sm:pr-5">
              {data.reply.map((reply) => (
                <Comment key={reply?.id} data={reply} isReply />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default Comment;
