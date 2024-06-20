export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '씽크풀 기업소개',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://img.thinkpool.com/hdc_thinkpool/css/font.css' },
      { rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.css', },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js',
        defer: true,
      },
    ],
    bodyAttrs: {
      class: 'kor',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/style.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/default/',
    },
    {
      path: '~/components/landing/',
    },
    {
      path: '~/components/about/',
    },
    {
      path: '~/components/thinkpoolAi/',
    },
    {
      path: '~/components/lbs/',
    },
    {
      path: '~/components/rms/',
    },
    {
      path: '~/components/rdcenter/',
    },
    {
      path: '~/components/pr/',
    },
    {
      path: '~/components/ir/',
    },
    {
      path: '~/components/careers/',
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  _layers: [],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  router: {
    base: '/tp_web/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
