/** @type {import('tailwindcss').Config} */
const { colors } = require("./src/config/colors");

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "bigodon-bg-screen": "#242731",
        "bigodon-color-informative": "#89888e",
        "bigodon-color-button-link": "#5e5d65",
        "bigodon-bg-button": "#6d5ae6",
        "bigodon-color-button": "#ffffff",
        "bigodon-white": "#ffffff",
        "bigodon-bg-card-appointment": "#1f212a",
        "bigodon-bg-confirm-appointment": "#86efac",
        "bigodon-color-black": "#000000",
        "bigodon-border-offer-economy": "#6d5ae6",
        "bigodon-bg-tab-menu": "#16181e",
      },
      fontFamily: {
        heading: "Poppins_600SemiBold",
        subtitle: "Poppins_500Medium",
        body: "Poppins_400Regular",
        bold: "Poppins_700Bold",
      },
    },
  },
  plugins: [],
}