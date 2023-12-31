
export function webpackServer({ port, output, page = 'index.html' }) {
  return {
    port,
    hot: true,
    historyApiFallback: true,
    open: true,
    static: {
      directory: output,
      watch: false,
    },
    liveReload: false,
    magicHtml: true,
  };
};