/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require('flowbite-react/tailwind');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
