var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: "babel?cacheDirectory" },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
};
