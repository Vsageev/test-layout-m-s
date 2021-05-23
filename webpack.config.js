const path = require('path')

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  externals:{
    jquery: 'jQuery',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
}