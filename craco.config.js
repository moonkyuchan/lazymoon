const cracoAlias = require("craco-alias");

module.exports = {
  eslint: {
    enable: false,
  },
  typescript: {
    enableTypeChecking: false,
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "./tsconfig.path.json",
      },
    },
  ],
};
