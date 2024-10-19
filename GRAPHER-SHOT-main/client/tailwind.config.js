/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'cormorant': ['Cormorant', 'serif'],
      },
      fontWeight: {
        'extra-light': 300,
        'extra-bold': 800,
        // Add other custom weights as needed
      },
    },
  },
  plugins: [],
}
