// webpack/webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",  //Use "false" instead when deploying
    // Optional: Add production optimizations like Terser, MiniCssExtractPlugin, etc.
});
