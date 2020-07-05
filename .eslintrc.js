module.exports = {
  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },
  parserOptions: {
    jsx: true,
  },
  extends: [
    'airbnb',
    'react-app',
    "plugin:react/recommended",
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',

  ],
  plugins: [
    'cypress',
    'promise',
    'prettier',
    'security'
  ],
  'rules': {
    camelcase: 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'func-names': 0,
    'global-require': 0,
    'max-classes-per-file': 0,
    'no-await-in-loop': 0,
    'no-case-declarations': 0,
    'no-continue': 0,
    'no-empty': 0,
    'no-empty-function': 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'no-useless-catch': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-return-assign': 0,
    'no-return-await': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-restricted-globals': 0,
    'spaced-comment': 0,
    'prefer-destructuring': 0,
    radix: 0,
    'cypress/no-assigning-return-values': 0,
    'cypress/no-unnecessary-waiting': 0,
    'import/no-cycle': 0,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions':  0,
    'promise/always-return': 0,
    'promise/catch-or-return': 0,
    'promise/no-nesting': 0,
    'promise/no-promise-in-callback': 0,
    'react/default-props-match-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    "react-hooks/exhaustive-deps": 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/no-this-in-sfc': 0,
    'react/no-unused-state': 0,
    'react/no-unused-prop-types': 0,
    'react/no-access-state-in-setstate': 0,
    'react/prop-types': 0,
    'react/static-property-placement': 0,
    'react/jsx-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'security/detect-non-literal-fs-filename': 0,
    'security/detect-non-literal-require': 0,
    'security/detect-object-injection': 0,
    'security/detect-possible-timing-attacks': 0,
    'you-dont-need-lodash-underscore/is-nil': 0
  },
}
