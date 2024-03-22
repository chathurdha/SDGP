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
        'starColor': '#6ee7b7',
        'custom-green': '#2AAA94',
        'custom-black': '#1B2336',
        'custom-purple': '#8260E2',
        'custom-lightb': '#4A4A4A',
        'selectBorder' : '#D9D9D9',
        'selectFill' : '#F7F7FA'
      },
    },
  },
  plugins: [],
}
