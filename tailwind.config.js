/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "1080px",
      },
    },
    extend: {
      textColor: {
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark-grayish-blue": "hsl(236, 13%, 42%)",
        "dark-blue": "hsl(240, 100%, 5%)",
      },
      backgroundColor: {
        "soft-red": "hsl(5, 85%, 63%)",
        "dark-blue": "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        "super-wide": "4px",
      },
      fontSize: {
        sm: "15px",
        "4xl": ["2.5rem", "1"],
      },
    },
  },
  plugins: [],
};
