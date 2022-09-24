const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    output: {
        assetModuleFilename: "imgs/[name].[hash].[ext]"
    },
    module: {
        rules: [            
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
};