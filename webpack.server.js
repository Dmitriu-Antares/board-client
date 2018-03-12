const path = require("path");
const merge = require("webpack-merge");
const baseConf = require("./webpack.base");
const nodeExternals = require('webpack-node-externals');

const config  = {
    devtool: 'inline-source-map',
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()]
};

module.exports = merge(config,baseConf);