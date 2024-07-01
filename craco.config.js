const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    //@路径配置
    alias: {
      '@': resolve('src'),
    },
    //文件后缀省略
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    configure(webpackConfig) {
      webpackConfig.devtool = 'source-map'
      return webpackConfig
    },
  },
}
