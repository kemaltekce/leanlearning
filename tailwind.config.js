/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.html'],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 1.5s linear infinite',
        banner: 'banner 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        banner: {
          '0%': {
            transform: 'translateX(100vw)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
