module.exports = api => {
  const isTest = api.env('test');

  api.cache(true);
  // configs to load when testing environment
  if (isTest)
    return {
      presets: ['@babel/preset-env']
    };

  return {
    presets: ['@babel/preset-env'],
    ignore: ['**/__tests__/**', '*.test.js', '*.spec.js']
  };
};
