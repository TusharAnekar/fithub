/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
    },
    colors: {
      primary: '#ff8c00',
      secondary: '#FFAF4D',
      background: '#fbfffe'
      // ...
    }
  },
  plugins: [],
  darkMode: 'class'
}
