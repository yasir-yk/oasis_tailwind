/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        primary: '#0C336B',  // Customize with your desired primary color
        secondary: '#D8BB7A', // Customize with your desired secondary color
        light: '#F6FAF1',
        
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],

      },
      backgroundImage: {
        'hover-gradient': 'linear-gradient(180deg, #FBE39B 0%, #A5824B 100%)',
        'custom-gradient': 'linear-gradient(86.95deg, #D8BB7A 2.52%, #0C336B 97.47%)',
      },
      boxShadow: {
        'customShadow': '0 4px 40px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // Include Flowbite as a plugin
  ],
}
