import path from "node:path";
import nodeExternals from "webpack-node-externals";
import { Configuration, node } from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const browserConfig: Configuration = {
  mode: "production",
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      scriptLoading: "defer",
      filename: "main.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/assets/`,
          to: `${__dirname}/dist/assets/`,
        },
      ],
    }),
  ],
};

const serverConfig: Configuration = {
  mode: "production",
  entry: "./src/server/index.tsx",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: [nodeExternals()],
};

module.exports = [browserConfig, serverConfig];
