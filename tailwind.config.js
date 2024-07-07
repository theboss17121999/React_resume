/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
  },
  theme: {
    extend: {
      animation: {
        "infinite-slider": "infiniteSlider 5s linear infinite",
        "infinite-slider1": "infiniteSlider1 4s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-397px * 2))",
          },
        },
        infiniteSlider1: {
          "0%": {
            transform: "translateX(calc(-264px * 2))",
          },
          "100%": { 
            transform: "translateX(0)" 
          },
        },
      },
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
        'nv': '1199px'
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
};
