/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom1: "8px 10px 36.1px 0px #0000001C",
        custom: "8px 10px 36.1px 0px rgba(0, 0, 0, 0.11)",
        custom2: "7.6px 9.5px 34.29px 0px #0000001C",
      },
      screens: {
        sm: "480px",
        md: "768px",
        mdl: "880px",
        lg: "976px",
        xl: "1280px",
        "1xl": "1400px",
        xxl: "1440px",
        "2xl": "1700px",
        "3xl": "1800px",
      },
      backgroundImage: {
        "bg-image": "/assets/lines.svg",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
