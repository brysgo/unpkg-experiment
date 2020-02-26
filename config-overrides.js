const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    config.plugins = (config.plugins || []).concat([
      new DynamicCdnWebpackPlugin()
    ]);
    return config;
  }
};
