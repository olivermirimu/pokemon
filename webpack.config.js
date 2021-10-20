const path = require("path");
const HtmlWbpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const env = require("dotenv").config({
  path: path.join(__dirname, "./.env"),
}).parsed;

// replace environment variables in code
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "scripts/[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: {
          loader: "file-loader",
          options: { name: "static/images/[name].[ext]" },
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      index: "index.html",
    },
    hot: true,
    open: true,
    port: 3000,
    // stats: { errorDetails: true },
    static: path.join(__dirname, "./dist"),
  },
  plugins: [
    new HtmlWbpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new DefinePlugin(envKeys),
  ],
};
