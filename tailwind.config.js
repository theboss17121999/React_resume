/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gree': '#149414',
        'name': '#941494',
        'lightgreen': '#9ccc9c',
      },
      backgroundImage: {
        'KV': "url('../src/assets/educationLogo/kv.png')",
      },
      spacing: {
        '170': '75rem',
        '160': '60rem',
        '128': '28rem',
        '190': '90rem',
      },
      screens: {
        'sc': '1280px',
      },
    },
    fontFamily: {
      'jersey': ['"Jersey 15"', 'sans-serif'],
      'display': ["Sedgwick Ave Display", 'cursive'],
      'pixel': ["Pixelify Sans", 'sans-serif'],
      'cursive1': ["Yellowtail", 'cursive'],
      'cursive2': ["Pacifico", 'cursive'],
      'newspaper': ['"Jacquard 24 Charted"', 'system-ui'],
      'display2': ["Poetsen One", 'sans-serif'],
      'handwriting': ["Just Another Hand", 'cursive'],
      'display3': ["Poetsen One", 'sans-serif'],
      'display4': ["Sedan SC", 'serif'],
      'blood': ['blood', 'sans-serif'],
    },
  },
  plugins: [],
};
