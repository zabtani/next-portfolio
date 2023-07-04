/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(315deg, #18181b 0%, #2c2c2c 74%)',
        'gradient-light': 'linear-gradient(315deg, white 0%, #e8e8e8 74%)',
        'hero-pattern': "url('/bg.svg')",
        'hero-pattern-dark': "url('/bg_black.svg')",
        'hero-pattern-transparent': "url('/bg_transparent.svg')",
        'hero-pattern-dark-transparent': "url('/bg_black_transparent.svg')",
      },
      boxShadow: {
        'inset-shadow-black': 'rgb(0, 0, 0,0.8) 10px -83px 75px -20px inset',
        'inset-shadow-white': 'rgb(255, 255, 255,0.9) 10px -83px 75px -20px inset',
      },
      animation: {
        type: 'type 2.7s ease-out 1.8s alternate both ',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5.5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 70%': { transform: 'translateX(7ch)' },
          '75%, 80%': { transform: 'translateX(8ch)' },
          '85%, 90%': { transform: 'translateX(9ch)' },
          '95%, 100%': { transform: 'translateX(10ch)' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
