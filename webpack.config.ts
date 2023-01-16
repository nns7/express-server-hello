import path from "node:path";
import nodeExternals from "webpack-node-externals";
import { Configuration, node } from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

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
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: [nodeExternals()],
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
        loader: "ts-loader",
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
