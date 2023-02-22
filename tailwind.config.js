/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "#230443",
        secondary:{1:"#fa8304",2:"#CC6E0A"}
      }
    },
  },
  plugins: [],
}
