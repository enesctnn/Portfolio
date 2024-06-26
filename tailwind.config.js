/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        ellipse: 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      },
      fontFamily: { ubuntu: ['"Ubuntu"', 'sans-serif'] },
      colors: {
        muted: {
          DEFAULT: 'rgb(193, 195, 199)',
          foreground: 'hsl(215.4 16.3% 46.9%)',
        },
        carnation_pink: {
          DEFAULT: '#ff99c8',
          100: '#520026',
          200: '#a3004c',
          300: '#f50072',
          400: '#ff479d',
          500: '#ff99c8',
          600: '#ffadd3',
          700: '#ffc2de',
          800: '#ffd6e9',
          900: '#ffebf4',
        },
        lemon_chiffon: {
          DEFAULT: '#fcf6bd',
          100: '#544c04',
          200: '#a89808',
          300: '#f4dd13',
          400: '#f8e967',
          500: '#fcf6bd',
          600: '#fcf7c8',
          700: '#fdf9d6',
          800: '#fefbe4',
          900: '#fefdf1',
        },
        nyanza: {
          DEFAULT: '#d0f4de',
          100: '#114a27',
          200: '#22934e',
          300: '#3ed277',
          400: '#88e3ab',
          500: '#d0f4de',
          600: '#dbf6e5',
          700: '#e4f9ec',
          800: '#edfbf2',
          900: '#f6fdf9',
        },
        uranian_blue: {
          DEFAULT: '#a9def9',
          100: '#05364e',
          200: '#0b6c9c',
          300: '#10a2eb',
          400: '#5bc1f4',
          500: '#a9def9',
          600: '#bae5fa',
          700: '#ccebfb',
          800: '#ddf2fd',
          900: '#eef8fe',
        },
        mauve: {
          DEFAULT: '#e4c1f9',
          100: '#360851',
          200: '#6c10a2',
          300: '#a021e9',
          400: '#c272f1',
          500: '#e4c1f9',
          600: '#eacffa',
          700: '#efdbfb',
          800: '#f5e7fd',
          900: '#faf3fe',
        },
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translateX(-1px)' },
          '20%, 80%': { transform: 'translateX(2px)' },
          '30%, 50%, 70%': { transform: 'translateX(-4px)' },
          '40%, 60%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
    },
  },
  plugins: [],
};
