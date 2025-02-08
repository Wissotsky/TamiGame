const { merge } = require("webpack-merge");
const common = require("./rspack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // progress: true,
    liveReload: false,
    static: {
      directory: path.join(__dirname),
    },
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    }  
  },
});
