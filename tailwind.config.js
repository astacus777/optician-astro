/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Dodaj wszystkie pliki, gdzie używasz klas Tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Dodaj Montserrat jako font główny
      },
    },
  },
  plugins: [],
}

