/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#c8f542",
        dark: "#111111",
        card: "#1a1a1a",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ["Syne", "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
