// import { defineConfig } from '@rsbuild/core';
// import { pluginReact } from '@rsbuild/plugin-react';

// export default defineConfig({
//   plugins: [pluginReact()],
// });

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [pluginReact(),
    pluginModuleFederation({
      name: 'basket',
      exposes: {
        './Cart': './src/component/Cart',
      },
      shared: ['react', 'react-dom'],
    }),],
    server: {
      port: 3002,
    },
});
