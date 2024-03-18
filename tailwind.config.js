/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 60s linear infinite ",
      },
      keyframes:{
        "loop-scroll":{
        from: {transform: "translateX(0)"},
        to: {transform: "translateX(-100%)"},
        },
      },
      colors: {
        'meow': '#17191A',
      },
      backgroundImage: {
        'primary': "url('../src/assets/image/png/bround.png')",
      'fine': "url('../src/assets/image/png/fine-works.png')",
        'bg-intro' : "url('src/assets/image/png/bround.png')",
        'bg-eat-sleep-repeat' :"url('src/assets/image/png/eat-sleep-edit-repeat.png')",
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

