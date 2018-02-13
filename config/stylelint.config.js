module.exports = {
  extends: require.resolve('stylelint-config-sass-guidelines'),
  rules: {
    'max-nesting-depth': 3,
    'selector-no-qualifying-type': [true, {
      'ignore': ['attribute', 'class']
    }]
  }
};
