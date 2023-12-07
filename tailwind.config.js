/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d75bc",
        secondary: "#8DC63F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
