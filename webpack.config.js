module.export = {
  entry: ["./src/index.ts"],
  mode: "development",
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
};
