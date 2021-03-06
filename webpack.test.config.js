const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ROOT = path.resolve(__dirname, 'app');


module.exports = {
    context: ROOT,

    resolve: {
        //extentions: '.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                exclude: [ 
                    /node_modules/,
                    /\.test\.js$/
                ],
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                },
                enforce: 'post'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    devtool: 'inline-source-map',

    devServer: {}
};