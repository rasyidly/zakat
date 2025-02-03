// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
  ],
  future: {
    compatibilityVersion: 4
  },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  fonts: {
    families: [
      { name: 'Onest', provider: 'google' },
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
})
