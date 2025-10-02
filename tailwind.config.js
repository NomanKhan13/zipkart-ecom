/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat'],
        lato: ['Lato'],
        lobster: ['Lobster'],
      },
      colors: {
        primary: '#ffd803',
        background: '#F0F0F0',
        accent: '#34C759',
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)) pattern-grid-xl',
      },
    },
  },
  plugins: [],
};
