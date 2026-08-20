/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      primaryDark: "var(--color-primary-dark)",
      primaryText: "var(--color-primary-text)",
      themeColor: "var(--color-theme)",
      title: "var(--color-title)",
      des: "var(--color-des)",
      white: "var(--color-white)",
      black: "var(--color-black)",
    },
    extend: {
      fontFamily: {
        yekan: ["var(--font-yekan)"],
      },
      backgroundImage: {},
      boxShadow: {
        medium: "0px 0px 30px 2px rgba(0,0,0,0.1)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.22", transform: "scale(1)" },
          "50%": { opacity: "0.38", transform: "scale(1.02)" },
        },
        meshFlow: {
          "0%": { transform: "translate(0%, 0%) scale(1.18)" },
          "25%": { transform: "translate(4%, -5%) scale(1.24)" },
          "50%": { transform: "translate(-3%, 4%) scale(1.18)" },
          "75%": { transform: "translate(-5%, -3%) scale(1.24)" },
          "100%": { transform: "translate(0%, 0%) scale(1.18)" },
        },
        logoPulse: {
          "0%, 100%": { transform: "scale(0.86)", opacity: "0.5" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        iconFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Data packets riding the gateway connector rail, right to left. The
        // travel distance comes from the rail's measured width, passed in as
        // --rail-len, so the dots always land on the outer step centres.
        railPacket: {
          "0%": { transform: "translate3d(0,0,0) scale(0.4)", opacity: "0" },
          "15%": {
            transform:
              "translate3d(calc(-0.15 * var(--rail-len, 600px)),0,0) scale(1)",
            opacity: "0.9",
          },
          "85%": {
            transform:
              "translate3d(calc(-0.85 * var(--rail-len, 600px)),0,0) scale(1)",
            opacity: "0.9",
          },
          "100%": {
            transform:
              "translate3d(calc(-1 * var(--rail-len, 600px)),0,0) scale(0.4)",
            opacity: "0",
          },
        },
        // Testimonial rail. The track holds the list twice, so translating by
        // exactly half its width lands the copy where the original started and
        // the loop has no visible seam. RTL drifts the other way.
        voicesDrift: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(50%)" },
        },
        // Backdrop for the testimonial rail. Two glows on periods that never
        // divide into each other, so the wash never settles into a shape a
        // visitor can recognise twice.
        auroraDriftA: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-6%, 5%, 0) scale(1.14)" },
        },
        auroraDriftB: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1.1)" },
          "50%": { transform: "translate3d(7%, -4%, 0) scale(0.95)" },
        },
        tipPing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        haloPulse: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "70%, 100%": { transform: "scale(1.55)", opacity: "0" },
        },
        // The Gateway hero backdrop runs one 9s story: the checkout code is
        // scanned, confirmations surface, and settlement cells keep ticking
        // underneath. Every layer below shares that duration and is placed in
        // the cycle by its animation-delay, so the beats stay in step.
        // Travels on `left` rather than translateX: a percentage translate
        // resolves against the scanline's own width, which would inch it a few
        // px instead of crossing the code. `left` resolves against the code
        // block, and pinning it also keeps the sweep starting at the same edge
        // in an RTL page, where an auto-positioned absolute element would
        // otherwise sit against the right edge.
        qrScan: {
          "0%": { left: "-25%", opacity: "0" },
          "2%": { opacity: "1" },
          "28%": { left: "100%", opacity: "1" },
          "32%, 100%": { left: "100%", opacity: "0" },
        },
        qrDot: {
          "0%, 100%": { opacity: "0.22" },
          "50%": { opacity: "0.6" },
        },
        checkPing: {
          "0%, 30%": { transform: "scale(0.5)", opacity: "0" },
          "34%": { opacity: "0.7" },
          "52%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
        chipCycle: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "6%, 22%": { opacity: "1", transform: "translateY(0)" },
          "30%, 100%": { opacity: "0", transform: "translateY(-8px)" },
        },
        cellLit: {
          "0%, 26%, 100%": { opacity: "0.05" },
          "8%": { opacity: "0.45" },
        },
        // The settlement section's backdrop. Two bands of "current" drift at
        // different speeds for parallax; each travels exactly one period of its
        // own repeating gradient, so the loop is seamless with no jump.
        currentDrift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(320px)" },
        },
        currentDriftFar: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(480px)" },
        },
        // The recurring payout cycle, as a slow breath rather than a beat.
        liquiditySwell: {
          "0%, 100%": { transform: "scale(0.92)", opacity: "0.3" },
          "50%": { transform: "scale(1.08)", opacity: "0.6" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        float: "float 4s ease-in-out infinite",
        "grid-pulse": "gridPulse 8s ease-in-out infinite",
        "mesh-flow": "meshFlow 28s ease-in-out infinite",
        "logo-pulse": "logoPulse 1.3s ease-in-out infinite",
        "icon-float": "iconFloat 3s ease-in-out infinite",
        // Slow continuous turn for large landing artwork.
        "spin-360": "spin360 45s linear infinite",
        "rail-packet": "railPacket 3.6s linear infinite",
        "voices-drift": "voicesDrift 46s linear infinite",
        "aurora-a": "auroraDriftA 34s ease-in-out infinite",
        "aurora-b": "auroraDriftB 47s ease-in-out infinite",
        "tip-ping": "tipPing 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "halo-pulse": "haloPulse 2.2s ease-out infinite",
        // Gateway hero backdrop. These share the 9s cycle so the scan, the
        // confirmations and the settlement cells stay one sequence.
        "qr-scan": "qrScan 9s ease-in-out infinite",
        "qr-dot": "qrDot 3.2s ease-in-out infinite",
        "check-ping": "checkPing 9s ease-out infinite",
        "chip-cycle": "chipCycle 9s ease-in-out infinite",
        "cell-lit": "cellLit 9s ease-in-out infinite",
        "current-drift": "currentDrift 16s linear infinite",
        "current-drift-far": "currentDriftFar 26s linear infinite",
        "liquidity-swell": "liquiditySwell 9s ease-in-out infinite",
      },
    },
    screens: {
      xs: "380px",
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "2md": "908px",
      // => @media (min-width: 908px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
