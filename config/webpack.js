var webpack = require('webpack');

module.exports = {
    context: __dirname + '/../app',
    entry: './src/app',
    output: {
        path: __dirname + '/../dist',
        filename: 'all.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=/app/templates/!html'
            }
        ]
    }
};