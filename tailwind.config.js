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
