module.exports = {
  entry: "./client/index.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  
  resolve: {
    extensions: [".js", ".jsx"]
  },

  node: {
    dns: 'mock',
    net: 'mock'
  },

  watch: true,

  watchOptions: {
    ignored: /node_modules/
  },

  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}