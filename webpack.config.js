module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    },{
      exclude: /node_modules/
    }]
  },
}