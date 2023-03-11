/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#001c3d",
        secondary: "#3490dc",
        danger: "#FF4F00",
      },
      MT_COLORS: {
        default: "#001c3d", 
        borderColor: "#001c3d",
      },
      colors: {
        primary: "#001c3d",
        secondary: "#3490dc",
        danger: "#FF4F00",
        rose: colors.rose,
        blue: colors.blue,
        green: colors.green,
        gray: colors.gray,
      },
      borderColor: {
        DEFAULT: '#8892b0',
      },
    },
  },
  plugins: [
  ],
});