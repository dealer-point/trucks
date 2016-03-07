//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Promise = require('es6-promise').Promise;
module.exports = [
  { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader!tslint-loader' },
  { test: /\.js$/, loader: 'babel-loader' },

  //{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.scss$/, loader: 'style!css!sass' },
  { test: /\.sass$/, loader: 'style!css!sass' },

  { test: /\.html$/, exclude: /node_modules/, loader: 'raw' },
  { test: /\.jade$/, loader: 'jade' },

  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },

  { test: '\.jpg$', exclude: /node_modules/, loader: 'file' },
  { test: '\.png$', exclude: /node_modules/, loader: 'url' }
];
