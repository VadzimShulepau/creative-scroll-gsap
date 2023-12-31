import { getPaths } from './webpack/paths.js';
import { variables } from './webpack/variables.js';
import { webpackServer } from './webpack/webpackServer.js';
import { plugins } from './webpack/plugins.js';
import { loaders } from './webpack/loaders.js';
import { optimization } from './webpack/optimization.js';
import { resolvers } from './webpack/resolvers.js';

export default function (env) {

  const { isDev, isProd, mode, port, preprocessor, esbuild, template } = variables(env);
  const paths = getPaths(isDev);
  const devServer = !isProd ? webpackServer(port, paths.outputDir) : undefined;
  console.log(env)

  return {
    mode,
    context: paths.srcDir,
    entry: {
      index: paths.entryFile,
    },
    output: {
      path: paths.outputDir,
      filename: paths.outputJsFile,
      clean: true,
      assetModuleFilename: paths.assetFile,
    },
    stats: {
      children: true,
    },
    devtool: isDev ? 'source-map' : false,
    devServer,
    resolve: resolvers(paths),
    plugins: plugins(isProd, paths, template),
    module: loaders(isDev, isProd, preprocessor, esbuild, template, paths),
    optimization: optimization(isProd),
  };
};