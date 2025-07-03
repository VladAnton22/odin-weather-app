/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"IBM Plex Sans"', 'sans-serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0C4A6E',
          light: '#1E3A8A',
          dark: '#082F49',
        },
        secondary: {
          DEFAULT: '#FACC15',
          light: '#FDE68A',
          dark: '#CA8A04',
        },
        neutral: {
          light: '#1E293B',
          DEFAULT: '#0F172A',
          dark: '#0B1120',
        },
        accent: {
          DEFAULT: '#2DD4BF',
          dark: '#0D9488',
        },
        danger: {
          DEFAULT: '#F87171',
          dark: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
}

