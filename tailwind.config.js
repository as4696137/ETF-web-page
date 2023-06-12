/** @type {import('tailwindcss').Config} */

import svgr from "vite-plugin-svgr";
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },

      // top/right/bottom/left/inset
      inset: {
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
      },
      width: {
        "1/10": "10%",
        "19%": "19%",
        "28%": "28%",
        "31%": "31%",
        "3/20": "15%",
        "3/10": "30%",
        "7/20": "35%",
        "9/20": "45%",
        "11/20": "55%",
        "13/20": "65%",
        "7/10": "70%",
        "15/20": "75%",
        "17/20": "85%",
        "96%": "96%",
      },
      height: {
        "2px": "2px",
        "7/10": "70%",
      },
      maxWidth: {
        "36px": "36px",
        "55px": "55px",
        "170px": "170px",
        "1/2": "50%",
      },
      maxHeight: {
        "170px": "170px",
        "1/3": "33%",
      },
      minWidth: {
        "1/2": "50%",
      },
      margin: {
        "3%": "3%",
        "5%": "5%",
        "0.5em": "0.5em",
      },
      padding: {
        "20%": "20%",
        "9%": "9%",
        "8%": "8%",
        "5%": "5%",
        "3%": "3%",
        "2%": "2%",
        "1%": "1%",
        "10px": "10px",
        "70px": "70px",
        "100px": "100px",
        "120px": "120px",
        "0.5em": "0.5em",
        "1em": "1em",
      },
      colors: {
        "main-yellow": "#EAC852",
        "main-yellow-dark": "#c48a33e4",
        "main-darkgreen": "#184B5B",
        "font-black": "#282828",
        "font-gray": "#545454",
        "bg-gray": "#F5F5F5",
      },
      boxShadow: {
        topBtn: "0px 0px 8px rgba(0, 0, 0, 0.66)",
      },
      dropShadow: {
        text: "3px 4px 4px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "p2-circle": "url('src/img/p2/circle.png')",
      },
      flexGrow: {
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
    },
    fontSize: {
      xs: "0.75rem",
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
      "26px": "1.625rem",
      "28px": "1.75rem",
      "30px": "1.875rem",
      "32px": "2rem",
      "34px": "2.125rem",
      "42px": "2.625rem",
      "56px": "3.5rem",
      "62px": "3.875rem",
      "66px": "4.125rem",
      "70px": "4.375rem",
      "92px": "5.75rem",
      "96px": "6rem",
      "100px": "6.25rem",
      "120px": "7.5rem",
    },
    fontFamily: {
      noto: ['"Noto Sans TC"', "sans-serif"],
      Barlow: ['"Barlow"', "sans-serif"],
    },
  },
  plugins: [
    svgr(),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
