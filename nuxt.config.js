export default {
  ssr: true,
  target: 'server',
  env: {
    appUrl: process.env.APP_URL || 'http://localhost',
    urlShareDomain: process.env.URL_SHARE_DOMAIN || 'plog.co',
  },
  server: {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 4000
  },

  generate: {
    fallback: '404.html',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = typeof this.$nuxtI18nHead === 'function' ? this.$nuxtI18nHead({ addSeoAttributes: true }) : { htmlAttrs: {}, link: [] }

    return {
      titleTemplate: (titleChunk) => {
        return titleChunk && !(titleChunk.endsWith('Playlog') || titleChunk.includes('|'))
          ? `${titleChunk} | Playlog`
          : titleChunk || "Playlog";
      },
      htmlAttrs: {
        lang: 'en',
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link,
      ],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/form.js',
    '~/plugins/helpers.js',
    '~/plugins/loading.js',
    '~/plugins/modal.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxt/image',

    ['cookie-universal-nuxt', { alias: 'cookie' }],
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'user',
        path: '/@:username',
        component: resolve(__dirname, 'pages/@user/profile.vue')
      })

      // routes.push({
      //   name: 'user:following',
      //   path: '/@:username/following',
      //   component: resolve(__dirname, 'pages/@user/profile.vue')
      // })
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.API_BASE_URL || 'http://localhost/api/',
    headers: {
      common: {
        'X-Resource-Version': 'new',
        'X-API-Version': '2.3',
      },
    },
  },

  i18n: {
    seo: true,
    vueI18nLoader: true,
    defaultLocale: 'en',
    locales: [
      { code: 'ja', iso: 'ja' },
      { code: 'ko', iso: 'ko' },
      { code: 'zh-cn', iso: 'zh-cn' },
      { code: 'zh-tw', iso: 'zh-tw' },
      { code: 'en', iso: 'en' },
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
