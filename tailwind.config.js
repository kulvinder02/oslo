/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightWhite: "#FeFeFe",
        lightGrey: "#E5E5E5",
        lightBlack: "#010101",
        orange: "#EB484C",
        grey: "#4B4B4B",
        offGrey: "#DFDEDE",
        red: "#96151D",
        lightGrey: "#D2D2D2",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      fontSize:{
        "8xl" :"90px",
      }
    },
  },
  plugins: [],
};
