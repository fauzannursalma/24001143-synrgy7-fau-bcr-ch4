/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      colors: {
        lavender: "#f1f3ff",
        darkblue: "#0d28a6",
        limegreen: "#5CB85F",
        neutral: {
          "01": "#ffffff",
          "02": "#D0D0D0",
          "03": "#8A8A8A",
          "04": "#3C3C3C",
          "05": "#151515",
        },
        alert: {
          danger: "#FA2C5A",
          warning: "#F9CC00",
          success: "#5CB85F",
        },
      },
    },
  },
  plugins: [],
};
