/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: "source"
      }
    },
    colors: {
      white: '#FFF',
      midWhite: '#9e9e9e',
      black: '#1B1C1E',
      midBlack: '#303030',
      firstLight: '#101A45',
      red: '#E90E46',
      orange: '#ff4800',
      thirdLight: '#F5CBD8',
      fourthLight: '#A459D1',

      // firstDark: '#F5EAEA',
      // firstDark: '#F5EAEA',
      // firstDark: '#F5EAEA',
      // firstDark: '#F5EAEA',

    }
  },
  plugins: [],
}