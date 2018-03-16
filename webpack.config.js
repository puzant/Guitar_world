var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/views/pages/contact_us/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: __dirname + '/views/pages',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugin:[HTMLWebpackPluginConfig]
};