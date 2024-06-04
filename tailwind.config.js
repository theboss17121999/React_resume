/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    transform: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {
      height: {
        'screen-and-full': 'max(h-screen, h-h-3/4)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      colors: {
        'gree': '#149414',
        'name': '#941494',
        'lightgreen': '#9ccc9c',
      },
      backgroundImage: {
        'bg1': "url('../src/assets/background/wavey-fingerprint.svg')",
        'bg2': "url('../src/assets/background/india.svg')",
      },
      spacing: {
        'smScreen': '50rem',
        '170': '75rem',
        '160': '60rem',
        '128': '28rem',
        '190': '90rem',
      },
      screens: {
        'sc': '1280px',
      },
      fontSize: {
        extralarge: '19rem',
        scextralarge: '12rem',
      },
      textUnderlineOffset: {
        19: '19px',
      },
    },
    fontFamily: {
      'jersey': ['"Jersey 15"', 'sans-serif'],
      'display': ["Sedgwick Ave Display", 'cursive'],
      'display2': ["Poetsen One", 'sans-serif'],
      'display4': ["Sedan SC", 'serif'],
      'display5': ["Oswald", 'sans-serif'],
      'display6': ["Kanit", 'sans-serif'],
      'handwriting': ["Just Another Hand", 'cursive'],
      'cursive1': ["Yellowtail", 'cursive'],
      'cursive2': ["Pacifico", 'cursive'],
      'newspaper': ['"Jacquard 24 Charted"', 'system-ui'],
      'pixel': ["Pixelify Sans", 'sans-serif'],
      'blood': ['blood', 'sans-serif'],
    },
  },
  plugins: [
    require('taos/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
