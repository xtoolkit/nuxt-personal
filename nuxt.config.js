export default {
  telemetry: false,
  mode: 'universal',
  target: 'server',
  components: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  build: {},
}
