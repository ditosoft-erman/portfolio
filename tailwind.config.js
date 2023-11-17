/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'meow': '#17191A',
      },
      backgroundImage: {
        'bg-intro': "url('src/assets/image/png/bground.svg')",
        'bg-fineworks': "url('src/assets/image/png/fine-bg.png')"
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

