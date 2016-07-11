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
            }
        ]
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     {from: __dirname + '/images', to: __dirname + '/build/images'}
        // ]),
        new HtmlWebpackPlugin({
            // title: "Title goes here",
            inject: path.join(__dirname, './src/index.html'),
        })
    ],
}

module.exports = Config;