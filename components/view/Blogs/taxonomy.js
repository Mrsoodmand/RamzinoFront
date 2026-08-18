import { formatFaDate, toTime } from "hooks/faDate";

export const ALL_CATEGORY = "همه";

export { formatFaDate, toTime };

const cleanCategory = (blog) =>
  typeof blog?.category === "string" ? blog.category.trim() : "";

// Newest first. The API has no dedicated `news` feed, so the sidebar list is
// just the most recent posts out of the same array the grid renders.
export const deriveLatestNews = (blogs, limit = 4) =>
  (Array.isArray(blogs) ? blogs : [])
    .filter(Boolean)
    .slice()
    .sort((a, b) => toTime(b?.created_at) - toTime(a?.created_at))
    .slice(0, limit);

// Counts come from the same array the filter runs against, so a category's
// number always matches how many cards selecting it will show.
export const deriveCategories = (blogs) => {
  const counts = new Map();

  (Array.isArray(blogs) ? blogs : []).forEach((blog) => {
    const name = cleanCategory(blog);
    if (!name) return;
    counts.set(name, (counts.get(name) || 0) + 1);
  });

  const list = Array.from(counts, ([name, count]) => ({ name, count })).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name, "fa"),
  );

  if (!list.length) return [];

  const total = (Array.isArray(blogs) ? blogs : []).filter(Boolean).length;
  return [{ name: ALL_CATEGORY, count: total }, ...list];
};

export const filterByCategory = (blogs, category) => {
  const list = (Array.isArray(blogs) ? blogs : []).filter(Boolean);
  if (!category || category === ALL_CATEGORY) return list;
  return list.filter((blog) => cleanCategory(blog) === category);
};
