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
      extensions: ['.js', '.tsx'],
    },
    configure(webpackConfig) {
      webpackConfig.devtool = false

      return webpackConfig
    },
  },
}
