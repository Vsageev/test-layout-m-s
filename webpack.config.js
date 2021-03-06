const path = require('path')
var webpack = require("webpack")


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, {

            test: /\.(png|svg|jpg|jpeg|gif)$/i,

            type: 'asset/resource',

        }, {

            test: /\.(woff|woff2|eot|ttf|otf)$/i,

            type: 'asset/resource',

        }, ],
    },
}