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
          xl: "1440px",
        },
      },
      colors: {
        yellow: {
          DEFAULT: "#fcb72b",
          1: "#fff4df",
        },
        grey: {
          DEFAULT: "#939caa",
          1: "#e5ecf4",
          2: "#333A44",
        },
        darkNavy: "#495567",
        white: "#fff",
      },
      fontFamily: {
        lexenddeca: "LexendDeca",
        spacemono: "SpaceMono",
      },
    },
  },
  plugins: [],
}

