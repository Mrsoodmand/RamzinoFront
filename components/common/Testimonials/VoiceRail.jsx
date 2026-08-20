import { useEffect, useRef } from "react";

import classes from "hooks/classes";

// The customer-quote rail that closes the FAQ sections.
//
// It replaced a 2-second autoplay carousel that moved quotes out from under
// whoever was reading them. This drifts continuously instead, pauses under the
// pointer, and when the visitor asks for reduced motion the animation stops
// and the rail becomes an ordinary horizontal scroller so the quotes are still
// reachable.
//
// `items` is [{ name, initials, title, text }]. Deliberately no star ratings:
// the previous version printed a hardcoded five stars on every card, which on
// a page selling trust costs more than it earns.

// Hovering a card lights it from the cursor: a mint wash and a rim that is
// brightest on the side the pointer is on, both drawn as pseudo-elements in
// globals.css off two custom properties this component writes. Neighbours dim
// there too, so the row goes from texture to one quote being read.
//
// The pointer position is written straight to the node's style — putting it in
// React state would re-render every card on every mouse move — and coalesced to
// one write per frame, since a mousemove burst outruns the screen refresh.
function Voice({ item, ariaHidden }) {
  const frame = useRef(0);

  useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    []
  );

  const trackPointer = (event) => {
    const card = event.currentTarget;
    const { clientX, clientY } = event;

    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--vx", `${clientX - box.left}px`);
      card.style.setProperty("--vy", `${clientY - box.top}px`);
    });
  };

  return (
    <figure
      aria-hidden={ariaHidden || undefined}
      onMouseMove={trackPointer}
      className={classes(
        "voice-card relative isolate m-0 w-[300px] shrink-0 rounded-[10px] p-6 sm:w-[340px]",
        "group/card bg-[#F6F8F8] transition-opacity duration-300 dark:bg-[#02222C]",
        "ease-[cubic-bezier(0.25,1,0.5,1)]"
      )}
    >
      <blockquote
        className={classes(
          "text-[13px] leading-[1.9] text-primaryText transition-colors duration-300 sm:text-sm",
          "group-hover/card:text-title dark:text-[#C4D2D4] dark:group-hover/card:text-title"
        )}
      >
        {item.text}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-[#00232C]"
        >
          {item.initials}
        </span>
        <span className="leading-tight">
          <span className="block text-[13px] font-medium text-title">
            {item.name}
          </span>
          <span className="block text-xs text-primaryText/80 dark:text-[#8BA1A5]">
            {item.title}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function VoiceRail({ items, title, className }) {
  if (!items?.length) return null;

  return (
    <div
      className={classes(
        "relative isolate overflow-hidden border-t border-solid border-[#E6E8E8]",
        "pt-8 dark:border-[#0F3F4E]",
        className
      )}
    >
      {/* Two glows on periods that never divide into each other, so the band is
          lit rather than decorated and never settles into a shape a visitor
          sees twice. Light mode keeps them near the floor of visibility — mint
          is an accent in this system, not a background wash. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -top-40 end-[6%] h-[420px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(78,223,212,0.14),transparent_68%)] blur-2xl motion-safe:animate-aurora-a dark:bg-[radial-gradient(circle,rgba(78,223,212,0.16),transparent_68%)]" />
        <span className="absolute -bottom-40 start-[10%] h-[400px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(43,117,140,0.1),transparent_70%)] blur-2xl motion-safe:animate-aurora-b dark:bg-[radial-gradient(circle,rgba(43,117,140,0.26),transparent_70%)]" />
      </div>

      {title && (
        <h2 className="text-sm text-primaryText dark:text-[#8BA1A5]">{title}</h2>
      )}

      {/* The rail fades out at both ends instead of being sliced off by the
          container edge — quotes drift in from nothing. The vertical padding
          gives the hover glow somewhere to go: constraining one overflow axis
          forces the browser to clip the other too. */}
      <div
        className={classes(
          "none-scroll mt-2 overflow-x-auto motion-safe:overflow-x-hidden",
          "[-webkit-mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]",
          "[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]"
        )}
      >
        {/* The track holds the list twice; the keyframe travels exactly half
            its width, so the loop closes with no visible seam. */}
        {/* Pausing is keyed off a hovered card in globals.css, not off the band:
            reading a quote should stop the rail, crossing the heading or the
            space above it should not. */}
        <div className="voices-track flex w-max gap-5 py-6 motion-safe:animate-voices-drift">
          {items.map((item) => (
            <Voice key={item.name} item={item} />
          ))}
          {items.map((item) => (
            <Voice key={`${item.name}-loop`} item={item} ariaHidden />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VoiceRail;
