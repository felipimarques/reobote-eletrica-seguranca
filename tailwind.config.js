/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFA000",
          orange: "#FF7A00",
          gold: "#F59E0B",
          dark: "#0A0B0E",
          darker: "#060709",
          card: "#12141A",
          cardBorder: "#1E222D",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
