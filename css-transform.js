const { createTransformer } = require('babel-jest')
const babelJest = createTransformer(require('./babel.config.js'))

module.exports = {
  process(src, filename, config, options) {
    if (filename.endsWith('.css')) {
      return ''
    }

    return babelJest.process(src, filename, config, options)
  },
}
