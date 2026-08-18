import { useEffect, useState } from "react";
import classes from "hooks/classes";
import COINS, { formatAmount, formatMoney } from "./coins";
import style from "./style.module.css";

const SLOT_STYLES = [style.pillA, style.pillB, style.pillC];
const TICK_MS = 3200; // how often a price is re-rolled
const ROTATE_MS = 10000; // how often a card changes coin
const SWAP_HIDE_MS = 580; // swap content while it is dissolved out
const SWAP_END_MS = 1520; // matches the 1.5s cross-dissolve

// decorative chips — fixed coins, not part of the rotation
const CHIP_COINS = ["btc", "sol", "xrp"].map((id) =>
  COINS.find((c) => c.id === id),
);

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2c.6 5.2 4.2 8.8 9.4 9.4-5.2.6-8.8 4.2-9.4 9.4-.6-5.2-4.2-8.8-9.4-9.4C7.8 10.8 11.4 7.2 12 2Z" />
  </svg>
);

const rollValue = (coin) =>
  coin.price * (1 + (Math.random() * 2 - 1) * coin.vol);

const withRoll = (slot, coinIndex, previousValue) => {
  const coin = COINS[coinIndex];
  const value = rollValue(coin);
  return {
    ...slot,
    idx: coinIndex,
    value,
    change: coin.trend + (value / coin.price - 1) * 100,
    dir: previousValue == null ? null : value >= previousValue ? "up" : "down",
  };
};

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="6.5" width="18" height="12" rx="3" />
    <path d="M3 10.5h18" />
    <circle cx="16.5" cy="14.5" r="1.2" fill="#0C3B35" stroke="none" />
  </svg>
);

/**
 * Animated stand-in for /images/landing/vector-1.webp.
 *
 * Prices and percentages are generated in the browser — there is no request
 * and no market data. The first render is deterministic so the server markup
 * matches hydration; randomising only starts once mounted.
 */
