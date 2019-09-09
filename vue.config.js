const prodConfig = process.env.NODE_ENV === 'production' 
  ? {
    // publicPath: './', // 线上相对路径调整
    publicPath: 'https://doudizhu.github.io/my-blog-demo/dist/', // github预览时：相对路径，深入切换页面时，加载资源文件路径会有缺失问题
    productionSourceMap: false, // 生产环境map(同configureWebpack下devtool)
  }
  : {}

module.exports = {
  ...prodConfig,
}