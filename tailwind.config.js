/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mob': {'min': '0px', 'max': '375px'},
      'tab': {'min': '376px', 'max': '768px'},
      'lab': {'min': '769px', 'max': '1279px'},
      'des': {'min': '1280px'},
    },
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

