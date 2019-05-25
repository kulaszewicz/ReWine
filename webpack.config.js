// entry => bundle

const path = require('path');


module.exports = {
    entry: './src/brain.js',
    output: {
        path: path.join(__dirname, 'public'), //absolute path to public
        filename: "bundle.js"
    },

    module: {
        rules: [{
            loader: 'babel-loader', // load babel
            test: /\.js$/,       // criteria is for files with .js
            exclude: /node_modules/ // we exclude node_modules, everything there is done already
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: "cheap-module-eval-source-map",

    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};