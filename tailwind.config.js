/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     white: "#fff",
     black: "#000",
     themePurple: "#6C63FF",
     darkBlue: "#002265"
    },
    extend: {},
  },
  plugins: [],
}