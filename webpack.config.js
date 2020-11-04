const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

prodConfig = {
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackShellPluginNext({
            onBuildEnd:{
                scripts: ['./node_modules/prettier/bin-prettier.js --write dist/index.html'],
                blocking: false,
                parallel: true
              }
        })

    ]
}


module.exports = merge(baseConfig, prodConfig)