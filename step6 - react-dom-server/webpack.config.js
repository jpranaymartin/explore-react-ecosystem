const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
