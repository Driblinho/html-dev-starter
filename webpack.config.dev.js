 const path = require('path')
 const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const devConf = {
    //watch: true,
    devtool: 'inline-cheap-source-map',
    watchOptions: {
        ignored: ['node_modules/**'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}

module.exports = merge(baseConfig, devConf)