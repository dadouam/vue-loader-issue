var path = require('path');
module.exports = {
  configureWebpack: {
    resolveLoader: {
      modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          resourceQuery: /\?vue/,
          loader: 'testhtmlloader'
        },
        {
          test: /\.js$/,
          resourceQuery: /\?vue/,
          loader: 'testjsloader'
        }
      ]
    }
  }
}