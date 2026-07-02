/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        navy: 'var(--color-navy)',
        'navy-light': 'var(--color-navy-light)',
        gold: 'var(--color-gold)',
        'gold-light': 'var(--color-gold-light)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(22, 40, 61, 0.09)',
        gold: '0 18px 32px rgba(185, 143, 74, 0.22)',
      },
    },
  },
  plugins: [],
};
