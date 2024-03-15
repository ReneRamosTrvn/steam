/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-trans': 'rgba(0, 0, 0, 0.57)'
      }
    },
  },
  plugins: [],
}