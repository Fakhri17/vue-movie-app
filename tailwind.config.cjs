const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/preline/preline.js',
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}

