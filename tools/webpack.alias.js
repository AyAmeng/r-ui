const path = require('path')

/**
 * Webpack Alias
 */
module.exports = {
  asset: path.resolve(__dirname, '../src/asset'),
  components: path.resolve(__dirname, '../src/components'),
  router: path.resolve(__dirname, '../src/router'),
  service: path.resolve(__dirname, '../src/service'),
  example: path.resolve(__dirname, '../src/example')
}
