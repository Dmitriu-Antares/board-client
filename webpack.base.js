var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const envConfig = require('./webpack/config');
var webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env',{ targets: { browsers: ['last 2 versions']}}]
                    ],
                    plugins: [
                        "transform-class-properties",
                        "transform-decorators-legacy"
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'autoprefixer-loader',
                        options: {
                            browsers: 'last 2 version'
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(envConfig)
        })
    ]
};