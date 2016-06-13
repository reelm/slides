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
        './vendor/prism-bundle.js',
        './wsd-index'
    ],
    'konfur-index': [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './vendor/prism-bundle.js',
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
      loaders: ['style-loader', 'css-loader'],
      include: __dirname
    },
    {
      test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/,
      loader: "url-loader?limit=8192"
    }
    ]
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
