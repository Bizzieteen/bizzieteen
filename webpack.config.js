const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './assets/webpack-entry.js',
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.ProvidePlugin({
            waypoints: 'waypoints',
            'window.waypoints': 'waypoints'
        })
    ],
    resolve: {
        alias: {
            'waypoints': 'waypoints/lib/jquery.waypoints.js'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};