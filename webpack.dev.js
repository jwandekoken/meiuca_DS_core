const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commom = require("./webpack.common");

module.exports = merge(commom, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
});
