/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'color-aliceblue': '#f0f8ff',
      'color-shark': '#282c34',
      'color-main-black': 'rgba(0, 0, 0, 0.90)',
      'color-default-black': '#000000',
      'color-light-black': '#5E5D5C',
      'color-light-black-2': 'rgba(26, 26, 26, 0.70)',
      'color-light-black-3': 'rgba(0, 0, 0, 0.40)',
      'color-blue': '#5278DA',
      'color-blue-light': '#203D8A',
    },

    container: {
      padding: '20px',
      center: true
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
