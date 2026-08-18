/* eslint-disable @next/next/no-img-element */

/**
 * Animated backdrop for the Gateway hero.
 *
 * It tells the page's own story in one loop: a checkout code is scanned, the
 * payment is confirmed in a couple of currencies, and settlement keeps ticking
 * across the grid underneath. Every layer runs on the same CYCLE duration and
 * is placed in the loop by its animation-delay, so the beats stay in step
 * instead of drifting into three unrelated loops.
 *
 * Everything here is decoration behind the headline: the whole tree is
 * aria-hidden and pointer-events-none, and the busy layers (code, coins,
 * receipts) are desktop-only — on a stacked mobile hero the copy runs the full
 * width and would sit right on top of them.
 */

// One pass of the story, in seconds. The keyframes in tailwind.config.js are
// authored as percentages of this, so the beats below are all fractions of it.
const CYCLE = 9;

// The grid the lit cells snap to, in px. Matches the static grid drawn below,
// so a lit cell always lands on a real cell rather than straddling a line.
const CELL = 56;

// Settlement traffic: [column, row] on the CELL grid. The hero's card artwork
// and its copy fill the middle of the section, so the lit cells stay in the
// clear band across the top — rows 0-2, which end above both. They're
// top-anchored like the grid itself, so a lit cell always lands on a cell.
// Delays are spread across the cycle to read as independent transactions.
const CELLS = [
  [0, 1],
  [2, 0],
  [3, 2],
  [5, 1],
  [7, 0],
  [9, 2],
  [11, 1],
  [13, 0],
  [15, 2],
  [16, 0],
  [18, 1],
  [20, 0],
  [21, 2],
  [19, 2],
];

// The currencies a merchant actually gets paid in. Scattered rather than
// aligned: the sizes and vertical offsets are all different so the group reads
// as loose change floating around the hero instead of a row of icons. They
// float continuously rather than on the cycle — they're ambient, not a beat in
// the story. Placement still respects the clear bands, so BCH is the one that
// drops into the bottom band on the far side.
const COINS = [
  { src: "/images/coins/BTC.webp", alt: "بیت‌کوین", pos: "left-[2%] top-[8%]", size: 68, delay: 0 },
  { src: "/images/coins/ETH.webp", alt: "اتریوم", pos: "left-[14%] top-[1%]", size: 46, delay: 1.1 },
  { src: "/images/coins/USDT.webp", alt: "تتر", pos: "left-[28%] top-[12%]", size: 60, delay: 2.2 },
  { src: "/images/coins/BNB.webp", alt: "بایننس‌کوین", pos: "left-[43%] top-[15%]", size: 44, delay: 0.6 },
  { src: "/images/coins/BCH.webp", alt: "بیت‌کوین‌کش", pos: "left-[72%] bottom-[10%]", size: 54, delay: 1.7 },
];

// Confirmations surface only after the scan finishes (28% of the cycle), so
// the loop reads as cause and effect. They sit in the bottom band next to the
// code, below both the artwork and the call to action.
const RECEIPTS = [
  { amount: "۰٫۰۲۴ BTC", label: "تأیید شد", pos: "left-[14%] bottom-[16%]", delay: 3.4 },
  { amount: "۴۵۰ USDT", label: "تأیید شد", pos: "left-[31%] bottom-[5%]", delay: 5 },
  { amount: "۱۲٬۵۰۰٬۰۰۰ تومان", label: "تسویه شد", pos: "left-[52%] bottom-[13%]", delay: 6.6 },
];

