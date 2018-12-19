const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlPlugin({
      filename: 'index.html'
    }),
  ],
};