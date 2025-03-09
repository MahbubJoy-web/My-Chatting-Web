/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'BandColor': '#62FFB4',
      }
    },
    container:{
      center: true,
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'Big_Shoulders': ['Big Shoulders', 'sans-serif'],
    },
  },
  plugins: [],
}