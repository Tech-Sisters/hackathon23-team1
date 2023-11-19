/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        turquoise: "#A3DDCB",
        yellow: "#E8E9A1",
        orange: "#E6B566",
        pink: "#E5707E",
        lightpink:"#E67080",
        lightyellow: "#E5B766",
        light:"#E9E9A1",
      },
      fontFamily: {
        montserrat: ["Monstserrat", "sans-serif"],
        hind: ["Hind", "sans-serif"],
      },
    },
  },
  plugins: [],
};
