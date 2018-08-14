const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Returns list of loaders for specific situation
 *
 * @param {object} options extra settings for loaders
 * @param {object} options.cssModules if `true` enables css-modules classname resolution
 * @param {boolean} options.extractFile if `true` returns an *.css file during build
 * @returns {string[]} configured list of loaders
 */
const buildStyleLoader = (options = {}) => {
  const { cssModules = false, extractFile = false } = options;

  const cssModulesOptions = cssModules
    ? {
        modules: true,
        localIdentName: '[local]___[hash:base64:5]',
      }
    : {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      ...cssModulesOptions,
      importLoaders: 1,
    },
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      plugins: () => [autoprefixer()],
    },
  };

  const endpointLoader = extractFile ? MiniCssExtractPlugin.loader : 'style-loader';
  const loaders = [endpointLoader, cssLoader, 'csso-loader', postcssLoader, 'sass-loader'];

  return loaders;
};

module.exports = buildStyleLoader;