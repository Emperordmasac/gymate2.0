/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      md1200: { max: '1200px' },
      md1000: { max: '1000px' },
      min800: { max: '800px' },
      min620: { max: '620px' },
      min540: { max: '540px' },
      min450: { max: '450px' },
      min375: { max: '375px' },
    },
  },
  plugins: [],
};
