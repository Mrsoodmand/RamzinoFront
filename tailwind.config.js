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
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        float: "float 4s ease-in-out infinite",
        "grid-pulse": "gridPulse 8s ease-in-out infinite",
        "mesh-flow": "meshFlow 28s ease-in-out infinite",
        "logo-pulse": "logoPulse 1.3s ease-in-out infinite",
        "icon-float": "iconFloat 3s ease-in-out infinite",
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
