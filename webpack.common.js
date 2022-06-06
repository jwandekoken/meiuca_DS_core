const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /.(scss|css)$/,
        use: [{ loader: "lit-css-loader" }, { loader: "sass-loader" }],
      },
    ],
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "components/[name].js",
    library: {
      name: "dsc-design-system-core",
      type: "umd",
    },
  },
};
