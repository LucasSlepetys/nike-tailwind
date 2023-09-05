/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(400px, 1fr))',
      },
      gridAutoRows: {
        300: '300px',
      },
    },
  },
  plugins: [],
};
