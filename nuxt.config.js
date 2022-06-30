import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Responsive Bootstrap 5 Admin Dashboard"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   */
  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
    '~/scss/global.scss'
  ],

  build: {
    transpile: ['vuetify']
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  
  /*
   ** Nuxt.js modules
   */
  modules: [
    // "@intlify/nuxt3",
  ],

  // intlify: {
  //   localeDir: "locales",
  //   vueI18n: {
  //     locale: "en",
  //     fallbackLocale: "en",
  //     availableLocales: ["en", "ar", "es", "fr", "zh"],
  //     sync: true,
  //   },
  // }
})
