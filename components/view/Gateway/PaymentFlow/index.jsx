/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

/**
 * The "پلی میان فروشگاه شما و اقتصاد دیجیتال" illustration, with the payment
 * routes animated on top of it.
 *
 * The artwork is a single raster (564×564) with the logos, cards and connector
 * lines baked in, so the individual pieces can't be animated directly. Instead
 * an SVG overlay sits on top using the illustration's own 564×564 coordinate
 * space as its viewBox — every coordinate below is a pixel in the source image,
 * and the viewBox makes the overlay track the artwork at any rendered size.
 *
 * Each lane traces the grey connector already drawn in the image, and a short
 * bright dash runs along it. Paths carry `pathLength="100"`, which normalises
 * every route to the same 0–100 scale, so one keyframe drives all of them
 * regardless of how long each actual path is.
 */

// Where each connector meets its logo chip, the shared trunk at x=398, and the
// arrowhead at the hub (370, 281.5). Routes are authored logo→hub; the pulse
// runs along them in reverse, so it reads as the store reaching outward.
//
// `cy` is the chip's real centre, measured off the artwork's alpha channel —
// all five sit at x=463.5 with a radius of 38, not the 32.5 first assumed.
// `coin` is the currency painted over each chip. The card-network logos are
// baked into the raster, so they're covered rather than swapped: an opaque disc
// slightly wider than the chip, with the coin on top.
const LANES = [
  { id: "apple", d: "M454 111 Q400 146 398 170 L398 258 Q398 278 370 281.5", cy: 97, coin: "BTC" },
  { id: "mastercard", d: "M441 202 Q402 214 398 228 L398 258 Q398 278 370 281.5", cy: 189, coin: "ETH" },
  { id: "paypal", d: "M426 281.5 L370 281.5", cy: 281.5, coin: "USDT" },
  { id: "gpay", d: "M432 359 Q402 350 398 338 L398 306 Q398 285 370 281.5", cy: 374, coin: "BNB" },
  {
    id: "klarna",
    d: "M446 451 Q420 432 404 408 Q398 401 398 392 L398 306 Q398 285 370 281.5",
    cy: 466,
    coin: "BCH",
  },
];

const CHIP_CX = 463.5;
// The baked chips are r=38; the cover is wider so the old logo and its soft
// shadow are fully hidden, and it becomes the chip's visible edge — the
// highlight ring and the trail mask both key off it.
const CHIP_COVER_R = 41;
const COIN_SIZE = 44;

// The wallet disc at the centre of the artwork, replaced by the Ramzino mark.
const HUB = { cx: 282.5, cy: 282, r: 47.5 };

// The merchant card on the left. Its icon and price are baked into the raster,
// and its interior is transparent, so they cannot be erased against the
// section's gradient — the whole inside is repainted instead. Bounds measured
// off the artwork's alpha channel: the card body is x 2–158, y 195–356 with a
// 29px corner radius, and the fill is inset by 2px so the raster's own border
// still shows. The inner radius is that 29 less the inset — guessing it left
// the fill's corners squarer than the outline, so white poked past the border.
const CARD = { x: 4, y: 197, w: 152, h: 157, rx: 27 };
const DISC = { cx: 81, cy: 238, r: 30 };
const ITEM_NAME_Y = 303;
const ITEM_PRICE_Y = 329;

