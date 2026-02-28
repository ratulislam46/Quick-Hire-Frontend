/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        [#4640DE]: '#4640DE',
        secondary: '#264A4F',
      },
    },
  },
  plugins: [],
}