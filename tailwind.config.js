/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },
      padding: {
        "5%": "5%",
      },
      colors: {
        "main-yellow": "#EAC852",
        "main-darkgreen": "#184B5B",
      },
    },
    fontSize: {
      "32px": "2rem",
      "42px": "2.625rem",
      "56px": "3.5rem",
      "120px": "7.5rem",
    },
    fontFamily: {
      noto: ['"Noto Sans TC"'],
      Barlow: ['"Barlow"', "sans-serif"],
    },
  },
  plugins: [],
};
