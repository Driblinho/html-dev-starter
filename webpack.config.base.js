const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const WebpackMessages = require('webpack-messages')
const webpack = require('webpack')
const lqip = require('lqip-modern')

const PATH = {
    CSS: 'css/',
    JS: 'js/',
    IMG: 'images/'
}

module.exports = {
    entry: {
        app : './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${PATH.JS}template.script.js`
    },
    mode: 'development',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: `${PATH.CSS}style.bundle.css`,
        }),
        new CopyPlugin({
            patterns: [
                { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: PATH.CSS },
                { from: './node_modules/jquery/dist/jquery.slim.min.js', to: PATH.JS },
                { from: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', to: PATH.JS },
                { from: './node_modules/lazysizes/lazysizes.min.js', to: PATH.JS },
                { from: './src/images', to: PATH.IMG },
                { from: './src/images', to: `${PATH.IMG}lqip/`, transform : async (content, path) => (await lqip(content)).content }
            ],
        }),
        new HtmlWebpackTagsPlugin({ 
            tags: [
                `${PATH.CSS}bootstrap.min.css`, 
                `${PATH.JS}jquery.slim.min.js`, 
                `${PATH.JS}bootstrap.bundle.min.js`,
                `${PATH.JS}lazysizes.min.js`
            ],
            append: false
        }),
        new WebpackMessages({
            name: 'html-dev-starter',
            logger: str => console.log(`>> ${str}`)
        })
    ]
};