const path = require('path')

/**
 * Webpack Alias
 */
module.exports = {
  asset: path.resolve(__dirname, '../src/asset'),
  components: path.resolve(__dirname, '../src/components'),
  router: path.resolve(__dirname, '../src/router'),
  service: path.resolve(__dirname, '../src/service'),
  docs: path.resolve(__dirname, '../src/docs-preview'),
  styles: path.resolve(__dirname, '../src/styles')
}
