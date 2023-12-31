export function variables(env) {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';
  const isProd = !isDev;
  const preprocessor = env.preprocessor ? `${env.preprocessor}-loader` : false;
  const esbuild = env.esbuild;
  const template = env.template;
// console.log(env)
  return {
    isDev,
    isProd,
    mode,
    port,
    preprocessor,
    esbuild,
    template,
  };
};