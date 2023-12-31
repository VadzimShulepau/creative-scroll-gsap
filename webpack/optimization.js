import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { EsbuildPlugin } from 'esbuild-loader';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
// import ImageminWebpWebpackPlugin from 'imagemin-webp-webpack-plugin';

const imageminMinifyPluginOpt = {
  minimizer: {
    implementation: ImageMinimizerPlugin.imageminMinify,
    options: {
      // Lossless optimization with custom option
      // Feel free to experiment with options for better result for you
      plugins: [
        ['gifsicle', { interlaced: true }],
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 10 }],
        ['webp', { lossless: true }],
        // Svgo configuration here https://github.com/svg/svgo#configuration
        [
          'svgo',
          {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    addAttributesToSVGElement: {
                      params: {
                        attributes: [
                          { xmlns: 'http://www.w3.org/2000/svg' },
                        ],
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
      ],
    },
  },
};

const sharpMinifyPluginOpt = {
  minimizer: {
    implementation: ImageMinimizerPlugin.sharpMinify,
    options: {
      encodeOptions: {
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          progressive: true,
          quality: 80,
          mozjpeg: true,
        },
        webp: {
          // https://sharp.pixelplumbing.com/api-output#webp
          lossless: true,
        },
        avif: {
          // https://sharp.pixelplumbing.com/api-output#avif
          lossless: true,
        },
        // png by default sets the quality to 100%, which is same as lossless
        // https://sharp.pixelplumbing.com/api-output#png
        png: {
          compressionLevel: 7, //max 9
          palette: true,
          quality: 70,
        },
        // gif does not support lossless compression at all
        // https://sharp.pixelplumbing.com/api-output#gif
        gif: {},
      },
    },
  },
};

export function optimization(isProd, esMode) {
  return {
    splitChunks: {
      chunks: 'all',
    },
    minimize: isProd,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          collapseWhitespace: true,
          removeComments: true,
        },
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
      // new HtmlMinimizerPlugin({
      //   parallel: true,
      //   minimizerOptions: {
      //     collapseWhitespace: true,
      //   },
      // }),
      !esMode && new TerserPlugin({
        extractComments: true,
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/,
        parallel: true,
      }),
      esMode && new EsbuildPlugin({
        target: 'es2015',  // Syntax to transpile to (see options below for possible values)
        css: true,
      }),
      new ImageMinimizerPlugin(imageminMinifyPluginOpt),
      // new ImageminWebpWebpackPlugin(),
    ],
  };
};