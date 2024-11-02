/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      roman: ["Times New Roman"],
      nunito: ["Nunito"],
    },
    extend: {
      colors: {
        primary: "#b91c1c", // Define your primary color here
        secondary: "#e09241", 
      },
    },
  },
  plugins: [],
};
