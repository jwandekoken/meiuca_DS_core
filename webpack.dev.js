const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
    new CopyPlugin({
      patterns: [
        {
          from: "node_modules/@jc/ds_design_tokens/dist/css/globals.css",
          to: "tokens/globals.css",
        },
        {
          from: "**/**/*.css",
          context: "node_modules/@jc/ds_design_tokens/dist/css",
          to: "tokens/[path]/[name][ext]",
        },
      ],
    }),
  ],
});
