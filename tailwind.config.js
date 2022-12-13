module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        red_901: "#831918",
        gray_700: "#555151",
        black_900_5f: "#0000005f",
        gray_901: "#131418",
        gray_902: "#520709",
        red_900: "#8a181a",
        blue_500: "#188bf6",
        pink_900: "#6f2232",
        gray_900: "#1a1a1d",
        red_800: "#c22d2d",
        red_500: "#f84143",
        white_A700_cc: "#ffffffcc",
        black_900: "#000000",
        white_A700_bf: "#ffffffbf",
        gray_903: "#191a1f",
        white_A700: "#ffffff",
      },
      borderRadius: { radius10: "10px" },
      backgroundImage: { gradient: "linear-gradient(90deg ,#8a181a,#520709)" },
      fontFamily: {
        poppins: "Poppins",
        oxygen: "Oxygen",
        inter: "Inter",
        playfairdisplay: "Playfair Display",
        roboto: "Roboto",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
