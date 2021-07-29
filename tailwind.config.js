const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'verydarkbg': '#202c37',
        'darkbg': '#2b3945',
        'lighttext': '#111517',
        'lightbg': '#fafafa'
      },
      width: {
        '2/8': '21%',
        '3/8': '36%',
        '4/8': '29%',
        '6/8': '46%',
        '5/8': '72%',
        '7/8': '85%',
        '97': '400px'
      },
      maxWidth: {
        '2/8': '21%',
        '3/8': '36%',
        '4/8': '29%',
        '6/8': '86%',
        '97': '320px'
      },
      gap: {
        '2/9': '5.3%',
        '3/9': '6.5%',
        '4/9': '8%',
        '6/9': '66%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}:after`
        })
      })
    })
  ],
}
