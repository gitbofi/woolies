/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        dark: "#0C0C0D",
      },

      fontFamily: {
        now: ["Now-Light", "sans-serif"],
        artifika: ["Artifika", "serif"],
      },

      height: {
        heroLarge: "80svh",
        heroSmall: "60svh",
      },
    },
  },
  plugins: [],
};
