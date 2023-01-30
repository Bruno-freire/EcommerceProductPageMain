const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory:  path.resolve(__dirname)
    },
    compress: true,
    port: 8000
  },
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }]
  },
}