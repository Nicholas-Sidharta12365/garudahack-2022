/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'] 
      },
      colors: {
        "dark-purple": "#081A51", 
        "light-white": "rgba(255, 255, 255, 0.17)",
        "baby-blue": "#9CC4FF",
      }
    },
  },
  plugins: [],
}
