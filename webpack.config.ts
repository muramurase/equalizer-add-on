import {} from "webpack-dev-server";
import { Configuration } from "webpack";

const config: Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
    ]
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: `${__dirname}/public`,
    },
    open: true,
    port: 3000,
  },
};

export default config;