import config  from './index';

const globals = config.get('globals');
const paths   = config.get('utils_paths');

const webpackConfig = {
  entry: paths.src('entry'),
  output: {
    path: paths.project(config.get('dir_dist')),
    filename: 'main.js'
  },
  plugins: [],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.project(config.get('dir_src')),
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ],
  },
  eslint: {
    configFile: paths.project('.eslintrc'),
    failOnError: globals.__PROD__,
    emitWarning: globals.__DEV__,
  },
};

export default webpackConfig;
