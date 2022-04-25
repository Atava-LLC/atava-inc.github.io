module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        'light-purple-gray': '#8b86a3',
        'dark-purple-gray': '#322e40'
      },
      scale: {
        '1005': '1.005'
      }
    },
  },
  plugins: [],
}
