/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: {
          50: "#eaf8f5",
          100: "#c8ebe4",
          500: "#087e75",
          600: "#056a63",
          700: "#044f4c",
          900: "#073331"
        },
        reed: "#8aa05b",
        clay: "#b86f45",
        dawn: "#f7f2e7",
        skysoft: "#d9e8ff"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(7, 51, 49, 0.14)"
      }
    }
  },
  plugins: []
};
