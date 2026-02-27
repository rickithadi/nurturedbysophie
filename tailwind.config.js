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
        'helvetica': ['Helvetica World', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: '#fffdf7',
        sage: '#717e5c',
        forest: '#45572d',
        accent: '#a2aa92',
        teal: '#304254',
      },
      borderRadius: {
        'arch': '100px 100px 30px 30px',
      },
    },
  },
  plugins: [],
}