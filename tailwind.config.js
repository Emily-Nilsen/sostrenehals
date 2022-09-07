const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Articulate', ...defaultTheme.fontFamily.sans],
        display: ['Minion', ...defaultTheme.fontFamily.serif],
        serif: ['cinque-donne-pro', ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        nutmeg: '#a19385',
        lipstick: {
          light: '#C06865',
          dark: '#a64143',
        },
        violin: '#591708',
        eyelashes: '#260909',
        tan: {
          light: '#D9AA8F',
          medium: '#BF8969',
          dark: '#A6634B',
        },
        couture: {
          lightGold: '#F2E6D8',
          mediumGold: '#D9D3C1',
          darkGold: '#735E4C',
          darkFeathers: '#591708',
          dress: '#8C2F0D',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
