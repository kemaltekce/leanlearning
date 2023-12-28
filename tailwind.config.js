/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.html'],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 1.5s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
