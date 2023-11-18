/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Suez One"],
    },
    extend: {
      spacing: {
        700: "700px",
      },
    },
  },
  plugins: [],
};
