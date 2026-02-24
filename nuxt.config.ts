// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app:{
    head: {
     title: 'Nuxt Dojo',
     meta : [
      { name: 'description', content: 'Everything about Nuxt'}
     ],
     link: [
      {
        rel: 'stylesheet', href:"htttps://fonts.googleapis.com/icon?family=Material+Icons",
      }
     ]
    }
  }
})