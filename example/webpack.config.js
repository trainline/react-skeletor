const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
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
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
};
