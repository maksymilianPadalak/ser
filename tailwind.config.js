/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Suez One"],
    },
    extend: {
      spacing: {
        300: "300px",
        400: "400px",
        500: "500px",
        700: "700px",
      },
    },
  },
  plugins: [],
};
