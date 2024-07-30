/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      brown: '#5D4D34',
      'light-brown': '#AA8F66',
      amber: '#F5C18B',
      cream: '#FFEEDB',
      'dark-aqua': '#61C9A8',
      'dark-pink': '#BA3B46',
      gradient: '#000000b3'
    }
  },
  plugins: []
}
