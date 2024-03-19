const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type { import('webpack').Configuration } */
module.exports = {
  mode: "development",
  entry: {
    theme: "./src/theme.js",
    main: "./src/index.js",
  },
  plugins: [new HtmlWebpackPlugin()],

  // simplifies testing the problem
  output: {
    clean: true,
  },
  devtool: false,
  devServer: {
    compress: false,
  },
};
