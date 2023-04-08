const path = require('path')
const webpack = require('webpack')
const devSandboxDirectory = path.resolve(__dirname, 'dev-sandbox')

module.exports = {
  entry: './dev-sandbox/index.js',
  output: {
    path: devSandboxDirectory,
    publicPath: '/bundles/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 8080,
    compress: true,
    contentBase: devSandboxDirectory,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx'],
  },
}
