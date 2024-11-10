/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#5f6fff",
        pcolor: "#4B5563",
      },
      gridTemplateColumns: {
        auto: `repeat(auto-fill,minmax(200px,1fr))`,
      },
    },
  },
  plugins: [],
};
