import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import IconDark from "icons/Layout/IconDark.svg";
import IconLight from "icons/Layout/IconLight.svg";
import AddIcon from "components/common/addIcon";
import classes from "hooks/classes";

// Flips the theme with the global `transition: all` suppressed for the swap.
// Left on, the switch queues a transition on every animatable property of every
// node at once; WebKit on iOS drops part of that batch, and the dropped nodes
// stay painted in the old theme until a scroll forces them to restyle.
const applyTheme = (dark) => {
  const body = document.querySelector("body");
  if (!body) return;

  body.classList.add("theme-switching");

  body.setAttribute("data-theme", dark ? "dark" : "light");
  body.classList.toggle("dark", dark);
  body.classList.toggle("light", !dark);

  // Reading a layout property commits the new colours while transitions are
  // still off, so nothing is left mid-flight when they come back on. It also
  // means re-enabling them afterwards animates nothing, because by then the
  // values are already the current ones.
  void body.offsetWidth;

  // Both, because neither alone is reliable: rAF does not fire while the tab is
  // in the background, which would leave every transition on the site disabled
  // until the user came back. Removing twice is harmless.
  const restore = () => body.classList.remove("theme-switching");
  window.requestAnimationFrame(restore);
  window.setTimeout(restore, 0);
};

export const handelChangeTheme = () => {
  const dark = !document.querySelector("body")?.classList?.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  applyTheme(dark);
};

export default function DarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Same suppression on first paint: restoring a saved dark theme after
    // hydration would otherwise cross-fade the whole page for half a second.
    applyTheme(localStorage.getItem("theme") === "dark");
  }, []);

  return (
    <button
      title="تغییر تم"
      onClick={() => {
        handelChangeTheme();
        setEnabled((c) => !c);
      }}
      className="flex items-center justify-center border border-solid border-[#DFE0E1] rounded-full w-[45px] h-[45px] hover:bg-themeColor dark:border-[#003E52]"
    >
      <svg
        className="stroke-[#1C1C1C] dark:stroke-[#fff]"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3353 12.2363C17.3353 15.0522 15.0526 17.335 12.2367 17.335C9.4208 17.335 7.13806 15.0522 7.13806 12.2363C7.13806 9.42043 9.4208 7.1377 12.2367 7.1377C15.0526 7.1377 17.3353 9.42043 17.3353 12.2363Z"
          strokeWidth="1.52959"
        />
        <path
          d="M12.2367 2.03906V3.56865M12.2367 20.904V22.4336M19.447 19.4471L18.3654 18.3656M6.10739 6.10702L5.0258 5.02544M22.434 12.2363H20.9044M3.56902 12.2363H2.03943M19.4475 5.02555L18.3659 6.10714M6.10789 18.3657L5.0263 19.4473"
          strokeWidth="1.52959"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );

  return (
    <div className="py-16">
      <Switch
        title="دارک بود"
        aria-label="دارک مود"
        checked={enabled}
        onChange={() => {
          handelChangeTheme();
          setEnabled((c) => !c);
        }}
        className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[40px] w-[76px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 bg-themeColor group`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "-translate-x-10" : "-translate-x-1"}
            pointer-events-none inline-block h-[33px] w-[32px] transform rounded-full bg-white dark:bg-[#005975] shadow-lg ring-0 transition duration-200 ease-in-out shadow:[0px_0px_47px_0px_#00000014] translate-y-[3px] full-center`}
        >
          <AddIcon>
            <IconDark
              className={classes(
                " group-hover:rotate-45 transition-medium stroke-title absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4",
                enabled ? "opacity-0" : "opacity-100"
              )}
            />
            <IconLight
              className={classes(
                " group-hover:rotate-45 transition-medium stroke-title absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4",
                enabled ? "opacity-100" : "opacity-0"
              )}
            />
          </AddIcon>
        </span>
      </Switch>
    </div>
  );
}
