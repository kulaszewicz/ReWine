// entry => bundle

const path = require('path');


module.exports = {
    entry: './src/rewine.js',
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
        }, {
            test:  /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
        ]
    },
    devtool: "cheap-module-eval-source-map",

    devServer: {
        contentBase: path.join(__dirname, 'public')
    },

    externals: {
        fs: require('fs'),
    },

    node: {
        fs: "empty"
    }
};