function CoinStack({ className }) {
  const [slots, setSlots] = useState(() =>
    [0, 1, 2].map((i) => ({
      idx: i,
      value: COINS[i].price,
      change: COINS[i].trend,
      dir: null,
      swapping: false,
    })),
  );

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let alive = true;
    const timers = [];
    const later = (fn, ms) => {
      const id = setTimeout(() => alive && fn(), ms);
      timers.push(id);
      return id;
    };

    timers.push(
      setInterval(() => {
        if (document.hidden) return;
        setSlots((prev) => prev.map((s) => withRoll(s, s.idx, s.value)));
      }, TICK_MS),
    );

    // Pick the next coin for one card, skipping whatever the other two show,
    // so the same coin is never on screen twice.
    const advance = (prev, slotIndex) => {
      const taken = new Set(
        prev.filter((_, i) => i !== slotIndex).map((s) => s.idx),
      );
      let next = prev[slotIndex].idx;
      do {
        next = (next + 1) % COINS.length;
      } while (taken.has(next));

      return prev.map((s, i) =>
        i === slotIndex ? withRoll(s, next, null) : s,
      );
    };

    const setSwapping = (slotIndex, on) =>
      setSlots((prev) =>
        prev.map((s, i) => (i === slotIndex ? { ...s, swapping: on } : s)),
      );

    // stagger the three cards so they never flip together
    [0, 1, 2].forEach((i) => {
      later(() => {
        timers.push(
          setInterval(() => {
            if (document.hidden) return;
            if (reduced) {
              setSlots((prev) => advance(prev, i));
              return;
            }
            setSwapping(i, true);
            later(() => setSlots((prev) => advance(prev, i)), SWAP_HIDE_MS);
            later(() => setSwapping(i, false), SWAP_END_MS);
          }, ROTATE_MS),
        );
      }, i * 2000);
    });

    return () => {
      alive = false;
      timers.forEach((id) => {
        clearTimeout(id);
        clearInterval(id);
      });
    };
  }, []);

  return (
    <div className={classes(style.stage, className)} aria-hidden="true">
      {/* drifting glows, furthest back */}
      <span className={classes(style.glow, style.glowA)} />
      <span className={classes(style.glow, style.glowB)} />

      {/* background capsules */}
      <span className={style.cap} style={{ left: "6%", top: "-4%", width: "41%", height: "13%" }} />
      <span className={style.cap} style={{ left: "48%", top: "-4%", width: "41%", height: "13%" }} />
      <span className={style.cap} style={{ left: "-4%", top: "15%", width: "31%", height: "21%" }} />
      <span className={style.cap} style={{ left: "-4%", top: "42%", width: "30%", height: "16%" }} />
      <span className={style.cap} style={{ left: "56%", top: "42.5%", width: "31%", height: "16%" }} />
      <span className={style.cap} style={{ left: "-4%", top: "65%", width: "31%", height: "16%" }} />
      <span className={style.cap} style={{ left: "68%", top: "65%", width: "34%", height: "16%" }} />
      <span className={style.cap} style={{ left: "6%", top: "89%", width: "29%", height: "15%" }} />
      <span className={style.cap} style={{ left: "35%", top: "89%", width: "42%", height: "15%" }} />
      <span className={style.cap} style={{ left: "70%", top: "20%", width: "26%", height: "14%" }} />
      <span className={style.cap} style={{ left: "-8%", top: "-2%", width: "18%", height: "11%" }} />
      <span className={style.cap} style={{ left: "80%", top: "44%", width: "26%", height: "15%" }} />
      <span className={style.cap} style={{ left: "40%", top: "-8%", width: "22%", height: "10%" }} />

      <span className={classes(style.dot, style.dotA)} />
      <span className={classes(style.dot, style.dotB)} />
      <span className={classes(style.dot, style.dotC)} />
      <span className={classes(style.dot, style.dotD)} />
      <span className={classes(style.dot, style.dotE)} />

      <span className={classes(style.spark, style.sparkA)}>
        <SparkIcon />
      </span>
      <span className={classes(style.spark, style.sparkB)}>
        <SparkIcon />
      </span>
      <span className={classes(style.spark, style.sparkC)}>
        <SparkIcon />
      </span>

      {CHIP_COINS.map((coin, i) => (
        <span
          key={coin.id}
          className={classes(
            style.chip,
            [style.chipA, style.chipB, style.chipC][i],
          )}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {coin.paths.map((p, n) => (
              <path key={n} d={p.d} opacity={p.opacity} />
            ))}
          </svg>
        </span>
      ))}

      <span className={classes(style.slider, style.sliderIdle)}>
        <span className={style.rail}>
          <span className={style.knob} />
        </span>
      </span>

      <span className={classes(style.slider, style.sliderMini)}>
        <span className={style.rail}>
          <span className={style.fill} />
          <span className={style.knob} />
        </span>
      </span>

      <span className={classes(style.slider, style.sliderLive)}>
        <span className={style.rail}>
          <span className={style.fill} />
          <span className={style.knob} />
        </span>
      </span>

      <span className={style.cursor}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 2.5 19 12l-6.1 1.2L10.6 19 5 2.5Z"
            fill="#fff"
            stroke="#0C3B35"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className={classes(style.wallet, style.walletA)}>
        <WalletIcon />
      </span>
      <span className={classes(style.wallet, style.walletB)}>
        <WalletIcon />
      </span>

      {slots.map((slot, i) => {
        const coin = COINS[slot.idx];
        return (
          <span
            key={i}
            className={classes(
              style.pill,
              SLOT_STYLES[i],
              slot.swapping && style.swap,
            )}
          >
            <span className={style.icon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {coin.paths.map((p, n) => (
                  <path key={n} d={p.d} opacity={p.opacity} />
                ))}
              </svg>
            </span>

            <span className={style.meta}>
              <span className={style.sym}>
                {formatAmount(coin.amount, coin.sym)}
              </span>
              <span className={style.name}>{coin.name}</span>
            </span>

            <span className={style.figs}>
              <span
                className={classes(style.pct, slot.change < 0 && style.neg)}
              >
                {(slot.change < 0 ? "-" : "") +
                  Math.abs(slot.change).toFixed(2) +
                  "%"}
              </span>
              <span
                key={`${slot.idx}-${slot.value}`}
                className={classes(
                  style.price,
                  slot.dir === "up" && style.up,
                  slot.dir === "down" && style.down,
                )}
              >
                {formatMoney(slot.value, coin.dp)}
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default CoinStack;
