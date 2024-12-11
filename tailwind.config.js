/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fff",
        gray: {
          DEFAULT: "#78716c",
          950: "#0C0C0D",
        },
      },

      fontFamily: {
        now: ["Now-Light", "sans-serif"],
        artifika: ["Artifika", "serif"],
      },

      height: {
        hero: "80svh",
      },
    },
  },
  plugins: [],
};
