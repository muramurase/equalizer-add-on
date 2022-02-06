import {} from 'webpack-dev-server'
import { Configuration } from 'webpack'

const config: Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
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
        ],
      },
    ],
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: `${__dirname}/public`,
    },
    open: true,
    port: 3000,
  },
}

export default config
