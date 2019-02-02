const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
    entry: path.resolve('./src/App/App.js'),
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style/style.min.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/App/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from:'src/App/Content/images',
                to:'images'
            }
        ]),
        new ImageminPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i })
    ],
    performance: {
        hints: false
    }
};