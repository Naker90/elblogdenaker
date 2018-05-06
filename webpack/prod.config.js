const Merge = require('webpack-merge');
const BaseConfig = require('./base.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = Merge(BaseConfig, {
    mode: 'production',
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style/style.min.css")
    ]
});
