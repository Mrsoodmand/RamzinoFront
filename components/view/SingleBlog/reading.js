import { useEffect, useState } from "react";

// The article body sits under a sticky header, so anything we scroll to has to
// stop this far below the viewport top to stay visible.
export const SCROLL_OFFSET = 110;

export const ARTICLE_ID = "main-blog";

const clamp = (value) => Math.min(1, Math.max(0, value));

const buildId = (text, index) =>
  `heading-${index}-${String(text || "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 40)}`;

const getArticle = () =>
  typeof document === "undefined" ? null : document.getElementById(ARTICLE_ID);

// long_detail arrives as raw HTML, so the headings only exist once the browser
// has parsed it — and the CMS gives them no ids. We stamp ids on here, which is
// what lets both the sidebar and the mobile box link into the text.
export const useHeadings = (html) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const article = getArticle();
    if (!article) {
      setHeadings([]);
      return;
    }

    setHeadings(
      Array.from(article.querySelectorAll("h2, h3, h4")).map((el, i) => {
        if (!el.id) el.id = buildId(el.textContent, i);
        return { id: el.id, text: el.textContent, tag: el.tagName };
      }),
    );
  }, [html]);

  return headings;
};

// Both values are measured live on every frame rather than cached on mount:
// covers and embeds inside the article finish loading after we first render and
// push every heading down the page.
export const useReadingState = (headings) => {
  const [state, setState] = useState({ activeId: "", progress: 0 });

  useEffect(() => {
    const article = getArticle();
    if (!article || !headings?.length) return undefined;

    let frame = 0;

    const measure = () => {
      frame = 0;

      const rect = article.getBoundingClientRect();
      // Full when the end of the article reaches the bottom of the viewport —
      // the point the reader actually runs out of text, not when it leaves.
      const progress = clamp(
        (window.innerHeight - rect.top) / (rect.height || 1),
      );

      let activeId = headings[0]?.id || "";
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET + 12) {
          activeId = heading.id;
        }
      });

      setState((current) =>
        current.activeId === activeId && current.progress === progress
          ? current
          : { activeId, progress },
      );
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headings]);

  return state;
};

// Only leaf blocks: a list item wrapping a paragraph would otherwise put the
// same sentence in the index twice, once under each element.
const BLOCK_SELECTOR = "p, li, blockquote, figcaption, td, th";

// The searchable body of the article, built from the same parsed HTML the
// headings come from. Each entry carries the heading it sits under so a result
// can tell the reader which section it came from.
export const useSearchIndex = (html, headings) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const article = getArticle();
    if (!article) {
      setBlocks([]);
      return;
    }

    const sections = new Map(headings?.map((h) => [h.id, h.text]) || []);
    let section = "";

    setBlocks(
      Array.from(article.querySelectorAll(`${BLOCK_SELECTOR}, h2, h3, h4`))
        .reduce((list, el, i) => {
          if (sections.has(el.id)) {
            section = sections.get(el.id);
            return list;
          }

          if (!el.matches(BLOCK_SELECTOR)) return list;
          if (el.querySelector(BLOCK_SELECTOR)) return list;

          const text = el.textContent.trim();
          if (text.length < 2) return list;

          if (!el.id) el.id = `block-${i}`;
          list.push({ id: el.id, text, section });
          return list;
        }, []),
    );
  }, [html, headings]);

  return blocks;
};

export const scrollToHeading = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET,
    behavior: "smooth",
  });
};

// Scrolling a paragraph into view is not enough on its own — mid-article every
// paragraph looks like every other one, so the hit gets a highlight that fades
// by itself rather than a mark the page then has to carry around.
export const scrollToMatch = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  scrollToHeading(id);

  el.classList.remove("search-hit");
  // Reading offsetWidth restarts the animation when the same block is picked
  // twice in a row; without it the class goes back on mid-flight and nothing
  // visible happens.
  void el.offsetWidth;
  el.classList.add("search-hit");
  window.setTimeout(() => el.classList.remove("search-hit"), 2400);
};

// Persian prose reads at roughly 200 words a minute; close enough for a label
// whose only job is to set expectations before the reader commits.
export const WORDS_PER_MINUTE = 200;

export const countWords = (html) =>
  String(html || "")
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

export const readingMinutes = (html) =>
  Math.max(1, Math.round(countWords(html) / WORDS_PER_MINUTE));

// Arabic and Persian encode the same letters at different code points, and
// copy pasted prose mixes them freely. Fold both — plus the zero-width joiner
// Persian compounds are written with — so searching "می" also finds "می‌شود".
//
// The map records which character of the original each folded character came
// from. Matching runs on the folded text, but the snippet a reader sees has to
// be cut out of the real prose, and folding changes the length: without the map
// a hit at folded position 40 would slice the original in the wrong place.
const fold = (value) => {
  const source = String(value || "");
  let text = "";
  const map = [];

  for (let i = 0; i < source.length; i += 1) {
    let char = source[i];

    if (char >= "\u200B" && char <= "\u200F") continue;

    if (/\s/.test(char)) {
      if (!text || text.endsWith(" ")) continue;
      char = " ";
    } else if (char === "\u064A" || char === "\u0649") {
      char = "\u06CC";
    } else if (char === "\u0643") {
      char = "\u06A9";
    } else {
      char = char.toLowerCase();
    }

    text += char;
    map.push(i);
  }

  return { text, map };
};

export const normalize = (value) => fold(value).text.trim();

// A window of the original prose around the first hit, split so the caller can
// style the matched run without dangerouslySetInnerHTML.
export const findSnippet = (source, needle, radius = 55) => {
  const { text, map } = fold(source);
  const at = text.indexOf(needle);
  if (at < 0) return null;

  const start = map[at];
  const end = (map[at + needle.length - 1] ?? start) + 1;
  const from = Math.max(0, start - radius);
  const to = Math.min(source.length, end + radius);

  return {
    before: (from > 0 ? "…" : "") + source.slice(from, start).trimStart(),
    match: source.slice(start, end),
    after: source.slice(end, to).trimEnd() + (to < source.length ? "…" : ""),
  };
};
