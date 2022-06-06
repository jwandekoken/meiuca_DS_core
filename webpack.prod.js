const { merge } = require("webpack-merge");
const commom = require("./webpack.common");

module.exports = merge(commom, {
  mode: "production",
});
