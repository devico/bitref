module.exports = {
  entry: "./src/index.js",

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