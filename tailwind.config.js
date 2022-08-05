/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ogpRed: '#A40303',
        ogpGrey: '#E7E7E7',
        ogpBlack: '#111',
        ogpBlue: '#001D3D'
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
        'french': ['"IM Fell French Canon SC"', 'serif'],
        mont: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
