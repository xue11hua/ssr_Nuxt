//用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
module.exports = {
  /*
  ** Headers 里的配置
  */
  head: {
    title: '我的网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

 //引入全局css
  css:['~assets/css/main.css'],
  /*
  ** 进度条颜色，页面顶部
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
     /*
    ** 对webpack的基本配置进行覆盖
    */
    


    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
