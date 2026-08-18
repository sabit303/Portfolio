/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#0b0c10',
          card: '#12141d',
          border: 'rgba(255, 255, 255, 0.07)',
        },
      },
    },
  },
  plugins: [],
}