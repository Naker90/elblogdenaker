let path = require('path');

module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist" ),
        compress: true,
        port: 8000
    }
};