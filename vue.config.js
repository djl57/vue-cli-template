module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 5050,
    host: 'localhost',
    // open: true,
  },
  // svg配置
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  // 打包配置
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${version}.${Timestamp}.js`,
      chunkFilename: `[name].${version}.${Timestamp}.js`
    }
  },
  // map配置
  configureWebpack: {
    externals: {
      'AMap': 'AMap' // 高德地图配置
    }
  }
}