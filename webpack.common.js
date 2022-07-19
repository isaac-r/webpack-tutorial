const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        inject: 'body'
    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", // 3. Inject styles into dom
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ],
            },
        ]
    }
};