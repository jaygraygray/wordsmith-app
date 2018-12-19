const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// const HOST = process.env.host || 3000;

module.exports = (
  {} = {},
  {
    mode = 'production',
    port = 3000,
    hot = true,
  } = {},
) => ({
  entry: {
    app:
      mode === 'production'
      ? ['@babel/polyfill', './src/index.tsx']
      : [
        'webpack/hot/only-dev-server',
        '@babel/polyfill',
        './src/index',
      ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: '/',
    hot: mode === 'development',
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
});