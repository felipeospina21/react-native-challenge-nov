/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#450D41',
        dark_bg: '#110115',
        light_bg: '#ffffff',
        dark_glass: 'rgba(17, 1, 21, 0.5)',
        light_glass: 'rgba(255, 255, 255, 0.7)',
        text_secondary: '#F4EEB2',
        text_primary: '#3E0B82',
      },
    },
  },
  plugins: [],
};
