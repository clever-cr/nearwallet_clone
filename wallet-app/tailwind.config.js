/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblack: "#3F3F46",
        secondary: "#676767",
        purple: "#9092fb",
        blue: "#86b5ef",
        lightblue: "#7bdde2",
        primary: "#3f4246",
      },
      fontFamily: {
        real: "Graphik,ui-sans-serif,system-ui,sans-serif",
        mini: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;",
      },
    },
  },
  plugins: [],
};
