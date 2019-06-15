const IgnoreTypesNotFoundWebpackPlugin = require("ignore-babel-typescript-type-warnings-webpack-plugin");

const withIgnoreBabelTypescriptTypeWarnings = (config = {}) => {
  return {
    ...config,
    webpack(config, options) {
      config.plugins.push(new IgnoreTypesNotFoundWebpackPlugin());

      if (typeof config.webpack === "function") {
        return config.webpack(config, options);
      }

      return config;
    },
  };
};

module.exports = withIgnoreBabelTypescriptTypeWarnings;
