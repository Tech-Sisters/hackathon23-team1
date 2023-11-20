/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#A3DDCB",
        yellow: "#E8E9A1",
        orange: "#E6B566",
        pink: "#E5707E",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        hind: ["Hind", "sans-serif"],
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
    },
  },
  plugins: [],
};
