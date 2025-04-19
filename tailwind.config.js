/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#162A56",
        text: "#D9D9D9",
        textSecondary: "#00FFFF",
      },
    },
  },
  plugins: [],
};
