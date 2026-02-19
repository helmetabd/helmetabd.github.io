// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Hilmi Abdurrahim - Full-stack Web Developer Portfolio' },
        { name: 'keywords', content: 'Full-stack Developer, Web Developer, Laravel, Vue.js, React, TypeScript' },
        { name: 'author', content: 'Hilmi Abdurrahim' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Hilmi Abdurrahim - Full-stack Web Developer' },
        { property: 'og:description', content: 'Building modern web applications with passion and precision' },
        { property: 'og:image', content: '/me.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }
      ]
    },
    baseURL: '/',
  },

  tailwindcss: {
    cssPath: '~/app.css',
    configPath: 'tailwind.config.ts',
  },

  nitro: {
    preset: 'static',
    output: {
      publicDir: 'dist',
    },
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})
