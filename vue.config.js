const prodConfig = process.env.NODE_ENV === 'production' 
  ? {
    publicPath: './', // 线上相对路径调整
    // productionSourceMap: false, // 生产环境map(同configureWebpack下devtool)
  }
  : {}

module.exports = {
  ...prodConfig,
}