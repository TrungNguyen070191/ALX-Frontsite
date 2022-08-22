/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    colors: {
      white: '#fff',
      'primary': {
        DEFAULT: '#A2A83E'
      },
      'secondary': {
        DEFAULT: '#562522',
        light: '#E2CFCE',
      },
      neutral: {
        n20: '#DFDFDF',
        n40: '#999',
        n60: '#666',
        n80: '#333',
        n100: '#000'
      }
    },
    container: {
      screens: {
        xl: '1248px',
      }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}