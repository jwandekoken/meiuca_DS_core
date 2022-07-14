const path = require("path");

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
