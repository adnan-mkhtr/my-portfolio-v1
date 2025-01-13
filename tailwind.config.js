/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#fff',
        primary: '#576cbc',
        secondary: '#19376d',
        dark: '#0b2447',
        dark2: '#04152d',
      },
    },
    fontFamily: {
      outfit: ['Outfit', 'Arial', 'Helvetica', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    animation: {
      floating: 'float 3s ease-in-out infinite',
    },
    keyframes: {
      float: {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
        '100%': { transform: 'translateY(-0px)' },
      },
    },
    screens: {
      'max-830': { max: '830px' },
    },
  },
  plugins: [],
};
