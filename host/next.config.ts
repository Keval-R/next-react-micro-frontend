import { NextConfig } from "next";
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "nextHost",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          nextApp: "nextApp@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          reactApp: "reactApp@http://localhost:3002/remoteEntry.js",
        },
        shared: {
          '@stitches/react': {
            singleton: true,
          },
          react: {
            singleton: true,
            version: '0',
            requiredVersion: false,
          },
          'react-dom': {
            requiredVersion: false,
            singleton: true,
            version: '0',
          },
        }
      })
    );
    config.experiments = { topLevelAwait: true };
    return config;
  },
};

export default nextConfig;
