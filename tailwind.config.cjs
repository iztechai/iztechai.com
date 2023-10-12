/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0F151A',
        foreground: '#DEE5E5',
        contrast: '#1C3144',
        iztechred: '#9a0e20',
        blurple: '#5865F2',
        linkedin: '#0077B5',
        youtube: '#FF0000',
        whatsapp: '#25d366',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
        heading: [
          'Montserrat Variable',
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
