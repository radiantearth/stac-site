const path = require('path');

module.exports = {
  entry: './assets/js/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/assets/js',
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                          useBuiltIns: 'usage',
                          corejs: {
                            version: '3',
                            proposals: true,
                          },
                          targets: '> 0.25%, not dead',
                        }
                    ]                  
                ]
            }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: 'bundle.js'
  }
}
