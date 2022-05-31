module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: '#E3F0FF',
          medio: '#154580',
          hover: '#1057B0',
        },
        gradient: {
          claro: '#154580',
          escuro: '#041833',
        },
        gray: '#DCDCDC',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
