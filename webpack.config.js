var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const Config = {

    entry: [
        path.join(__dirname, "./src/index.jsx")
    ],
    output: {
        fileName: "bundle.js",
        path: __dirname + "/build",
    },


    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style!css-loader!stylus-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: path.join(__dirname, './src/assets'), to: path.join(__dirname, './build/assets')}
        ]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/template.ejs'),
        })
    ],
    devtool: "source-map"
}

module.exports = Config;