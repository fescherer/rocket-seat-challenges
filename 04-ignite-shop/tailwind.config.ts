import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      principal: '#00875F',
      light: '#00B37E',
      background: '#121214',
      elements: '#202024',
      icon: '#8D8D99',
      text: '#C4C4CC',
      title: '#E1E1E6',
      white: '#FFFFFF',

      card: '#202024E6'
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
