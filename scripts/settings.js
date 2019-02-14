// babel props
const path = require('path');

const filename = 'moku';

module.exports = {
  dist: path.resolve(__dirname, '../dist'),
  build: path.resolve(__dirname, '../build'),
  src: path.resolve(__dirname, '../src'),
  // src: './babels/src',
  entry: `${filename}.js`,
  filename: `${filename}.bundle.js`,
  publicPath: '/assets/js/',
};
