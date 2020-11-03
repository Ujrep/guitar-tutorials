/* eslint-disable */

module.exports = function (api) {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  return {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-proposal-class-properties', {
        loose: false,
      }],
      ["babel-plugin-styled-components", {
        "fileName": false,
        "ssr": false
      }],
    ],
    presets: [
      '@babel/env',
      '@babel/react',
    ],
  };
};
