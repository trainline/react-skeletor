/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
const webpack = require('webpack');
const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/assets',
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname),
    historyApiFallback: true
  }
};
