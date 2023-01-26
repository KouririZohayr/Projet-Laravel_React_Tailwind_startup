/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
    "./resources/**/*.tsx",
    "./resources/**/**/*.jsx",
    "./resources/**/**/*.js",
    "./resources/**/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
