/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'mobile': '530px',
      'custom': { 'raw': '(min-width: 530px) and (min-height: 900px)' },
    },

    extend: {

    },
  },
  plugins: [],
}


