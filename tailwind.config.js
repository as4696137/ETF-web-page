/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },
      width: {
        "31%": "31%",
        "7/20": "35%",
        "9/20": "45%",
        "11/20": "55%",
        "13/20": "65%",
      },
      maxWidth: {
        "170px": "170px",
      },
      maxHeight: {
        "170px": "170px",
      },
      margin: {
        "3%": "3%",
        "0.5em": "0.5em",
      },
      padding: {
        "5%": "5%",
        "2%": "2%",
        "1%": "1%",
        "70px": "70px",
        "100px": "100px",
        "0.5em": "0.5em",
      },
      colors: {
        "main-yellow": "#EAC852",
        "main-darkgreen": "#184B5B",
        "font-black": "#282828",
        "font-gray": "#545454",
        "bg-gray": "#F5F5F5",
      },
      dropShadow: {
        text: "3px 4px 4px rgba(0, 0, 0, 0.4)",
      },
    },
    fontSize: {
      sm: "0.8rem",
      md: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "22px": "1.375rem",
      "24px": "1.5rem",
      "32px": "2rem",
      "34px": "2.125rem",
      "42px": "2.625rem",
      "56px": "3.5rem",
      "62px": "3.875rem",
      "66px": "4.125rem",
      "70px": "4.375rem",
      "96px": "6rem",
      "120px": "7.5rem",
    },
    fontFamily: {
      noto: ['"Noto Sans TC"', "sans-serif"],
      Barlow: ['"Barlow"', "sans-serif"],
    },
  },
  plugins: [],
};
