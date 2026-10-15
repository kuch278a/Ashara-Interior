/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        ashara: {
          teal: '#1E4E4E',
          'teal-hover': '#163B3B',
          'teal-light': '#2A6868',
          'teal-pale': '#E8F1F1',
          terracotta: '#DF6D27',
          'terracotta-dark': '#C85C1B',
          mint: '#EAF2F2',
          sky: '#C7DEED',
          'sky-light': '#E3EFF7',
          cream: '#FAF8F5',
          sand: '#F3EFEA',
          warmgray: '#E6E0D8',
          taupe: '#9C9083',
          muted: '#5F5A54',
          charcoal: '#1A1816',
          dark: '#0A1525',
          gold: '#C5A880',
        }
      }
    },
  },
  plugins: [],
}
