const path = require("path");
const merge = require("webpack-merge");
const baseConf = require("./webpack.base");
const webpack = require('webpack');

const config  = {
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(config,baseConf);