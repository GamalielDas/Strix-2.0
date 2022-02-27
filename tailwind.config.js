module.exports = {

  purge: [
    "./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}",

  ],
darkmode:false,
  theme: {
    extend: {
      colors:{
        'main-color': '00ADB5',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
   
  ],
}
