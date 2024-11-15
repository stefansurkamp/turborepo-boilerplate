/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({});
    }),
  ],
};
