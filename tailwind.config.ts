import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#F5FAF7',
          100: '#E8F6F0',
          200: '#D1EDDE',
          300: '#B8E5CB',
          400: '#7ED321',
          500: '#5CB703',
          600: '#006B3C',
          700: '#005932',
          800: '#004428',
          900: '#002F1F',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
