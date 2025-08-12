/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'react-color': '#61DBFB',
        'python-color': '#3776AB',
        'tailwind-color': '#06b6d4',
      },
    },
  },
  plugins: [],
};
