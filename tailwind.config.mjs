/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import animations from '@midudev/tailwind-animations';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      screens: {
        xs: '360px',
        ...defaultTheme.screens,
        '3xl': '1650px',
      },
    },
  },
  plugins: [animations],
};
