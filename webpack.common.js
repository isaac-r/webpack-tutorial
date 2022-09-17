const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    output: {
        assetModuleFilename: "imgs/[name].[hash].[ext]"
    },
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
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                // test: /\.(svg|png|jpg|gif)$/,
                // use: {
                //     loader: "file-loader",
                //     options: {
                //         name: "[name].[hash].[ext]",
                //         outputPath: "imgs"
                //     }
                // }
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
};