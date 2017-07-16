const path = require('path');

module.exports = {
  entry: './game.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
            presets: ['es2015']
        },
        exclude: /node_modules/
      },
    ]
  },
};