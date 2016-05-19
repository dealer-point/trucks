var Promise = require('es6-promise').Promise;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/frontend/app.ts',
    output: {
        path: './public',
        filename: 'built/app/js/bundle.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader!tslint-loader' },
            { test: /\.js$/, loader: 'babel-loader' },

            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader') },

            { test: /\.html$/, exclude: /node_modules/, loader: 'raw' },
            { test: /\.jade$/, loader: 'jade' },

            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?name=/built/fonts/[name].[ext]&limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=/built/fonts/[name].[ext]' },

            { test: /\.(jpg|png|gif)$/, loader: 'file-loader?name=/built/images/[name].[ext]' },
        ]
    },
    // watch: true,
    // devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: './app/frontend/app.jade',
          title: 'TruckPoint CRM',
          filename: '_index.html',
          favicon: 'public/favicon.ico',
          inject: 'body',
          hash: true
        }),
        new ExtractTextPlugin('built/app/css/app.css'),
// Нет времени разбираться почему не работает упаковка
        // new webpack.optimize.UglifyJsPlugin({
        //   warning: false,
        //   mangle: true,
        //   comments: false
        // })
    ]
};
