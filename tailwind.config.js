/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./public/assets/hero.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        taviraj: ["Taviraj", "serif"],
        karma: ["Karma", "serif"],
      },
    },
  },
  plugins: [],
};
