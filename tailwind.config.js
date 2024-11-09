/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/**.{html,js}', '!./node_modules/**/*'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purpleDark: '#150516',
        purpleLight: '#311C36',
        white: '#F5F5F5',
        whiteFaded: 'rgba(245, 245, 245, 0.25)',

        violetLight: '#5B4B5C',
        violetDark: '#2B1E2C',
      },
      dropShadow: {
        white: '0 5px 10px rgba(245, 245, 245, 15)',
      },
    },
  },
  plugins: [],
};
