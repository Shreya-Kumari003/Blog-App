const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite—react/**/*.{js, jsx,ts ,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        comicsans:["Comic Neue","cursive"],
        couriernew: ["Courier Prime", "monospace"],
      }
    },
  },
  plugins: [flowbite.plugin(),require('tailwind-scrollbar'),],
};
