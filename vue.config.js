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
  }
}