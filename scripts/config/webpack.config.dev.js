'use strict';

const webpack = require('webpack');

const pkg = require('../../package');
const settings = require('../settings');

const mode = 'development';

module.exports = {
  mode,
  entry: `${settings.src}/${settings.entry}`,
  output: {
    path: settings.dist,
    filename: settings.filename,
    // chunkFilename: `${settings.dist}/[name].chunk.js`,
    publicPath: settings.publicPath,
  },
  module: {
    rules: [
      // eslint
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              // formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: settings.src,
        exclude: [
          /node_modules/,
        ],
      },
      // babel
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              cacheDirectory: true,
              presets: [
                [
                  // プリセットを指定することで、ES2018 を ES5 に変換
                  // use react preset
                  // '@babel/preset-react',
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                      browsers: [
                        'last 2 versions',
                        'Safari >= 10',
                        'Explorer >= 10',
                        'last 4 Edge versions',
                        'ChromeAndroid >= 18.0',
                        'Android >= 6',
                        'iOS >= 10.0',
                      ],
                    },
                    useBuiltIns: 'usage',
                  },
                  // modules: false - IE Symbol polyfill not found error になる
                  // 回避策 - babel-polyfill import + useBuiltIns: entry -> dev-client.bundle.js とコンフリクトの危険性
                  // babelrc - "useBuiltIns": "usage" とし `{ modules: false }` 使用しない
                  // { modules: false },
                ],
              ],
              ignore: [
                'node_modules',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
              ],
            },// options
          },
        ],// use
      },
    ],// rules
  },// modules
  // performance: {
  //   hints: 'warning',
  //   // int (in bytes)
  //   maxAssetSize: 200000,
  //   maxEntrypointSize: 400000,
  // },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode),
        BUILD_VERSION: JSON.stringify(pkg.version),
        BUILD_TIME: JSON.stringify(Date.now()),
      },
    }),
  ],
};
