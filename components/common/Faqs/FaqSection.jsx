import { useMemo, useState } from "react";
import Link from "next/link";
import FaqList from "./FaqList";
import FaqTabs from "./FaqTabs";
import VoiceRail from "components/common/Testimonials/VoiceRail";
import classes from "hooks/classes";

import IconChat from "./icons/IconChat.svg";
import IconSearch from "./icons/IconSearch.svg";

// The FAQ block used on the home, crypto and gateway pages.
//
// Layout: a sticky column carrying the heading, the search and the way out to
// support, beside the answers themselves. Pinning the search is the point —
// a filter that scrolls out of reach nine questions down is not a filter.
//
// `items` is [{ id, cat, question, answer }]; `categories` is [{ id, label }]
// with an "all" entry, or omitted to hide the tabs entirely.

// Persian is typed with several interchangeable code points — ي/ى for ی,
// ك for ک — and half-spaces land wherever the writer's keyboard put them.
// Folding both the query and the haystack means "پاسخگویی" still finds
// "پاسخ‌گویی", and an Arabic-keyboard "كارمزد" still finds "کارمزد".
function fold(value = "") {
  return value
    .replace(/[يى]/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[\u200B-\u200F\u202A-\u202E]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const faNumber = (value) => new Intl.NumberFormat("fa-IR").format(value);

function FaqSection({
  title,
  subtitle,
  items,
  categories,
  voices,
  voicesTitle = "نظرات کاربران درباره رمزینو",
  supportHref = "/contact-us",
  supportLabel = "گفتگو با پشتیبانی",
  className,
}) {
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const results = useMemo(() => {
    const term = fold(query);

    return (items || []).filter((item) => {
      if (category !== "all" && item.cat !== category) return false;
      if (!term) return true;

      return fold(`${item.question} ${item.answer}`).includes(term);
    });
  }, [items, query, category]);

  // Rows are keyed by question id rather than list index, so narrowing the
  // list never silently swaps which answer is showing. Filtering still closes
  // the open row: leaving one expanded above a changed list reads as a glitch.
  const selectCategory = (id) => {
    setOpen(null);
    setCategory(id);
  };

  return (
    <section className={classes("fade-in container mt-12 p-1", className)}>
      <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-x-16">
        <div className="lg:sticky lg:top-[104px] lg:self-start lg:pb-12">
          <h2 className="text-2xl font-semibold leading-10 text-title sm:leading-[50px]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-[46ch] text-sm text-primaryText dark:text-[#8BA1A5]">
              {subtitle}
            </p>
          )}

          <div className="relative mt-6">
            <IconSearch
              aria-hidden="true"
              className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 [&>*]:stroke-primaryText dark:[&>*]:stroke-[#8BA1A5]"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setOpen(null);
                setQuery(event.target.value);
              }}
              placeholder="مثلاً «تسویه» یا «کارمزد»"
              aria-label="جستجو در سوالات متداول"
              className={classes(
                "w-full rounded-[4px] border border-solid border-[#E6E8E8] bg-transparent",
                "py-3 pe-4 ps-11 text-sm text-title placeholder:text-primaryText/70",
                "transition-colors duration-200 focus:border-primary focus:outline-none",
                "focus:ring-[3px] focus:ring-primary/25",
                "dark:border-[#0F3F4E] dark:placeholder:text-[#8BA1A5]"
              )}
            />
          </div>

          <Link
            href={supportHref}
            className="glass mt-6 inline-flex items-center gap-2.5 rounded-[7px] bg-primary px-[18px] py-3 text-sm font-medium text-[#0C2B2F] transition-transform duration-200 hover:-translate-y-px"
          >
            <IconChat aria-hidden="true" className="h-3.5 w-3.5" />
            {supportLabel}
          </Link>

          <p
            aria-live="polite"
            className="mt-5 text-[13px] tabular-nums text-primaryText dark:text-[#8BA1A5]"
          >
            {faNumber(results.length)} پرسش · پاسخگویی ۲۴ ساعته
          </p>
        </div>

        <div>
          {/* The tabs sit over the answers they filter, not beside them: here
              the control spans the list's full width, so every segment fits on
              one row instead of wrapping inside the 320px column. */}
          {categories?.length > 1 && (
            <FaqTabs
              className="mb-6"
              items={categories}
              value={category}
              onChange={selectCategory}
            />
          )}

          {results.length > 0 ? (
            <FaqList
              items={results}
              open={open}
              setOpen={setOpen}
              columns={2}
              twoColFrom="xl"
            />
          ) : (
            <p className="py-8 text-sm text-primaryText dark:text-[#8BA1A5]">
              پاسخی برای این عبارت پیدا نشد.{" "}
              <Link
                href={supportHref}
                className="text-primaryDark underline-offset-4 hover:underline dark:text-primary"
              >
                با پشتیبانی گفتگو کنید
              </Link>{" "}
              — ۲۴ ساعته پاسخگوییم.
            </p>
          )}
        </div>
      </div>

      <VoiceRail className="mt-14" items={voices} title={voicesTitle} />
    </section>
  );
}

export default FaqSection;
