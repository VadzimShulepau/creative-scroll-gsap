import { normalize, parse, resolve } from 'path';
import { readdirSync } from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export function htmlPlugin(isProd, paths, template) {
  const templateFile = paths[`${template}File`] || paths.htmlFile;
  const outputFile = paths.outputHtmlFile;

  const pluginOpt = {
    favicon: resolve(paths.imagesDir, 'favicon', 'favicon.ico'),
    inject: 'body',
    minify: {
      collapseWhitespace: isProd,
      removeComments: isProd,
    },
  };

  const htmlPages = [
    new HtmlWebpackPlugin({
      template: templateFile,
      filename: outputFile,
      ...pluginOpt,
    }),
  ];

  return htmlPages;
};