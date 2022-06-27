/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C71B7",
        accent: "#061725",
        lightblue: "#DDF0FF",
      },
    },
  },
  plugins: [],
};
