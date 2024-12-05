import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D4D',
        cream: '#FFF5E6',
      },
    },
  },
  plugins: [],
} satisfies Config;
