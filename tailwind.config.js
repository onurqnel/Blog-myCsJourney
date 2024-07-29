module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#24292f",
      },
      fontFamily: {
        piazzolla: ["Piazzolla", "serif"],
      },
      width: {
        custom: "80%",
      },
      screens: {
        "custom-sm": { max: "639px" },
      },
      spacing: {
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        192: "48rem",
      },
    },
    plugins: [],
  },
};
