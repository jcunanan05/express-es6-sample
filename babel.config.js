module.exports = api => {
  const isTest = api.env("test");

  api.cache(true);

  // configs to load when testing environment
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ];
  if (isTest) {
    return {
      presets
    };
  }

  return {
    presets,
    ignore: ["**/__tests__/**", "*.test.js", "*.spec.js"]
  };
};
