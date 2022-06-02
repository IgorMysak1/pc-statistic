module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1a1717",
        ligthBlack: "#868686",
        darkBlack: "#0e0e0e",
        extraligthBlack: "#a3a3a3",
        extraDarkBlack: "#121212",
      },
      spacing: {
        "80vh": "80vh",
        440: "440px",
      },
    },
  },
  plugins: [],
};
