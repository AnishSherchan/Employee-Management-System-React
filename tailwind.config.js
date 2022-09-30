/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "950px",
        laptop: "1470px",
        // => @media (min-width: 640px) { ... }
      },
      colors: {
        bgcolor: "#E1E5E8",
        adminDash: "#474C52",
        navcolor: "#F3F6F7",
        dark: "#474C52",
        primaryButton: "#607FE8",
        back: "#005599",
      },
    },
  },
  plugins: [],
};
