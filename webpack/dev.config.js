const path = require('path');
const Merge = require('webpack-merge');
const BaseConfig = require('./base.config.js');

module.exports = Merge(BaseConfig, {
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
                use: {
                    loader: "css-loader",
                    options: {
                        minimize: false
                    }
                }
            }
        ]
    }
});