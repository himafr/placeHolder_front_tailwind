
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html","./dist/script.js}"],
  theme: {
    extend: {
      minWidth:{
        "300px":"300px",

      },
      width:{
        "person":"229px",
        "aside":"395px",
        "img":"60px",
      },
      height:{
        "person":"80px",
        "img":"60px",
      },
      backgroundColor:{
          "section":"#F5F5F5",

      }
    },
   
  },
  plugins: [],
}