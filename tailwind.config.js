// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "text-dark": "#001233",
        "text-light": "#33415c",
        "seconday-blue": "#00b4d8",
        whitesmoke: "#f9f9f9",
        khaki: "#f4cc66",
        "light-grey": "#c6cad2",
        grey: "#5c677d",
        "true-blue": "#0466c8",
        salmon: "#f45d5d",
        "hover-blue": "#0353a4",
        "primary-blue": "#0077b6",
        "border-grey": "#e9e9ed",
        "lighter-grey": "#f4f4f6",
        "dark-secondary": "#143d61",
        "star-red": "#fdb175",
        "star-yellow": "#ffd276",
        "star-green": "#67b382",
        "star-red1": "#ff747b",
        "star-green1": "#c0d288",
        mediumseagreen: "#14bb65",
        light: "#cbd4dc",
        dimgray: "#666",
        "rating-yellow": "#ffb703",
        gainsboro: "#d9d9d9",
        "light-green": "#e2fbe8",
        black: "#000",
      },
      fontFamily: {
        "body-medium": "Roboto",
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      "9xl": "28px",
      xs: "12px",
      base: "16px",
      "26xl": "45px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


