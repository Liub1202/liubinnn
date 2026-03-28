export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'Liubinnn',
      meta: [
        {
          name: 'description',
          content: 'A personal homepage and blog built with Nuxt.'
        }
      ]
    }
  },
  compatibilityDate: '2026-03-28'
})
