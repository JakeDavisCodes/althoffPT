const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: {
    home: '/client/src/home/index.jsx',
    services: '/client/src/services/index.jsx',
    error: '/client/src/error/index.jsx'
},
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },

};
