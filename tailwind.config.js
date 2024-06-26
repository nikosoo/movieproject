// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        customHeader: "#394867",
        customBg: "#212A3E",
        customColour: "#61677A",
      },
    },
  },
  plugins: [],
};
