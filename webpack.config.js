var path= require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: 'css-loader'
                            }),
                            less: ExtractTextPlugin.extract({
                                use: ["css-loader", "less-loader"]
                            })
                        }
                    }
                }
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "less-loader"]
                })
            }

            // sass
            {
                test: /\.s[ac]ss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            },

            // stylus
            {
                test: /\.styl$/,
                use: ["vue-style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'    // 将图片都放入 images 文件夹下，[hash:7]防缓存
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入 fonts 文件夹下
                    }
                }]
            }
        ],
        plugins:[ 
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin({
                filename: "./src/assets/global.scss"
            }) 
        ]
    }
}