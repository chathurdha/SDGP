/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Saira', 'sans-serif'],
      },
      colors: {
        starColor: ['#6ee7b7'],
      },
    },
  },
  plugins: [],
}