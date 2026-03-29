export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'My Blog',
      titleTemplate: '%s ｜ LiuBinnn',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'apple-touch-icon',
          href: '/avatar.jpg'
        }
      ],
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
