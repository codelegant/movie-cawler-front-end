const webpack = require('webpack');
const name = '';
module.exports = {
  entry: {
    [`${name}`]: `./src/script/${name}`,
  },
  output: {
    path: './public/script/',
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react/lib/update': 'React.addons.update',
    'react/lib/ReactCSSTransitionGroup': 'React.addons.CSSTransitionGroup'
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