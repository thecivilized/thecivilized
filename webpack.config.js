var webpack = require("webpack");

module.exports = {
    context: __dirname + "/src",
    entry: "./app",
    output: {
        path: __dirname + "/generated",
        filename: "all.js"
    },
    plugins: [
    	new webpack.optimize.UglifyJsPlugin({
    		minimize: true,
    		compress: {
        		warnings: false
    		}
    	})
  	]
};