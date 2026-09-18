/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fuse: {
          amber: "#FFA000",
          deep: "#E65100",
        },
        night: {
          DEFAULT: "#0A0B0E",
          panel: "#12141A",
          edge: "#1E222D",
        },
      },
      fontFamily: {
        sans: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