// A rolling shop order. Icons are 24x24 stroke paths scaled into the disc.
// `min`/`max` are the price range in units of 100,000 toman, so each product's
// number stays plausible for what it is — a t-shirt never prices like a car.
const ITEMS = [
  {
    name: "تی‌شرت نخی",
    min: 5,
    max: 25,
    d: "M8 4 4 6l1.5 4H8v10h8V10h2.5L20 6l-4-2a4 4 0 0 1-8 0z",
  },
  {
    name: "کفش ورزشی",
    min: 30,
    max: 120,
    d: "M3 16h13l4-2 1-3-5-2-3 2-4-2H3zM3 16v2h18v-2",
  },
  {
    name: "هدفون بی‌سیم",
    min: 40,
    max: 140,
    d: "M4 13a8 8 0 1 1 16 0M4 13v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4zM20 13v4a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3z",
  },
  {
    name: "ساعت هوشمند",
    min: 60,
    max: 280,
    d: "M9 4.5h6v3M9 19.5h6v-3M12 9v3.5l2 1.5M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0",
  },
  {
    name: "دوچرخه کوهستان",
    min: 80,
    max: 450,
    d: "M5.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5.5 14.5 9 6h3l3.5 8.5M9 6h6",
  },
  {
    name: "گوشی موبایل",
    min: 150,
    max: 900,
    d: "M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM10.5 18h3",
  },
  {
    name: "کنسول بازی",
    min: 200,
    max: 700,
    d: "M7 8h10a4 4 0 0 1 4 4v2a3 3 0 0 1-5.2 2L14 15h-4l-1.8 1A3 3 0 0 1 3 14v-2a4 4 0 0 1 4-4zM8 11v3M6.5 12.5h3",
  },
  {
    name: "دوربین عکاسی",
    min: 350,
    max: 950,
    d: "M5 8h3l1.5-2h5L16 8h3v11H5zM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  },
  {
    name: "لپ‌تاپ گیمینگ",
    min: 600,
    max: 1800,
    d: "M3 17.5h18M5.5 6.5h13v9h-13z",
  },
  {
    name: "خودرو",
    min: 5000,
    max: 25000,
    d: "M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v4h-2M3 13v4h2M3 13h18M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0",
  },
  {
    name: "آپارتمان",
    min: 40000,
    max: 150000,
    d: "M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6",
  },
];

// Fixed on the server and the first client paint, so hydration matches.
const INITIAL_ORDER = { index: 2, price: 9300000, tick: 0 };
const ORDER_INTERVAL = 2600;

// Never repeats the current item, so every tick visibly changes both lines.
function nextOrder(previous) {
  let index = Math.floor(Math.random() * ITEMS.length);
  if (index === previous.index) index = (index + 1) % ITEMS.length;

  const { min, max } = ITEMS[index];
  const price = (min + Math.floor(Math.random() * (max - min + 1))) * 100000;
  return { index, price, tick: previous.tick + 1 };
}

// Cars and apartments run to ten digits, which overflows the card at the
// normal size, so anything from a milliard up is written in words instead.
function formatPrice(value) {
  if (value >= 1000000000) {
    const milliards = value / 1000000000;
    return `${milliards.toLocaleString("fa-IR", {
      maximumFractionDigits: 1,
    })} میلیارد`;
  }

  return value.toLocaleString("fa-IR");
}

// The merchant card on the left feeding the hub. Reversed along with the rest,
// so this leg leads the sequence instead of trailing it.
const PAYOUT = "M195 281.5 L162 281.5";

const LANE_STAGGER = 0.3;

function PaymentFlow() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [order, setOrder] = useState(INITIAL_ORDER);

  // The order only rolls while the artwork is on screen, and not at all for
  // readers who asked for less motion — for them it stays on its opening value.
  useEffect(() => {
    if (!inView) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = setInterval(
      () => setOrder((previous) => nextOrder(previous)),
      ORDER_INTERVAL,
    );
    return () => clearInterval(id);
  }, [inView]);

  const item = ITEMS[order.index];
  const price = formatPrice(order.price);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // The illustration stays put; the pulse travelling the routes is the only
  // motion here.
  return (
    <div ref={ref} className="relative w-[564px] max-w-full shrink-0">
      <img
        src="/images/landing/debit-cards.webp"
        alt="اتصال فروشگاه شما به شبکه‌های پرداخت جهانی"
        width={564}
        height={564}
        className="h-auto w-full dark:hidden"
      />
      <img
        src="/images/landing/debit-cards-dark.webp"
        alt=""
        width={564}
        height={564}
        className="hidden h-auto w-full dark:block"
      />

      {/* Substitutions over the baked artwork: crypto in place of the card
          networks, the Ramzino mark in place of the wallet, and the store's
          running total. This is a separate layer from `.payment-flow` on
          purpose — that one is display:none under prefers-reduced-motion, and
          hiding these would bring the old Visa and PayPal logos back. */}
      <svg
        viewBox="0 0 564 564"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <clipPath id="pf-hub-clip">
          <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r} />
        </clipPath>

        {LANES.map((lane) => (
          <g key={`coin-${lane.id}`}>
            <circle
              cx={CHIP_CX}
              cy={lane.cy}
              r={CHIP_COVER_R}
              className="fill-[#F4FBFB] dark:fill-[#0E2A33]"
            />
            <circle
              cx={CHIP_CX}
              cy={lane.cy}
              r={CHIP_COVER_R}
              fill="none"
              strokeWidth="1"
              className="stroke-[#CFE9E7] dark:stroke-[#24505C]"
            />
            <image
              href={`/images/coins/${lane.coin}.webp`}
              x={CHIP_CX - COIN_SIZE / 2}
              y={lane.cy - COIN_SIZE / 2}
              width={COIN_SIZE}
              height={COIN_SIZE}
            />
          </g>
        ))}

        <image
          href="/images/favi.webp"
          x={HUB.cx - HUB.r}
          y={HUB.cy - HUB.r}
          width={HUB.r * 2}
          height={HUB.r * 2}
          clipPath="url(#pf-hub-clip)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Repaints the merchant card's inside, hiding the baked icon and
            price, then draws the current order over it. */}
        <rect
          x={CARD.x}
          y={CARD.y}
          width={CARD.w}
          height={CARD.h}
          rx={CARD.rx}
          className="fill-[#FFFFFF] dark:fill-[#07222A]"
        />

        <circle
          cx={DISC.cx}
          cy={DISC.cy}
          r={DISC.r}
          className="fill-[#5CD8CE] dark:fill-[#3FBFB8]"
        />
        {/* The fade and the placement have to live on different elements: the
            keyframes animate `transform`, and a CSS transform replaces an SVG
            transform attribute outright — putting both on one <g> dropped the
            icon at the origin. */}
        <g key={`icon-${order.tick}`} className="pf-amount">
          <g transform={`translate(${DISC.cx - 14} ${DISC.cy - 14}) scale(1.167)`}>
            <path
              d={item.d}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        <text
          key={`name-${order.tick}`}
          x={DISC.cx}
          y={ITEM_NAME_Y}
          textAnchor="middle"
          className="pf-amount fill-[#757878] text-[12px] dark:fill-[#9FB6BC]"
        >
          {item.name}
        </text>
        <text
          key={`price-${order.tick}`}
          x={DISC.cx}
          y={ITEM_PRICE_Y}
          textAnchor="middle"
          className={`pf-amount fill-[#1C2121] font-bold dark:fill-[#EAF7F7] ${
            price.length > 12 ? "text-[13px]" : "text-[16px]"
          }`}
        >
          {price}
        </text>
      </svg>

      <svg
        viewBox="0 0 564 564"
        aria-hidden="true"
        className={`payment-flow pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-1000 ease-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* The lane paths were authored to reach in past the chip edge, which
            was fine when the logo underneath was small. Now that a coin fills
            the disc, a trail running that far would cross the artwork. Punching
            the discs out of this mask stops each trail exactly on the circle. */}
        {/* userSpaceOnUse is required, not cosmetic: a mask defaults to
            maskUnits="objectBoundingBox", which derives its region from the
            masked element's bounding box. The USDT lane is a perfectly
            horizontal line, so its bbox has zero height and the default region
            collapsed — masking the whole trail out of existence. */}
        <mask
          id="pf-chip-mask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="564"
          height="564"
        >
          <rect x="0" y="0" width="564" height="564" fill="#fff" />
          {LANES.map((lane) => (
            <circle
              key={`mask-${lane.id}`}
              cx={CHIP_CX}
              cy={lane.cy}
              r={CHIP_COVER_R}
              fill="#000"
            />
          ))}
        </mask>

        {/* Slow orbit around the hub — the 45s rotation the footer's coin ring
            used to carry. It has to be dashed to read as turning at all, and it
            sits at r=62: clear of the teal disc, still inside the hub's card. */}
        <circle
          className="pf-orbit animate-spin-360"
          cx="282.5"
          cy="282"
          r="62"
          fill="none"
          stroke="#6CE4DB"
          strokeWidth="1.25"
          strokeDasharray="5 11"
        />

        {/* Ring breathing off the wallet hub, sized to the teal disc beneath it. */}
        <circle
          className="pf-hub"
          cx="282.5"
          cy="282"
          r="47.5"
          fill="none"
          stroke="#6CE4DB"
          strokeWidth="2"
        />

        {/* The store's leg leads, then the pulse fans out to each network. */}
        {inView ? (
          <path
            className="pf-trail"
            d={PAYOUT}
            pathLength="100"
            fill="none"
            stroke="#6CE4DB"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ animationDelay: "0s" }}
          />
        ) : null}

        {inView
          ? LANES.map((lane, i) => (
              <g key={lane.id}>
                {/* Chip lights up as the pulse reaches it. */}
                <circle
                  className="pf-chip"
                  cx={CHIP_CX}
                  cy={lane.cy}
                  r={CHIP_COVER_R}
                  fill="none"
                  stroke="#6CE4DB"
                  strokeWidth="1.5"
                  style={{ animationDelay: `${(i + 1) * LANE_STAGGER}s` }}
                />
                <path
                  className="pf-trail"
                  d={lane.d}
                  pathLength="100"
                  fill="none"
                  stroke="#6CE4DB"
                  strokeWidth="3"
                  strokeLinecap="round"
                  mask="url(#pf-chip-mask)"
                  style={{ animationDelay: `${(i + 1) * LANE_STAGGER}s` }}
                />
              </g>
            ))
          : null}
      </svg>
    </div>
  );
}

export default PaymentFlow;
