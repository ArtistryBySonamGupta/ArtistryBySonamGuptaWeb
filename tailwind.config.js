/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'art-green': '#A0D9BC',
        'art-beige': '#F5EFE6',
        'art-gold': '#D6C59A',
        'art-text': '#2E2E2E',
        'art-white': '#FFFFFF',
        'art-green-dark': '#8BC4A8',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        quirky: ['Fredoka', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        blob: 'blob 7s infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
      },
      boxShadow: {
        quirky: '5px 5px 0px 0px rgba(46, 46, 46, 1)',
        'quirky-hover': '8px 8px 0px 0px rgba(46, 46, 46, 1)',
        'quirky-sm': '3px 3px 0px 0px rgba(46, 46, 46, 1)',
      },
    },
  },
  plugins: [],
};
