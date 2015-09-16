'use strict';

var Path = require('path');
var Webpack = require('webpack');
/*
var plugins = [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];*/
/*
if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new Webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            }
        })
    );
}
*/
module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/index'
    ],
    output: {
        path: Path.join(__dirname, 'public'),
        filename: 'hapi-setup.js',
        publicPath: '/'
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
            include: Path.join(__dirname, 'client')
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
