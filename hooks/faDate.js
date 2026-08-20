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

const faNumber = (value) => Number(value).toLocaleString("fa-IR");

// Comments are fetched on the client, so there is no server render to disagree
// with — safe to read the clock here.
export const formatFaRelative = (value) => {
  const time = toTime(value);
  if (!time) return "";

  const seconds = Math.round((Date.now() - time) / 1000);
  if (seconds < 60) return "چند لحظه پیش";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${faNumber(minutes)} دقیقه پیش`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${faNumber(hours)} ساعت پیش`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${faNumber(days)} روز پیش`;
  if (days < 30) return `${faNumber(Math.floor(days / 7))} هفته پیش`;
  if (days < 365) return `${faNumber(Math.floor(days / 30))} ماه پیش`;

  return `${faNumber(Math.floor(days / 365))} سال پیش`;
};
