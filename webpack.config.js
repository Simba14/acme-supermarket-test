const webpack = require('webpack');
const path = require('path');

const parentDir = path.resolve(__dirname, 'dist')

const config = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
      contentBase: __dirname + '/dist',
      historyApiFallback: true,
      hot: true
  }
};
module.exports = config;
