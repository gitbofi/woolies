/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        dark: "#0C0C0D",
        green: "#22A438",
      },

      fontFamily: {
        now: ["Now", "sans-serif"],
        artifika: ["Artifika", "serif"],
      },

      height: {
        heroLarge: "85svh",
        piece: "48vw",
        pieceMd: "32vw",
        pieceLg: "24vw",
      },

      gap: {
        pieceSm: "4vw",
        pieceMd: "2vw",
      },

      animation: {
        slowspin: "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
