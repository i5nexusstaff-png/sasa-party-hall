/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A95B',
          light: '#E8D6A7',
          dark: '#A98C3F',
        },
        dark: {
          DEFAULT: '#1B1B1B',
          soft: '#262626',
          softer: '#333333',
        },
        cream: '#F9F9F9',
        accent: '#E8D6A7',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0,0,0,0.15)',
        gold: '0 10px 40px -10px rgba(200,169,91,0.45)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E8D6A7 0%, #C8A95B 50%, #A98C3F 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1B1B1B 0%, #262626 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
