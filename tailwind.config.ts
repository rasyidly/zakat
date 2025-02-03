import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          '50': '#f5f8f7',
          '100': '#ddeae9',
          '200': '#bbd4d3',
          '300': '#91b7b6',
          '400': '#6a9697',
          '500': '#507b7c',
          '600': '#3e6163',
          '700': '#3a5759',
          '800': '#2d4042',
          '900': '#283939',
          '950': '#141d1f',
        },
      },
      fontFamily: {
        sans: ['Onest', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

