import * as path from 'path';

// TODO: Rename to CONTEXT_DIR
/** Script execution folder (project folder) */
const contextDir = process.cwd();

/**
 * Important files paths
 */
const paths = {
  outputDir: path.join(contextDir, 'dist'),
  source: path.join(contextDir, 'src/index.tsx'),
  template: path.join(contextDir, 'src/index.html'),
};

/**
 * Regular expressions for Webpack
 */
const regexp = {
  css: /\.(css|scss|sass)$/,
  cssModules: /\.module\.(css|scss|sass)$/,
  files: /\.(png|jpg|jpeg|webp|gif|svg|woff|woff2|eot|ttf)$/,
  graphql: /\.(graphql|gql)$/,
  typescript: /\.(ts|tsx)$/,
};

export { contextDir, paths, regexp };
