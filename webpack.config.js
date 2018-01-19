const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        index: path.resolve(__dirname,'src/js/index.js'),
        contacto: path.resolve(__dirname,'src/js/contacto.js')
    },
    output: {
        path:path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer:{
        open: true,
        port: 3000,
        contentBase: "./dist",
        inline: true
    },
    module:{
        rules:[
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
            }
        ]
    },
    watch:true,
    plugins:[
         new ExtractTextPlugin("./css/[name].css")
    ]
}