import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { htmlPlugin } from './htmlPlugin.js';

export function plugins(isProd, paths, template) {
  return [
    new webpack.ProgressPlugin(),
    ...htmlPlugin(isProd, paths, template),
    new CopyPlugin({
      patterns: [
        { from: paths.imagesDir, to: `${paths.outputDir}/images/[path][name][ext]` },
      ]
    }),
    new NodePolyfillPlugin(),
    isProd && new MiniCssExtractPlugin({
      filename: paths.outputCssFile,
      chunkFilename: paths.outputCssFile,
    }),
  ];
};