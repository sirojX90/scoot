/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1200px",
        },
      },
      colors: {
        yellow: {
          DEFAULT: "#fcb72b",
          1: "#fff4df",
        },
        grey: {
          DEFAULT: "#939caa",
          1: "#e5ecf4"
        },
        darkNavy: "#495567",
      },
      fontFamily: {
        lexenddeca: "LexendDeca",
        spacemono: "SpaceMono",
      },
    },
  },
  plugins: [],
}

