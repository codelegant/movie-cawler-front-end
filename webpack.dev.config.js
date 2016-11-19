const webpack = require('webpack');
const name = 'app';
module.exports = {
  entry: {
    [`${name}`]: `./front/src/script/${name}`,
  },
  output: {
    path: './front/dist/script/',
    public: 'http://localhost:3000',
    filename: '[name].min.js'
  },
  devtool: 'eval-source-map',
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
        NODE_ENV: JSON.stringify(true)// production | true
      }
    }),
  ],
};