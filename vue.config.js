module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://as-vip.missfresh.cn',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
