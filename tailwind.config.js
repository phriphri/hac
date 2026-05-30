/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#00A896',
          'teal-dark': '#008F7F',
          'teal-light': '#E0F7F5',
          navy: '#0F2137',
          'navy-deep': '#0A0F1A',
          'off-white': '#F9FAFB',
          'gray-warm': '#F3F4F6',
          'gray-mid': '#9CA3AF',
          'gray-line': '#E5E7EB',
          accent: '#C8A96E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'heading-1': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'heading-2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-3': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '8rem',
        'section-sm': '5rem',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
