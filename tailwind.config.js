/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Rutas de tus archivos de React
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'], // Cambia 'Arial' por la fuente que desees
      }
    },
  },
  plugins: [
  ],
}
