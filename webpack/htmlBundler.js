import HtmlBundlerPlugin from 'html-bundler-webpack-plugin';
import { FaviconsBundlerPlugin } from 'html-bundler-webpack-plugin/plugins';

export function htmlBundler(paths, isProd) {
  const pluginOpt = {
    minify: {
      collapseWhitespace: isProd,
      removeComments: isProd,
    },
  };

  return [
    new HtmlBundlerPlugin({
      outputPath: '/dist',
      entry: {
        // define templates here
        index: paths.htmlFile,
        about: 'pages/about.html',
        // data: 'src/data/home.json',
      },
      js: {
        filename: 'scripts/[name].[contenthash:8].js',
        outputPath: '/scripts',
        inline: false,
      },
      css: {
        filename: 'styles/[name].[contenthash:8].css',
        outputPath: '/styles',
        // inline: false,
      },
      watchFiles: {
        paths: ['./src'],
        // files: [/\.(html|ejs|eta)$/],
        // ignore: [
        //   /[\\/](node_modules|dist|test)$/, // ignore standard project dirs
        //   /[\\/]\..+$/, // ignore hidden dirs and files, e.g.: .git, .idea, .gitignore, etc.
        //   /package(?:-lock)*\.json$/, // ingnore npm files
        //   /webpack\.(.+)\.js$/, // ignore Webpack config files
        //   /\.(je?pg|png|ico|webp|svg|woff2?|ttf|otf|eot)$/, // ignore binary assets
        // ],
      },
      // preprocessor: 'ejs',
      // preprocessorOptions: {...},
      ...pluginOpt,
    }),
    // new FaviconsBundlerPlugin({
    //   enabled: true, // true, false, auto - generate favicons in production mode only
    //   // favicons configuration options, see https://github.com/itgalaxy/favicons#usage
    //   faviconOptions: {
    //     path: '/images/', // favicons output path relative to webpack output.path
    //     icons: {
    //       favicons: true, // Create regular favicons.
    //       android: true, // Create Android homescreen icon.
    //       appleIcon: true, // Create Apple touch icons.
    //       appleStartup: false, // Create Apple startup images.
    //       windows: false, // Create Windows 8 tile icons.
    //       yandex: false, // Create Yandex browser icon.
    //     },
    //   },
    // }),
  ];
};

// entry: {
//   page01: {
//     import: 'src/views/news/sport/index.html', // <= source template
//     filename: 'news/sport.html', // => output ./dist/news/sport.html
//   },
// },