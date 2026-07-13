/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0B',
        'black-2': '#141416',
        card: '#1A1A1D',
        'card-2': '#1F1F23',
        gold: '#C9A227',
        'gold-light': '#E8D48A',
        border: '#2A2A2E',
        'text-secondary': '#B8BCC4',
        'text-muted': '#7C818C',
        green: '#3FA66E',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
      borderRadius: {
        lg2: '20px',
        md2: '12px',
        sm2: '8px',
      },
    },
  },
  plugins: [],
}
