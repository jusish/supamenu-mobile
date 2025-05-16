const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ad-pattern": "url('@/assets/images/resto-ad.png')"
      },
      fontFamily: {
        PoppinsBold: ["Poppins-Bold"],
        PoppinsMedium: ["Poppins-Medium"],
        PoppinsSemiBold: ["Poppins-SemiBold"],
        PoppinsLight: ["Poppins-Light"],
        PoppinsExtraLight: ["Poppins-ExtraLight"]
      }
    },
    colors: {
      primary: "#F7941C",
      accent: "#f9f9f9",
      ...colors
    }
  },
  plugins: []
};
