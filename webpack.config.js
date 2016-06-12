/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'wsd-index': [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './wsd-index'
    ],
    'konfur-index': [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './konfur-index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: 'html-loader!markdown-loader?gfm=false'
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader'],
    },
    {
      test: /\.js$/,
      include: /code\-examples/,
      loaders: ['raw-loader'],
    },
    {
      test: /\.css$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.png$/,
      loader: 'url-loader?mimetype=image/png',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.gif$/,
      loader: 'url-loader?mimetype=image/gif',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?mimetype=image/jpg',
      include: path.join(__dirname, 'assets')
    }]
  },
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    hot: true,
    progress: true,
    stats: 'errors-only',
    port: 8080
  }
};
