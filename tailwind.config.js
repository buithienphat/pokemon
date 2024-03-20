/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      "bg-cl": "#212121",
      red: "#f12b3e",
      yellow: "#ffad48",
      blue: "#b4ebff",
      white: "#a0a0a0",
      green: "#91bf18",
      purple: "#441465",
    },
    colors: {
      main: "#fff",
      red: "#f12b3e",
      yellow: "#ffad48",
      blue: "#b4ebff",
    },
    aspectRatio: {
      card: "330/503",
    },
    boxShadow: {
      main: "#32b432 0px 0px 4.25px 0.51px",
    },
  },
  plugins: [],
};
