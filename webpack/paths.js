import { resolve } from 'path';

export function getPaths(isDev) {
  const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash:8].${ext}`;
  const root = process.cwd();
  return {
    root,
    srcDir: resolve(root, 'src'),
    stylesDir: resolve(root, 'src', 'styles'),
    fontsDir: resolve(root, 'src', 'fonts'),
    imagesDir: resolve(root, 'src', 'images'),
    scriptsDir: resolve(root, 'src', 'scripts'),
    entryFile: resolve(root, 'src', 'scripts', 'index.js'),
    htmlFile: resolve(root, 'src', 'index.html'),
    componentsDir: resolve(root, 'src', 'components'),
    stylesFile: resolve(root, 'src', 'styles', 'styles.css'),
    outputDir: resolve(root, 'dist'),
    outputJsFile: fileName('js'),
    outputCssFile: `styles/${fileName('css')}`,
    outputHtmlFile: 'index.html',
    assetFile: isDev ? '[path][name][ext]' : '[path][name][contenthash:8][ext]',
  };
};
