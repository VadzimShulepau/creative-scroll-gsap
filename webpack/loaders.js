import { normalize, parse, relative, resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import HtmlBundlerPlugin from 'html-bundler-webpack-plugin'

export function loaders(isDev, isProd, preprocessor, esbuild, template, paths) {
  let rulesOfLoaders = { rules: [] };

  const htmlLoader = [
    {
      test: /\.(html|ejs)$/i,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'template-ejs-loader',
        },
      ],
    }
  ];

  const htmlBundlerPluginLoader = {
    test: /\.(html|ejs)$/i,
    loader: HtmlBundlerPlugin.loader,
    options: {
      preprocessor: 'ejs',
      preprocessorOptions: {
        views: [paths.componentsDir],
      },
    },
  };

  const njkLoader = {
    test: /\.njk$/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'nunjucks-webpack-loader', // add nunjucks-webpack-loader
        options: {
          alias: { // add alias and you can use it in your template
            pages: paths.njkPagesDir,
            components: `${paths.njkDir}/components`,
            images: paths.imagesDir,
          },
          tags: { // if you want to use different tokens
            blockStart: '{%',
            blockEnd: '%}',
            variableStart: '{{',
            variableEnd: '}}',
            commentStart: '{#',
            commentEnd: '#}'
          }
        },
      },
    ],
  };

  const stylesLoader = {
    test: /\.(sa|sc|c)ss$/i,
    use: [
      isDev ? {
        loader: 'style-loader',
      } : {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        // options: {
        //   modules: {
        //     // auto: true,
        //     localIdentName: isDev ? '[local]' : '[local]--[contenthash:8]',
        //   },
        // },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              'postcss-preset-env',
            ],
          },
        },
      },
      preprocessor && {
        loader: preprocessor,
      },
    ],
  };

  const imagesAssetsLoader = {
    test: /\.(png|jpeg|webp|avif|gif|jpg|ico|svg)$/i,
    type: 'asset/resource',
    // generator: {
    //   filename: 'images/[name][ext]',
    // },
  };

  const imagesMinPlugin = {
    test: /\.(png|jpeg|webp|avif|gif|jpg|ico|svg)$/i,
    type: 'asset',
    loader: ImageMinimizerPlugin.loader,
    enforce: 'pre',
    options: {
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            'imagemin-gifsicle',
            'imagemin-mozjpeg',
            'imagemin-pngquant',
            'imagemin-svgo',
            'imagemin-webp',
          ],
        },
      },
    },
    parser: {
      dataUrlCondition: {
        maxSize: 1024 * 2,
      },
    },
  };

  const imageWebpackLoader = {
    test: /\.(png|jpeg|webp|avif|gif|jpg|ico|svg)$/i,
    type: 'asset/resource',
    use: [
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.3, 0.5],
            speed: 10
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75,
          },
        },
      },
    ],
  };

  const fontsLoader = {
    test: /\.(woff|woff2|ttf|otf)$/i,
    type: 'asset/resource',
    // generator: {
    //   filename: 'fonts/[name][ext]'
    // },
  };

  const filesLoader = {
    test: /\.(txt|pdf|md|)$/i,
    type: 'asset/resource',
  };

  const babelLoader = {
    test: /\.js$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: '3.33' }, modules: 'auto' }],
        ],
      },
    },
  };

  const esbuildLoader = {
    test: /\.js?$/,
    loader: 'esbuild-loader',
    options: {
      target: 'es2015'
    },
  };

  const templateLoader = template === 'njk' ? njkLoader : template === 'html-bundler' ? htmlBundlerPluginLoader : htmlLoader;

  const imagesLoader = isDev ? imagesAssetsLoader : imagesMinPlugin;
  const scriptsLoader = esbuild ? esbuildLoader : babelLoader;

  return rulesOfLoaders = {
    rules: [
      ...templateLoader,
      stylesLoader,
      fontsLoader,
      filesLoader,
      imagesLoader,
      scriptsLoader
    ],
  };
};