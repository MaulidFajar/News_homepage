/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        md: "1080px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
