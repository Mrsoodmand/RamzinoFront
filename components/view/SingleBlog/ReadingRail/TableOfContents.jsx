import classes from "hooks/classes";
import { useMemo, useState } from "react";
import {
  findSnippet,
  normalize,
  scrollToHeading,
  scrollToMatch,
} from "../reading";

// A search over the whole article can return dozens of paragraphs. Past the
// first handful the reader is better served by a narrower query than by a
// longer list, so the rest are counted rather than listed.
const MAX_MATCHES = 8;

// What the header reads out. Before the reader has moved it is a promise
// ("7 minutes"); once they are into the text it becomes what is left, which is
// the number that actually helps them decide whether to keep going.
const timeLabel = (minutes, progress) => {
  if (progress < 0.02) return `${minutes} دقیقه مطالعه`;

  const left = Math.ceil(minutes * (1 - progress));
  return left < 1 ? "به پایان رسید" : `${left} دقیقه باقی‌مانده`;
};

function TableOfContents({
  headings,
  blocks,
  activeId,
  progress,
  minutes,
  onNavigate,
  bare = false,
  navClassName = "max-h-[calc(100vh-390px)]",
}) {
  const [query, setQuery] = useState("");

  const needle = normalize(query);

  const headingHits = useMemo(() => {
    if (!needle) return headings;
    return headings.filter((heading) =>
      normalize(heading.text).includes(needle),
    );
  }, [headings, needle]);

  const textHits = useMemo(() => {
    if (!needle) return [];

    // Every hit is collected, not just the ones that get rendered: the count
    // under the list is only useful if it knows about the ones it is hiding.
    return (blocks || []).reduce((list, block) => {
      const snippet = findSnippet(block.text, needle);
      if (snippet) list.push({ ...block, snippet });
      return list;
    }, []);
  }, [blocks, needle]);

  if (!headings?.length) return null;

  const percent = Math.round(progress * 100);
  const searching = Boolean(needle);
  const shown = textHits.slice(0, MAX_MATCHES);
  const overflow = textHits.length - shown.length;

  const go = (id, scroll) => (onNavigate ? onNavigate(id, scroll) : scroll(id));

  return (
    <section
      aria-labelledby="blog-toc"
      className={classes(
        bare
          ? ""
          : "rounded-[5px] bg-white px-[18px] pb-5 pt-[18px] shadow-[0px_0px_75px_0px_#0000000B]",
      )}
    >
      <div className="center-between">
        <h2 id="blog-toc" className="text-base font-semibold text-title">
          فهرست مطالب
        </h2>
        <span className="text-[12px] tabular-nums text-[#5C6165] dark:text-[#8FA3AB]">
          {timeLabel(minutes, progress)}
        </span>
      </div>

      <div
        role="progressbar"
        aria-label="پیشرفت مطالعه"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-themeColor"
      >
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${percent}%` }}
        />
      </div>

      <label className="mt-3.5 block">
        <span className="sr-only">جستجو در سرفصل‌ها و متن مقاله</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="جستجو در سرفصل‌ها و متن مقاله"
          className="h-10 w-full rounded-[4px] border border-solid border-[#DFE0E1] bg-transparent px-3 text-[13px] text-title outline-none transition-colors duration-300 placeholder:text-[#8B9095] focus:border-primary dark:border-[#003E52] dark:placeholder:text-[#5C7079]"
        />
      </label>

      <nav
        className={classes(
          "none-scroll mt-2 flex flex-col overflow-y-auto",
          navClassName,
        )}
      >
        {searching && headingHits.length > 0 && (
          <GroupLabel>سرفصل‌ها</GroupLabel>
        )}

        {headingHits.map((heading) => {
          const isActive = !searching && heading.id === activeId;
          return (
            <button
              key={heading.id}
              onClick={() => go(heading.id, scrollToHeading)}
              aria-current={isActive ? "true" : undefined}
              className={classes(
                "flex items-start gap-2.5 py-[7px] text-right text-[13px] leading-[1.9] transition-colors duration-300",
                heading.tag !== "H2" ? "pr-3.5" : "",
                isActive
                  ? "font-semibold text-title"
                  : "text-[#5C6165] hover:text-title dark:text-[#8FA3AB] dark:hover:text-[#F5F5F5]",
              )}
            >
              <i
                className={classes(
                  "mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300",
                  isActive ? "bg-primary" : "bg-[#DFE0E1] dark:bg-[#003E52]",
                )}
              />
              <span className="min-w-0">{heading.text}</span>
            </button>
          );
        })}

        {shown.length > 0 && <GroupLabel>در متن مقاله</GroupLabel>}

        {shown.map((hit) => (
          <button
            key={hit.id}
            onClick={() => go(hit.id, scrollToMatch)}
            className="group border-b border-solid border-[#EDEEEF] py-2.5 text-right last:border-b-0 dark:border-[#00303F]"
          >
            {hit.section && (
              <span className="mb-1 block truncate text-[11px] text-[#8B9095] dark:text-[#5C7079]">
                {hit.section}
              </span>
            )}
            <span className="block text-[13px] leading-[1.9] text-[#5C6165] transition-colors duration-300 group-hover:text-title dark:text-[#8FA3AB] dark:group-hover:text-[#F5F5F5]">
              {hit.snippet.before}
              <mark className="rounded-[2px] bg-[rgba(78,223,212,0.3)] px-0.5 text-title dark:text-[#F5F5F5]">
                {hit.snippet.match}
              </mark>
              {hit.snippet.after}
            </span>
          </button>
        ))}

        {overflow > 0 && (
          <p className="pt-2.5 text-[12px] text-[#8B9095] dark:text-[#5C7079]">
            و {overflow} مورد دیگر در متن — جستجو را دقیق‌تر کنید.
          </p>
        )}

        {searching && !headingHits.length && !shown.length && (
          <p className="py-3 text-[13px] text-[#5C6165] dark:text-[#8FA3AB]">
            چیزی با این عبارت پیدا نشد.
          </p>
        )}
      </nav>
    </section>
  );
}

const GroupLabel = ({ children }) => (
  <span className="mt-2 block pb-1 text-[11px] font-semibold text-[#8B9095] first:mt-0 dark:text-[#5C7079]">
    {children}
  </span>
);

export default TableOfContents;
