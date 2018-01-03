'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:3000',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              enforce: 'pre',
              loader: 'eslint-loader',
              options: {
                configFile: '.eslintrc',
                failOnWarning: false,
                failOnError: false
              }
          },
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          },
          {
              test: /\.scss$/,
              use: [
                "style-loader",
                "css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]",
                "postcss-loader",
                "sass-loader"
              ]
          }
        ]
    }
};
