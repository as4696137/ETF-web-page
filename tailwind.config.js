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
      },
      maxWidth: {
        "170px": "170px",
      },
      maxHeight: {
        "170px": "170px",
      },
      margin: {
        "3%": "3%",
      },
      padding: {
        "5%": "5%",
        "2%": "2%",
        "70px": "70px",
        "100px": "100px",
      },
      colors: {
        "main-yellow": "#EAC852",
        "main-darkgreen": "#184B5B",
      },
      dropShadow: {
        text: "3px 4px 4px rgba(0, 0, 0, 0.4)",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "24px": "1.5rem",
      "32px": "2rem",
      "34px": "2.125rem",
      "42px": "2.625rem",
      "56px": "3.5rem",
      "120px": "7.5rem",
    },
    fontFamily: {
      noto: ['"Noto Sans TC"', "sans-serif"],
      Barlow: ['"Barlow"', "sans-serif"],
    },
  },
  plugins: [],
};
