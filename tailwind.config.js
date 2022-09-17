/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryLightGray: "hsl(0, 0%, 95%)",
      },
      fontSize: {
        default: "15px",
      },
      fontFamily: {
        lexendDeca: ["Lexend Deca", "sans-serif"],
        bigShouldersDisplay: ["Big Shoulders Display", "cursive"],
      },
    },
  },
  plugins: [],
};
