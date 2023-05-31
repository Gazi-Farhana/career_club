/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: ["light"],
  },

  theme: {
    extend: {
      gridTemplateColumns: {
       '2fr': '2fr 1fr',
       'applied-job': '1fr 4fr 1fr'
      },
    },
  },
  plugins: [require("daisyui")],
}