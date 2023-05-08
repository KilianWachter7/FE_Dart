const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // host: "MacBook-Air-von-Kilian.local",
    host: "192.168.0.214",

    historyApiFallback: {
      index: "/",
      publicPath: "/",
    },
  },
});
