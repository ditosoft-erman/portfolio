/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'meow': '#17191A',
      },
      backgroundImage: {
        'bg-intro' : "url('src/assets/image/png/bground.svg')",
        'bg-fineworks' : "url('src/assets/image/png/fine-bg.png')",
        'bg-eat-sleep-repeat' :"url('src/assets/image/png/eat-sleep-edit-repeat.png')",
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

