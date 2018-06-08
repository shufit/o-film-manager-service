const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:  {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    plugins: [
        new OpenBrowserPlugin({url:'http://localhost:8888'}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.html')
        }),
    ],
    devServer: {
        inline:true,
        port:8888,
    },
    module: {
        rules: [
            {test: /\.js$/,exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015', 'react']
                  }
                }
            },
            {test: /\.css$/,use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './src/images/[name].[ext]'
                  }
              }
        ]
    },
    plugins:[
    new ExtractTextPlugin('styles.css')
    ]
}