var path = require("path")
var webpack = require("webpack")
var merge = require("webpack-merge")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var baseWebpackConfig = require("./webpack.base.config")
module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/static/"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["css-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.tpl.html"
        })
    ]
})