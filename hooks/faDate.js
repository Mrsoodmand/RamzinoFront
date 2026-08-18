// created_at arrives as "2026-02-18 16:36"; the space form is not valid ISO,
// so normalise it before parsing rather than relying on engine leniency.
export const toTime = (value) => {
  if (!value) return 0;
  const parsed = Date.parse(String(value).replace(" ", "T"));
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const formatFaDate = (value) => {
  const time = toTime(value);
  if (!time) return "";
  return new Date(time).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
