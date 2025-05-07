// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5ECE7B",
        "primary-dark": "#4CAF50",
        "text-primary": "#1D1F22",
        "text-secondary": "#727272",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
