/* eslint-disable global-require, import/no-dynamic-require */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

const config = {
  mode: 'development',
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app.html',
      // favicon: 'static/favicon.ico',
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },

  output: {
    publicPath: '/',
    filename: 'dist/bundle_[hash].js',
    chunkFilename: 'dist/[name].[chunkhash].js',
  },
};

const cssLoadersInclude = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'packages'),
  path.resolve(__dirname, 'node_modules/normalize.css'),
];

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    modules: {
      localIdentName: '[local]__[hash:6]',
    },
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [
        postcssPresetEnv({
          stage: 0,
          browsers: '> 5%',
        }),
        postcssNested(),
      ];
    },
  },
};

config.devtool = 'eval-source-map';

config.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    cssLoader,
    postcssLoader,
  ],
  include: cssLoadersInclude,
});

config.cache = true;

config.devServer = {
  publicPath: '/',
  host: '0.0.0.0',
  port: 3001,
  hot: true,
  inline: false,
  historyApiFallback: true,
  contentBase: 'dist/',
};

module.exports = config;
