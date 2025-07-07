/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
 
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#669F3A', // indigo-600,
          light: '#F6983B', // indigo-500
          secondary: '#669F3A', // blue-500
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
}