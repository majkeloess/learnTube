/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./constants/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#8D99AE",
        secondary: "#2B2D42"
      },
      fontFamily: {
        pthin100: ["Poppins-Thin", "sans-serif"],
        pextralight200: ["Poppins-ExtraLight", "sans-serif"],
        pextralightital: ["Poppins-ExtraLightItalic", "sans-serif"],
        plight300: ["Poppins-Light", "sans-serif"],
        pregular400: ["Poppins-Regular", "sans-serif"],
        pmedium500: ["Poppins-Medium", "sans-serif"],
        psemibold600: ["Poppins-SemiBold", "sans-serif"],
        pbold700: ["Poppins-Bold", "sans-serif"],
        pbolditalic: ["Poppins-BoldItalic", "sans-serif"],
        pextrabold800: ["Poppins-ExtraBold", "sans-serif"],
        pblack900: ["Poppins-Black", "sans-serif"],
        pblackitalic: ["Poppins-BlackItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

