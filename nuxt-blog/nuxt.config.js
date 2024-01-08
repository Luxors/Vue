import axios from 'axios'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }
    ]
  },
  // router: {
  // 	base: '/nuxt-blog/'
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/app-components.js'],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vue', 'axios'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
  generate: {
    // eslint-disable-next-line object-shorthand
    routes: function () {
      return axios
        .get('https://luxors-blog-nuxt.firebaseio.com/posts.json')
        .then(res => {
          // Get id
          const postArray = []
          for (const key in res.data) {
            postArray.push({ ...res.data[key], id: key })
          }
          // Routes
          return postArray.map(post => {
            return '/blog/' + post.id
          })
        })
    }
  }
}
