var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template:"./src/index.html",
  filename:"./index.html",
  inject: "body"
});

var CopyWebpackPlugin = require("copy-webpack-plugin");
var CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from:"./manifest.json", to:"./"
  },
  {
    from:"./images", to:"./images"
  }
]);

var OfflineWebpackPlugin = require('offline-plugin');
var OfflineWebpackPluginConfig = new OfflineWebpackPlugin({
  externals: [
    "index.html",
    "/?",
    "/manifest.json",
    "/images/icon/png",
    "/sw.js",
    "/add",
    "/help",
    "/edit",
    "/images/apple-touch-icon.png",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
    "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff"
  ]
});


module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig, 
    CopyWebpackPluginConfig,
    OfflineWebpackPluginConfig
  ],
  devServer: {
    historyApiFallback: true
  }
};