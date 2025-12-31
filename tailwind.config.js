/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#760015',
          'maroon-dark': '#5A0010',
          'maroon-light': '#920019',
          orange: '#F39200',
          'orange-light': '#FFA726',
        },
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans', 'Source Sans 3', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
