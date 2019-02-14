const webpack = require('webpack');

const config = require('./config/webpack.config.dev');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

console.group('webpack:develop');

console.time('develop');

webpack(config, (error, stats) => {
  if (error) {
    throw new Error(`webpack:error - ${error}`);
  }
  console.log(stats.toString({
    colors: true,
    progress: true,
  }));
});

console.groupEnd();
