/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      maxHeight: {
        '576': '576px',
        '520': '520px'
      },
      minHeight: {
        '576': '576px',
        '520': '520px'
      },
      minWidth: {
        '576': '576px',
        '520': '520px'
      },
      maxWidth: {
        '576': '576px',
        '520': '520px'
      }
    },
  },
  plugins: [],
}

