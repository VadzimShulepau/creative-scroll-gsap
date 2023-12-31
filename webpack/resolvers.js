import { relative, resolve } from 'path';

export function resolvers({ root, srcDir, ejsDir, njkDir }) {
  return {
    extensions: ['.js', '.css', '.sass', '.html', '.json', '.webp', '.png', '.jpg', '.jpeg', '.avif', '.svg', '.gif', '.ejs', '.njk'],
    alias: {
      '@core-js': resolve(root, 'node_modules', 'core-js/stable/index.js'),
      '@regenerator-runtime/runtime': resolve(root, 'node_modules', 'regenerator-runtime/runtime.js'),
      '@nm': resolve(root, 'node_modules'),
      '@styles': resolve(srcDir, 'styles'),
      '@scripts': resolve(srcDir, 'scripts'),
      '@assets': resolve(srcDir, 'assets'),
      '@images': resolve(srcDir, 'images'),
      '@fonts': resolve(srcDir, 'fonts'),
      '@components': resolve(srcDir, 'components'),
      "@pages": resolve(srcDir, 'pages'),
    },
    modules: ['node_modules'],
  };
};