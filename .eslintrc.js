const fs = require('fs');

const eslintConfig = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread" : true
    },
  },
  "rules": {
    // no-extraneous-dependencies and no-unresolved are set to 0
    // ... since we have custom resolve rules in webpack
    // ... we should fix this by using custom eslint resolvers
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,

    // only multiline situations affect the diffs
    "comma-dangle": ["error", "always-multiline"],

    "no-console": ["warn", { allow: ["warn", "error", "dir", "debug", "info"] }],
    "react/no-unescaped-entities": 0,
    "react/sort-comp": 0,

    "arrow-parens": ["error", "always"],
    "arrow-body-style": 0,

    // Disable broken or opinionated airbnb rules
    "import/prefer-default-export": 0,
    "react/no-find-dom-node": 0,
    "react/no-unused-prop-types": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/label-has-for": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,

    // Disable new airbnb rules that break the lint but may have merit
    // v14:
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "no-multi-assign": 0,
    // v15
    "react/no-will-update-set-state": 0,
    "react/jsx-wrap-multilines": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/iframe-has-title": 0,
    "jsx-a11y/media-has-caption": 0,
    // v16
    "indent": 0,
    "function-paren-newline": 0,
    "no-restricted-globals": 0,
    "object-curly-newline": 0,
    "prefer-destructuring": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-closing-tag-location": 0,
    "react/jsx-curly-brace-presence": 0,
    // v17:
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,

    // Replace slow import/no-duplicates with eslint's built in and much faster
    // no-duplicate-imports, as we don't need import plugin's extra checks. See
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "import/no-duplicates": 0,
    "no-duplicate-imports": 2,

    // performance hits
    "import/no-absolute-path": 0,
    "import/no-cycle": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  "plugins": [
    "react",
    "react-hooks",
  ],
  "globals": {
    "CONFIG": false,
    "CLIENT_CONFIG": false,
  }
};

if (fs.existsSync('./schema.graphql')) {
  eslintConfig.plugins.push('graphql');

  eslintConfig.rules['graphql/template-strings'] = [2, {
    "env": "apollo"
  }];

  eslintConfig.rules['graphql/no-deprecated-fields'] = [2];

  eslintConfig.rules['graphql/required-fields'] = [1, {
    requiredFields: ['id'],
  }]
}

module.exports = eslintConfig;
