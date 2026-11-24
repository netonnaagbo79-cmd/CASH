/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF6E7',
          100: '#F6EBc5',
          200: '#EDD98C',
          300: '#E4C566',
          400: '#DCB94F',
          500: '#D4AF37',
          600: '#B8962E',
          700: '#947827',
          800: '#6F5B1F',
          900: '#4A3D16',
        },
        ink: {
          800: '#141414',
          900: '#0F0F0F',
          950: '#0A0A0A',
        },
        cream: {
          50: '#FFFDF5',
          100: '#FBF7EA',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
