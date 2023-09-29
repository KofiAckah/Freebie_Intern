/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#42AAE5",
      }
    },
  },
  plugins: [],
}

