/* eslint-disable @next/next/no-img-element */

const COINS = [
  { src: "/images/coins/USDT.webp", alt: "تتر", angle: "-66deg" },
  { src: "/images/coins/BNB.webp", alt: "بایننس کوین", angle: "-10deg" },
  { src: "/images/coins/ETH.webp", alt: "اتریوم", angle: "52deg" },
  { src: "/images/coins/BTC.webp", alt: "بیت‌کوین", angle: "180deg" },
  { src: "/images/coins/BCH.webp", alt: "بیت‌کوین کش", angle: "128deg" },
  { src: "/images/coins/APE.webp", alt: "ایپ‌کوین", angle: "238deg" },
];

const PHRASES = [
  "خرید و فروش ارز دیجیتال",
  "پرداخت‌های بین‌المللی",
  "درگاه پرداخت رمزارزی",
  "سریع، امن و حرفه‌ای",
];

function CryptoOrbit() {
  return (
    <div className="orbit-wrap" aria-hidden="true">
      <div className="orbit-stage">
        <div className="orbit-glow" />
        <div className="orbit-ring r1" />
        <div className="orbit-ring r2" />
        <div className="orbit-ring r3" />

        <div className="orbit-outer">
          <span className="orbit-outer-dot" />
          <span className="orbit-outer-dot" />
          <span className="orbit-outer-dot" />
        </div>

        <span className="orbit-spark s1" />
        <span className="orbit-spark s2" />
        <span className="orbit-spark s3" />
        <span className="orbit-spark s4" />

        <div className="orbit-wheel">
          {COINS.map((coin) => (
            <div
              key={coin.src}
              className="orbit-coin"
              style={{ "--a": coin.angle }}
            >
              <div className="orbit-coin-face">
                <img src={coin.src} alt={coin.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="orbit-bar">
          <span className="orbit-plus left">+</span>
          <span className="orbit-plus right">+</span>
        </div>

        <div className="orbit-node" />
        <div className="orbit-node-muted" />

        <div className="orbit-card">
          <div className="orbit-wallet">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
              <circle
                cx="16.5"
                cy="14"
                r="1.2"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
          <div className="orbit-copy">
            <span className="orbit-title">صرافی رمزینو</span>
            <span className="orbit-sub-wrap">
              {PHRASES.map((phrase, i) => (
                <span
                  key={phrase}
                  className="orbit-sub"
                  style={{ animationDelay: `${i * 2}s` }}
                >
                  {phrase}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .orbit-wrap {
          --ring-1: rgba(19, 78, 94, 0.12);
          --ring-2: rgba(19, 78, 94, 0.1);
          --ring-3: rgba(78, 223, 212, 0.35);
          --dash: rgba(19, 78, 94, 0.08);
          --outer-line: rgba(19, 78, 94, 0.1);
          --outer-dot: #e4eaec;
          --spark: #eaeff1;
          --stage-bg: radial-gradient(
            circle at 50% 49%,
            rgba(78, 223, 212, 0.1) 0 26%,
            rgba(78, 223, 212, 0.04) 27% 48%,
            transparent 56%
          );
          --glow-shadow: none;
          --bar-bg: linear-gradient(90deg, #fbfdfd, #ffffff 45%, #fbfdfd);
          --bar-shadow: 0 10px 30px rgba(16, 62, 74, 0.08),
            inset 0 0 0 1px rgba(19, 78, 94, 0.05);
          --bar-line: linear-gradient(90deg, transparent, #dfe7e9, transparent);
          --plus-bg: #f4f8f9;
          --plus-border: #e3ebed;
          --plus-color: #9db1b6;
          --card-bg: #ffffff;
          --card-border: rgba(19, 78, 94, 0.08);
          --card-shadow: 0 12px 34px rgba(16, 62, 74, 0.12);
          --title: #0c0c0c;
          --sub: #7d9195;
          --node: #4edfd4;
          --node-ring: #ffffff;
          --node-glow: rgba(78, 223, 212, 0.5);
          --node-muted: #e8eef0;
          --node-muted-ring: #ffffff;
          --stem: #d3dee0;
          --coin-bg: #ffffff;
          --coin-border: rgba(19, 78, 94, 0.08);
          --coin-shadow: 0 6px 18px rgba(16, 62, 74, 0.12);
          --wallet-bg: #d7f7f3;
          --wallet-color: #1aa79c;

          position: relative;
          width: 100%;
          max-width: 720px;
          aspect-ratio: 720 / 517;
          container-type: inline-size;
          direction: ltr;
          flex: 1 1 auto;
        }

        :global(body.dark) .orbit-wrap {
          --ring-1: rgba(168, 199, 204, 0.34);
          --ring-2: rgba(168, 199, 204, 0.26);
          --ring-3: rgba(78, 223, 212, 0.3);
          --dash: rgba(120, 162, 170, 0.16);
          --outer-line: rgba(168, 199, 204, 0.38);
          --outer-dot: #33586a;
          --spark: #4d7076;
          --stage-bg: radial-gradient(
            circle at 50% 49%,
            rgba(7, 54, 58, 0.95) 0 22%,
            rgba(4, 40, 44, 0.86) 34%,
            rgba(2, 27, 31, 0.55) 45%,
            rgba(1, 18, 22, 0.22) 54%,
            transparent 63%
          );
          --glow-shadow: 0 0 90px rgba(0, 0, 0, 0.45) inset,
            0 0 70px rgba(150, 240, 235, 0.05);
          --bar-bg: linear-gradient(
            90deg,
            #07333b,
            #0c3c44 40%,
            #0d4349 60%,
            #07333b
          );
          --bar-shadow: 0 8px 22px rgba(0, 0, 0, 0.65),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          --bar-line: linear-gradient(90deg, transparent, #1d6570, transparent);
          --plus-bg: #0d3a43;
          --plus-border: #164a55;
          --plus-color: #dceeed;
          --card-bg: #102f35;
          --card-border: #40656d;
          --card-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
          --title: #ffffff;
          --sub: #bad0d1;
          --node: #27e5d8;
          --node-ring: #b4fffa;
          --node-glow: rgba(26, 235, 219, 0.65);
          --node-muted: #33484b;
          --node-muted-ring: #586a6d;
          --stem: #4b8d92;
          --coin-bg: #082d35;
          --coin-border: rgba(134, 226, 223, 0.55);
          --coin-shadow: 0 5px 15px rgba(0, 0, 0, 0.55);
          --wallet-bg: #c7f3ef;
          --wallet-color: #0d6e69;
        }

        /* The whole scene is laid out on a 720x517 design grid. --u is one
           design pixel, so the scene scales fluidly with the container. */
        .orbit-stage {
          --u: calc(100cqw / 720);
          position: absolute;
          inset: 0;
          background: var(--stage-bg);
        }

        .orbit-stage::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
              circle at 50% 49%,
              transparent 0 35%,
              var(--ring-3) 35.5%,
              transparent 36%
            ),
            radial-gradient(
              circle at 50% 49%,
              transparent 0 47%,
              var(--ring-1) 47.3%,
              transparent 47.7%
            ),
            radial-gradient(
              circle at 50% 49%,
              transparent 0 55%,
              var(--ring-2) 55.3%,
              transparent 55.7%
            );
        }

        .orbit-glow {
          position: absolute;
          left: 50%;
          top: 49%;
          width: calc(var(--u) * 520);
          height: calc(var(--u) * 520);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          box-shadow: var(--glow-shadow);
        }

        .orbit-ring {
          position: absolute;
          left: 50%;
          top: 49%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .orbit-ring.r1 {
          width: calc(var(--u) * 510);
          height: calc(var(--u) * 510);
          border: 1px solid var(--ring-1);
        }
        .orbit-ring.r2 {
          width: calc(var(--u) * 355);
          height: calc(var(--u) * 355);
          border: 1px solid var(--ring-2);
        }
        .orbit-ring.r3 {
          width: calc(var(--u) * 274);
          height: calc(var(--u) * 274);
          border: 1px solid var(--ring-3);
        }
        .orbit-ring.r1::before,
        .orbit-ring.r2::before {
          content: "";
          position: absolute;
          inset: calc(var(--u) * 16);
          border-radius: 50%;
          border: 1px dashed var(--dash);
        }

        .orbit-outer {
          position: absolute;
          left: 50%;
          top: 49%;
          width: calc(var(--u) * 520);
          height: calc(var(--u) * 520);
          margin: calc(var(--u) * -260);
          border: 1px solid var(--outer-line);
          border-radius: 50%;
          animation: orbit-outer-spin 36s linear infinite;
        }
        .orbit-outer-dot {
          position: absolute;
          width: calc(var(--u) * 16);
          height: calc(var(--u) * 16);
          border-radius: 50%;
          background: var(--outer-dot);
        }
        .orbit-outer-dot:nth-child(1) {
          left: calc(var(--u) * -8);
          top: calc(var(--u) * 165);
        }
        .orbit-outer-dot:nth-child(2) {
          right: calc(var(--u) * 48);
          top: calc(var(--u) * 40);
        }
        .orbit-outer-dot:nth-child(3) {
          right: calc(var(--u) * 53);
          bottom: calc(var(--u) * 123);
        }
        @keyframes orbit-outer-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .orbit-spark {
          position: absolute;
          width: calc(var(--u) * 6);
          height: calc(var(--u) * 6);
          border-radius: 50%;
          background: var(--spark);
          z-index: 2;
        }
        .orbit-spark.s1 {
          left: calc(var(--u) * 300);
          top: calc(var(--u) * 142);
        }
        .orbit-spark.s2 {
          right: calc(var(--u) * 272);
          top: calc(var(--u) * 98);
        }
        .orbit-spark.s3 {
          right: calc(var(--u) * 184);
          top: calc(var(--u) * 326);
        }
        .orbit-spark.s4 {
          left: calc(var(--u) * 231);
          top: calc(var(--u) * 116);
        }

        .orbit-wheel {
          position: absolute;
          left: 50%;
          top: 49%;
          width: calc(var(--u) * 330);
          height: calc(var(--u) * 330);
          margin: calc(var(--u) * -165);
          z-index: 3;
          animation: orbit-spin 18s linear infinite;
        }
        @keyframes orbit-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .orbit-coin {
          position: absolute;
          left: 50%;
          top: 50%;
          width: calc(var(--u) * 58);
          height: calc(var(--u) * 58);
          margin: calc(var(--u) * -29);
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 1px solid var(--coin-border);
          background: var(--coin-bg);
          box-shadow: var(--coin-shadow);
          transform: rotate(var(--a)) translateY(calc(var(--u) * -151));
        }
        .orbit-coin-face {
          width: calc(var(--u) * 42);
          height: calc(var(--u) * 42);
          border-radius: 50%;
          overflow: hidden;
          transform: rotate(calc(var(--a) * -1));
          animation: orbit-counter 18s linear infinite;
        }
        .orbit-coin-face img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @keyframes orbit-counter {
          to {
            transform: rotate(calc(var(--a) * -1 - 360deg));
          }
        }

        .orbit-bar {
          position: absolute;
          left: calc(var(--u) * 66);
          right: calc(var(--u) * 66);
          top: calc(var(--u) * 235);
          height: calc(var(--u) * 55);
          border-radius: calc(var(--u) * 28);
          background: var(--bar-bg);
          box-shadow: var(--bar-shadow);
          z-index: 4;
        }
        .orbit-bar::before,
        .orbit-bar::after {
          content: "";
          position: absolute;
          top: calc(var(--u) * 27);
          height: 1px;
          background: var(--bar-line);
        }
        .orbit-bar::before {
          left: calc(var(--u) * 42);
          width: calc(var(--u) * 125);
        }
        .orbit-bar::after {
          right: calc(var(--u) * 42);
          width: calc(var(--u) * 125);
        }
        .orbit-plus {
          position: absolute;
          top: 50%;
          width: calc(var(--u) * 31);
          height: calc(var(--u) * 31);
          margin-top: calc(var(--u) * -15);
          border-radius: 50%;
          background: var(--plus-bg);
          border: calc(var(--u) * 2) solid var(--plus-border);
          color: var(--plus-color);
          font-size: calc(var(--u) * 22);
          line-height: calc(var(--u) * 25);
          text-align: center;
        }
        .orbit-plus.left {
          left: calc(var(--u) * 150);
        }
        .orbit-plus.right {
          right: calc(var(--u) * 150);
        }

        .orbit-node {
          position: absolute;
          left: 50%;
          top: calc(var(--u) * 176);
          width: calc(var(--u) * 27);
          height: calc(var(--u) * 27);
          margin-left: calc(var(--u) * -13);
          border-radius: 50%;
          background: var(--node);
          border: calc(var(--u) * 4) solid var(--node-ring);
          box-shadow: 0 0 20px var(--node-glow);
          z-index: 6;
          animation: orbit-pulse 2s ease-in-out infinite;
        }
        .orbit-node::after {
          content: "";
          position: absolute;
          left: calc(var(--u) * 11);
          top: calc(var(--u) * 23);
          width: calc(var(--u) * 2);
          height: calc(var(--u) * 38);
          background: var(--stem);
        }
        @keyframes orbit-pulse {
          50% {
            transform: scale(1.12);
            filter: brightness(1.15);
          }
        }

        .orbit-node-muted {
          position: absolute;
          left: 50%;
          top: calc(var(--u) * 316);
          width: calc(var(--u) * 28);
          height: calc(var(--u) * 28);
          margin-left: calc(var(--u) * -14);
          border-radius: 50%;
          background: var(--node-muted);
          border: calc(var(--u) * 4) solid var(--node-muted-ring);
          z-index: 6;
        }
        .orbit-node-muted::before {
          content: "";
          position: absolute;
          left: calc(var(--u) * 10);
          top: calc(var(--u) * -30);
          width: calc(var(--u) * 2);
          height: calc(var(--u) * 26);
          background: var(--stem);
        }
        .orbit-node-muted::after {
          content: "";
          position: absolute;
          left: calc(var(--u) * 10);
          top: calc(var(--u) * 24);
          width: calc(var(--u) * 2);
          height: calc(var(--u) * 34);
          background: var(--stem);
        }

        .orbit-card {
          position: absolute;
          left: 50%;
          top: calc(var(--u) * 238);
          width: calc(var(--u) * 188);
          height: calc(var(--u) * 50);
          transform: translateX(-50%);
          border-radius: calc(var(--u) * 26);
          background: var(--card-bg);
          border: calc(var(--u) * 4) solid var(--card-border);
          box-shadow: var(--card-shadow);
          z-index: 7;
          display: flex;
          align-items: center;
          padding: calc(var(--u) * 4) calc(var(--u) * 7) calc(var(--u) * 4)
            calc(var(--u) * 42);
          direction: rtl;
        }
        .orbit-wallet {
          position: absolute;
          left: calc(var(--u) * 4);
          top: calc(var(--u) * 4);
          width: calc(var(--u) * 38);
          height: calc(var(--u) * 38);
          border-radius: 50%;
          background: var(--wallet-bg);
          color: var(--wallet-color);
          display: grid;
          place-items: center;
          box-shadow: 0 0 14px var(--node-glow);
          animation: orbit-float 2.8s ease-in-out infinite;
        }
        .orbit-wallet svg {
          width: calc(var(--u) * 20);
          height: calc(var(--u) * 20);
        }
        @keyframes orbit-float {
          50% {
            transform: translateY(calc(var(--u) * -3));
          }
        }

        .orbit-copy {
          min-width: 0;
          flex: 1;
          text-align: center;
          line-height: 1.15;
        }
        .orbit-title {
          display: block;
          font-size: calc(var(--u) * 13);
          font-weight: 800;
          color: var(--title);
          white-space: nowrap;
        }
        .orbit-sub-wrap {
          display: block;
          position: relative;
          height: calc(var(--u) * 15);
          margin-top: calc(var(--u) * 3);
        }
        .orbit-sub {
          position: absolute;
          inset: 0;
          font-size: calc(var(--u) * 9);
          color: var(--sub);
          white-space: nowrap;
          opacity: 0;
          animation: orbit-text 8s ease-in-out infinite;
        }
        @keyframes orbit-text {
          0% {
            opacity: 0;
            transform: translateY(calc(var(--u) * 6));
            filter: blur(2px);
          }
          4%,
          21% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
          25%,
          100% {
            opacity: 0;
            transform: translateY(calc(var(--u) * -6));
            filter: blur(2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-sub {
            animation: none;
            opacity: 0;
          }
          .orbit-sub:first-child {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default CryptoOrbit;
