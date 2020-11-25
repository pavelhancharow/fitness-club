const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, ''),
    compress: true,
    port: 8080,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};