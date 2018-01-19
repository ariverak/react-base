const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        publicPath: "/dist/"
    },
    devServer: {
        open: true,
        port: 3000,
        inline: true
    },
    module: {
        rules: [
            //aqui van los loaders
            {
                // test: que tipo de archivo quiero reconocer
                // use: que loader se va a encargar del archivo
                test: /\.css$/,
                //  use: ['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react']
                    }
                }
            },
             {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    watch: true,
    plugins: [
        new ExtractTextPlugin("./css/[name].css")
    ]
}