/* jshint esversion: 6 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


/*
*服务管家客服端打包配置
*/
const publicPath = '/';
const buildPath = '/appeal-server';

module.exports = {
    entry: {
      main:path.resolve(__dirname,'./src/js/server.js'),
      jssdk:path.resolve(__dirname,'./src/js/jweixin-1.2.0.js')
    },
    output:  {
        path: path.resolve(__dirname, buildPath),
        filename: '[name].bundle.js',
        publicPath:path.resolve(__dirname,publicPath),
    },
    plugins: [
        new OpenBrowserPlugin({url:'http://localhost:8888'}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/server.html'),
            filename: 'index.html',
            chunks:['main'],
        }),
        new ExtractTextPlugin('styles.css')
        // new webpack.HotModuleReplacementPlugin(), //添加
        // new webpack.NamedModulesPlugin(), //添加，官方推荐的帮助分析依赖的插件
    ],
    devServer: {
        publicPath: publicPath,
        contentBase: path.resolve(__dirname, buildPath),
        inline:true,
        hot: true,
        port:8888,
        historyApiFallback:true,
    },
    module: {
        rules: [
            {test: /\.js$/,exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015', 'react'],
                     'plugins':[['import',{'libraryName':'antd-mobile'}]]
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
};

/*
*服务管家客户端打包配置
*/
// const publicPath = '/';
// const buildPath = '/appeal-client';
//
// module.exports = {
//     entry: {
//       main:path.resolve(__dirname,'./src/js/client.js'),
//       jssdk:path.resolve(__dirname,'./src/js/jweixin-1.2.0.js')
//     },
//     output:  {
//         path: path.resolve(__dirname, buildPath),
//         filename: '[name].bundle.js',
//         publicPath:path.resolve(__dirname,publicPath),
//     },
//     plugins: [
//         new OpenBrowserPlugin({url:'http://localhost:8888'}),
//         new HtmlWebpackPlugin({
//             template: path.join(__dirname, '/client.html'),
//             filename: 'index.html',
//             chunks:['main'],
//         }),
//         new ExtractTextPlugin('styles.css')
//         // new webpack.HotModuleReplacementPlugin(), //添加
//         // new webpack.NamedModulesPlugin(), //添加，官方推荐的帮助分析依赖的插件
//     ],
//     devServer: {
//         publicPath: publicPath,
//         contentBase: path.resolve(__dirname, buildPath),
//         inline:true,
//         hot: true,
//         port:8888,
//         historyApiFallback:true,
//     },
//     module: {
//         rules: [
//             {test: /\.js$/,exclude: /(node_modules|bower_components)/,
//                 use: {
//                   loader: 'babel-loader',
//                   options: {
//                     presets: ['es2015', 'react'],
//                     'plugins':[['import',{'libraryName':'antd-mobile'}]]
//                   }
//                 }
//             },
//             {test: /\.css$/,use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},
//             {
//                 test: /\.(png|jpg|gif|svg)$/,
//                 loader: 'file-loader',
//                 options: {
//                     name: './src/images/[name].[ext]'
//                   }
//               }
//         ]
//     },
// };
