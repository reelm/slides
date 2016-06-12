/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    'wsd-index': [
        'babel-polyfill',
        './wsd-index'
    ],
    'konfur-index': [
        'babel-polyfill',
        './konfur-index'
    ]
  },
  output: {
    path: path.join(__dirname, "build", "dist"),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      include: /code\-examples/,
      loaders: ['raw-loader'],
    },
    {
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)|(code\-examples)/,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=8192"
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  }
};
