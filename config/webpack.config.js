var path = require('path');

module.exports = {
    entry: './assets/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public/js'),
    },
};
