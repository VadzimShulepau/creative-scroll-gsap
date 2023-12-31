import { readdirSync } from 'fs';
import { parse } from 'path';
import HtmlWebpackPartialsPlugin from 'html-webpack-partials-plugin';

export function htmlPartials(paths) {
  const htmlPartials = [];
  const components = readdirSync(paths.componentsDir, { withFileTypes: true });

  const partialOpt = {
    template_filename: '*',
    priority: 'replace',
    inject: true,
  };

  components.map((item) => {
    const itemName = parse(item.name).name;
    htmlPartials.push(
      new HtmlWebpackPartialsPlugin({
        path: `${paths.componentsDir}/${item.name}`,
        location: itemName,
        ...partialOpt,
      })
    );
  });

  return htmlPartials;
};