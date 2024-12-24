/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontWeight:{
        'normal': '300',
        'medium': '400',
        'semibold': '500',
        'bold': '600'
      },

      margin:{
        'z-auto': '0 auto'
      }
    },
  },
  plugins: [],
}