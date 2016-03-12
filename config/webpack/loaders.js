var Promise = require('es6-promise').Promise;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader!tslint-loader' },
  { test: /\.js$/, loader: 'babel-loader' },

  { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
  { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },

  { test: /\.html$/, exclude: /node_modules/, loader: 'raw' },
  { test: /\.jade$/, loader: 'jade' },

  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?name=/built/fonts/[name].[ext]&limit=10000&minetype=application/font-woff' },
  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=/built/fonts/[name].[ext]' },

  { test: /\.(jpg|png|gif)$/, loader: 'file-loader?name=/built/images/[name].[ext]' },
];
