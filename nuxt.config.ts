export default defineNuxtConfig({
  devtools: { enabled: true },

  // Fecha de compatibilidad
  compatibilityDate: '2026-03-03',

  // Configuración de SSR/SPA híbrido
  ssr: true,

  // Directorio de componentes
  components: [
    {
      path: '~/components/atoms',
      prefix: 'Atom',
    },
    {
      path: '~/components/molecules',
      prefix: 'Molecule',
    },
    {
      path: '~/components/organisms',
      prefix: 'Organism',
    },
    {
      path: '~/components/templates',
      prefix: 'Template',
    },
  ],

  // Módulos
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  // Configuración de CSS
  css: ['~/assets/styles/main.scss'],

  // Alias
  alias: {
    '@': '.',
    '~': '.',
  },

  // Configuración de renderizado por ruta
  routeRules: {
    // Landing con SSR para mejor LCP y SEO
    '/': { ssr: true, prerender: true },
    // Páginas del casino con SPA para mejor interactividad
    '/slots/**': { ssr: false },
    '/roulette': { ssr: false },
    '/blackjack': { ssr: false },
    '/poker': { ssr: false },
    '/live-casino': { ssr: false },
    '/profile/**': { ssr: false },
    '/wallet/**': { ssr: false },
  },

  // Optimización de performance
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    viewTransition: true,
  },

  // Configuración de Nitro para mejor performance
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // Optimización de imágenes y assets
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Casino Virtual - Diversión y Premios',
      meta: [
        {
          name: 'description',
          content: 'El mejor casino virtual online. Slots, ruleta, blackjack y más.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
      ],
    },
  },

  // Vite config para optimización
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'pinia'],
            games: ['@vueuse/core'],
          },
        },
      },
    },
  },
})
