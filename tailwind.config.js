/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        heading: ['Sora', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#FFA629',
          background: '#1C1C1C',
          light: '#EDEDED',
          retroPink: '#F266AB',
          nav: '#292929',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        fadeIn: 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      boxShadow: {
        glow: '0 0 10px #FFA629', // or #EDEDED depending on your aesthetic
      },
      backgroundImage: {
        'gradient-hover': 'linear-gradient(90deg, #F266AB 0%, #FFA629 100%)',
      },
    },
  },
  plugins: [],
};