// A 9x9 checkout code. The listed indices are the dark modules; the rest stay
// as faint paper so the block still reads as a code rather than noise.
const QR_MODULES = new Set([
  0, 1, 2, 7, 8, 9, 10, 11, 16, 17, 18, 27, 29, 31, 33, 36, 38, 40, 42, 44, 45,
  47, 49, 53, 60, 62, 64, 69, 70, 71, 72, 73, 74, 78, 79, 80,
]);

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden text-[#0F6F6E] dark:text-[#9FF3EA]"
    >
      {/* Ledger grid, faded toward the edges so it never meets a border. */}
      <div
        className="absolute inset-0 opacity-[0.09] dark:opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          maskImage:
            "radial-gradient(80% 80% at 40% 45%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(80% 80% at 40% 45%, #000 30%, transparent 100%)",
        }}
      />

      {/* The lit teal reads much hotter against the dark gradient than the
          light one, so the whole layer is damped a stop in dark mode. */}
      <div className="absolute inset-0 dark:opacity-60">
        {CELLS.map(([col, row], index) => (
          <span
            key={`${col}-${row}`}
            className="absolute hidden lg:block rounded-[3px] bg-[currentColor] opacity-[0.05] animate-cell-lit motion-reduce:animate-none"
            style={{
              left: col * CELL + 1,
              top: row * CELL + 1,
              width: CELL - 2,
              height: CELL - 2,
              animationDelay: `${((index * 0.61) % CYCLE).toFixed(2)}s`,
            }}
          />
        ))}
      </div>

      {COINS.map((coin) => (
        <span
          key={coin.src}
          className={`absolute hidden lg:flex items-center justify-center rounded-full border border-[rgba(15,111,110,0.20)] dark:border-[rgba(159,243,234,0.25)] bg-[rgba(255,255,255,0.55)] dark:bg-[rgba(255,255,255,0.08)] backdrop-blur-[2px] animate-float motion-reduce:animate-none ${coin.pos}`}
          style={{
            width: coin.size,
            height: coin.size,
            animationDelay: `${coin.delay}s`,
          }}
        >
          <img
            src={coin.src}
            alt={coin.alt}
            width={coin.size - 18}
            height={coin.size - 18}
            className="opacity-80"
          />
        </span>
      ))}

      {/* Checkout code being scanned — the first beat of the cycle. */}
      <div className="absolute hidden lg:block left-[3%] bottom-[4%] w-[104px]">
        <div className="relative h-[104px] w-[104px] overflow-hidden">
          {/* Tailwind's row scale stops at 6, so the 9x9 module grid is sized
              inline rather than with grid-rows-*. */}
          <div
            className="grid h-full w-full gap-[3px]"
            style={{
              gridTemplateColumns: "repeat(9, minmax(0, 1fr))",
              gridTemplateRows: "repeat(9, minmax(0, 1fr))",
            }}
          >
            {Array.from({ length: 81 }).map((_, index) =>
              QR_MODULES.has(index) ? (
                <span
                  key={index}
                  className="rounded-[2px] bg-[currentColor] opacity-[0.22] animate-qr-dot motion-reduce:animate-none"
                  style={{ animationDelay: `${((index * 0.04) % 3.2).toFixed(2)}s` }}
                />
              ) : (
                <span key={index} className="rounded-[2px] bg-[currentColor] opacity-[0.06]" />
              )
            )}
          </div>
          <span
            className="absolute inset-y-0 left-0 w-6 animate-qr-scan motion-reduce:hidden"
            style={{
              background:
                "linear-gradient(90deg, transparent, currentColor, transparent)",
              opacity: 0.22,
            }}
          />
        </div>

        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[currentColor] opacity-40" />
        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full border border-[currentColor] animate-check-ping motion-reduce:animate-none" />
      </div>

      {RECEIPTS.map((receipt) => (
        <span
          key={receipt.amount}
          className={`absolute hidden lg:inline-flex items-center gap-2 rounded-full border border-[rgba(15,111,110,0.22)] dark:border-[rgba(159,243,234,0.28)] bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(255,255,255,0.08)] backdrop-blur-[2px] px-3 py-1.5 text-[11px] font-medium opacity-0 animate-chip-cycle motion-reduce:hidden ${receipt.pos}`}
          style={{ animationDelay: `${receipt.delay}s` }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[currentColor]" />
          {receipt.amount}
          <span className="opacity-70">{receipt.label}</span>
        </span>
      ))}
    </div>
  );
}

export default Backdrop;
