#npm包管理配置文件

##package.json

#Nuxt vue ssr服务端渲染

#安装 安装vue-cli后

##vue init nuxt/starter

##package.json里配置ip端口config

#nuxt.config.js里引入全局css

#配置title

##css:['~assets/css/normailze.css'],

#Nuxt默认配置了路由

#Nuxt默认模版,不常用，常用默认布局

#默认模版在每个页面都可以看见,

#根目录下创建一个app.html就可以实现

#改模版需重启服务器

#打包Nuxt

#npm run generate

#最简单的服务器-live-server 运行打包后的文件

#全局安装live-server

#npm install -g live-server

#在dist文件夹下输入live-server

###跨域处理

# npm i @nuxtjs/axios @nuxtjs/proxy -D
# 然后在 nuxt.config.js 文件里进行配置
modules: [
  '@nuxtjs/axios'
],
axios: {
  proxy: true
},
proxy: {
  '/api': {
    target: 'xxx.target.com',
    pathRewrite: { '^/api': '' }
  }
}
