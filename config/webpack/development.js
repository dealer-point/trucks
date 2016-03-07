var loaders = require("./loaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './app/frontend/app.ts',
  output: {
    path: './public',
    filename: 'js/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  module: {
    loaders: loaders
  },
  watch: true,
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/frontend/app.jade',
      title: 'TruckPoint CRM',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      inject: 'body',
      hash: true
    })
  ]
};
