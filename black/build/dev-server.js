require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

//引入数据库
//mock数据需要使用$http请求    首页请求    推荐
var navList = require('../json/dataList.json')

var titleList = require('../json/title.json')

var conList = require('../json/conte.json')

//      居家
var homeData = require('../json/titleList.json')

var banneData = require('../json/imaList.json')

//    美妆
var beautyData = require('../json/beauty.json')

//    个护
var nurseTData = require('../json/nurseT.json')

var nurseCData = require('../json/nurseC.json')


//mock数据需要使用$http请求    分类页请求    分类

var classList = require('../json/classList.json')

      //  品牌

var brandList = require('../json/brand.json')

    //  购物车

var shoppingList = require('../json/shopping.json')

//使用api的方法来创建连续时候的请求
var apiRoutes = express.Router()

//   首页获取
apiRoutes.get("/navList",function(req,res){
  res.json(navList)
})

apiRoutes.get("/titleList",function(req,res){
  res.json(titleList)
})

apiRoutes.get("/conList",function(req,res){
  res.json(conList)
})

//  居家
apiRoutes.get("/homeData",function(req,res){
  res.json(homeData)
  console.log(req,res)
})
apiRoutes.get("/banneData",function(req,res){
  res.json(banneData)
})

//  美妆

apiRoutes.get("/beautyData",function(req,res){
  res.json(beautyData)
})

// 个护

apiRoutes.get("/nurseTData",function(req,res){
  res.json(nurseTData)
})

apiRoutes.get("/nurseCData",function(req,res){
  res.json(nurseCData)
})


//  分类页获取
apiRoutes.get("/classList",function(req,res){
  res.json(classList)
})

apiRoutes.get("/brandList",function(req,res){
  res.json(brandList)
})

//  购物车
apiRoutes.get("/shoppingList",function(req,res){
  res.json(shoppingList)
})




//调用api
app.use("/api",apiRoutes)

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
