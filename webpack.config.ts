import path from "node:path";
import nodeExternals from "webpack-node-externals";
import { Configuration, node } from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const isDev = process.env.NODE_ENV === "development";

const config: Configuration = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "inline-source-map" : undefined,
  target: "node",
  entry: {
    main: "./server/index.tsx",
  },
  output: {
    filename: "main.js",
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
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: [nodeExternals()],
};

export default config;
