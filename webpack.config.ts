import path from "node:path";
import nodeExternals from "webpack-node-externals";
import { Configuration, node } from "webpack";

const config: Configuration = {
  target: "node",
  entry: {
    main: "./server/index.ts",
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
  },
  externals: [nodeExternals()],
};

export default config;
