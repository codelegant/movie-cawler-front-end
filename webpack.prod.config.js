const webpack = require('webpack');
const name = 'index';
module.exports = {
  entry: {
    [`${name}`]: `./front/src/script/${name}`,
  },
  output: {
    path: './front/dist/script/',
    public: 'http://localhost:3000',
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',// short for babel-loader
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url',
        query: { limit: 2048 }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    })
  ],
};