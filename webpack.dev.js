const { merge } = require("webpack-merge");
const commom = require("./webpack.common");

module.exports = merge(commom, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    static: "./dist",
  },
});
