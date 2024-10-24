/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor:{
        normal: 'url(black-circle.svg), auto',
        hover: 'url(hover-circle.svg), auto'
      }
    },
  },
  plugins: [],
}
