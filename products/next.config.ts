const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config: { plugins: any[]; }, options: any) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "product",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./HomePage": "./src/pages/HomePage",
        },
        shared: {
          react: { singleton: true, requiredVersion: "^18.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
          "next": { singleton: true, requiredVersion: "latest" },
        },
        publicPath: "http://localhost:3001/_next/",
      })
    );
    return config;
  }
};
