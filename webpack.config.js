const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "react": "./app.js"
    },
    output: {
        path: path.resolve(__dirname, "build"), // string
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        // new UglifyJSPlugin({
        //     compress: true,
        //     sourceMap: true,
        //     warnings: false
        // }),
        CopyWebpackPlugin([
            {
                from: "./index.html"
            }
        ]),
        new ExtractTextPlugin('css/styles.css')
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".json", ".jsx", ".sass"]
    }
}