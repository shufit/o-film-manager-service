const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';
const buildPath = 'build';

module.exports = {
    entry: './src/js/index.js',
    output:  {
        path: path.resolve(__dirname, buildPath),
        filename: 'index.js',
        publicPath:publicPath,
    },
    plugins: [
        new OpenBrowserPlugin({url:'http://localhost:8888'}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.html'),
            filename: 'index.html',
        }),
        new ExtractTextPlugin('styles.css')
        // new webpack.HotModuleReplacementPlugin(), //添加
        // new webpack.NamedModulesPlugin(), //添加，官方推荐的帮助分析依赖的插件
    ],
    devServer: {
        publicPath: publicPath,
        contentBase: path.resolve(__dirname, buildPath),
        // inline:true,
        hot: true,
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
}