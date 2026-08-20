import classes from "hooks/classes";
import copyToClipboard from "hooks/Clipboard";
import { Success } from "hooks/Toast";

// currentColor keeps these readable in both themes without the per-path dark:
// overrides the imported .svg icons need.
const Icon = ({ children, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[18px] w-[18px]"
    {...rest}
  >
    {children}
  </svg>
);

const targets = [
  {
    key: "telegram",
    label: "اشتراک در تلگرام",
    build: (url, title) => `https://t.me/share/url?url=${url}&text=${title}`,
    icon: (
      <path d="M21.5 4.3 2.9 11.4c-.9.3-.9 1.6.1 1.9l4.6 1.4 1.8 5.1c.3.8 1.3 1 1.9.4l2.5-2.4 4.6 3.4c.7.5 1.7.1 1.9-.8l3-14.4c.2-.9-.7-1.6-1.8-1.7Z" />
    ),
  },
  {
    key: "whatsapp",
    label: "اشتراک در واتساپ",
    build: (url, title) => `https://wa.me/?text=${title}%20${url}`,
    icon: (
      <>
        <path d="M3.5 20.5l1.3-4.2A8.2 8.2 0 1 1 8 19.4l-4.5 1.1Z" />
        <path d="M9 9.3c.2 1.5 1.4 3.7 3.4 4.8.7.4 1.4.6 1.9.1l.7-.8" />
      </>
    ),
  },
  {
    key: "x",
    label: "اشتراک در ایکس",
    build: (url, title) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    icon: (
      <>
        <path d="M4 4l16 16" />
        <path d="M20 4 4 20" />
      </>
    ),
  },
];

// The label doubles as the accessible name and as the hover tooltip. `title`
// is deliberately absent: the browser would draw its own bubble on top of this
// one. Pointer-events stay off the tooltip so it never eats the click.
const ShareButton = ({ label, onClick, children }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="group relative full-center h-9 w-9 rounded-[4px] text-[#5C6165] transition-colors duration-300 hover:bg-themeColor hover:text-title dark:text-[#8FA3AB] dark:hover:text-[#F5F5F5]"
  >
    <Icon>{children}</Icon>
    <span
      role="tooltip"
      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-[#262931] px-2 py-1 text-[11px] font-medium text-[#FAFAFA] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-[#00303F]"
    >
      {label}
    </span>
  </button>
);

function ShareRow({ title, className }) {
  const share = (build) => {
    const url = encodeURIComponent(window.location.href);
    window.open(build(url, encodeURIComponent(title || "")), "_blank");
  };

  const copy = () => {
    copyToClipboard(window.location.href);
    Success("لینک مقاله کپی شد");
  };

  return (
    <section
      className={classes(
        "center-between flex-wrap gap-y-2 rounded-[5px] bg-white px-[18px] py-4 shadow-[0px_0px_75px_0px_#0000000B]",
        className,
      )}
    >
      <span className="text-[13px] text-[#5C6165] dark:text-[#8FA3AB]">
        این مقاله را به اشتراک بگذارید
      </span>

      <div className="center gap-1">
        {targets.map((target) => (
          <ShareButton
            key={target.key}
            label={target.label}
            onClick={() => share(target.build)}
          >
            {target.icon}
          </ShareButton>
        ))}

        <ShareButton label="کپی لینک" onClick={copy}>
          <>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M15 5.5A1.5 1.5 0 0 0 13.5 4H6a2 2 0 0 0-2 2v7.5A1.5 1.5 0 0 0 5.5 15" />
          </>
        </ShareButton>
      </div>
    </section>
  );
}

export default ShareRow;
