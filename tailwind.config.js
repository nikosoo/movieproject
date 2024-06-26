/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customHeader: "#394867",
        customBg: "#212A3E",
        customColour: "#61677A",
      },
    },
  },
  plugins: [],
};
