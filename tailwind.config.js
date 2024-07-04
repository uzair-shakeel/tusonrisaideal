/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '8px 10px 36.1px 0px rgba(0, 0, 0, 0.11)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        mdl: '880px',
        lg: '976px',
        xl: '1280px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
};
