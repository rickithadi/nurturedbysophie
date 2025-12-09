/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'bodoni': ['Bodoni Moda', 'serif'],
      },
      colors: {
        cream: '#fffdf7',
        sage: '#717e5c',
        forest: '#45572d',
      },
    },
  },
  plugins: [],
}