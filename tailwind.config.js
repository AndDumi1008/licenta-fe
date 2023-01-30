/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'white80': '#FFFFFFCC',
        'grey20': '#00000033',
        'grey30': '#0000004D',
      },
      spacing: {
        15:'3.75rem',
      }
    },
  },
  plugins: [],
}
