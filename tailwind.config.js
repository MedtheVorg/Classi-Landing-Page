module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom: 'repeat(1, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        // Simple 16 column grid
        custom: 'repeat(4, minmax(0, 250px))',
      },
      colors: {
        secondary: '#AEACA9',
      },
    },
    fontFamily: {
      primary: 'Inter',
      secondary: 'Viaoda Libre',
    },
  },
  plugins: [],
};
