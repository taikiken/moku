const webpack = require('webpack');

const config = require('./config/webpack.config.build');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

console.group('webpack:build');

console.time('build');

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
