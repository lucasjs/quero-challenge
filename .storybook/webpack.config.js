const custom = require('../webpack.config.js')
const path = require('path')

module.exports = async ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: custom.module.rules
    },
    resolve: {
      ...config.resolve,
      modules: custom.resolve.modules
    }
  }
}
