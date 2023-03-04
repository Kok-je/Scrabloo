/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    textColor: {
             'primary': '#001c3d',
             'secondary': '#3490dc',
             'danger': '#FF4F00',
    },
    colors : {
      'primary': '#001c3d',
      'secondary': '#3490dc',
      'danger': '#FF4F00',
    }
  },
  plugins: [
  ],
}