{
  "parser": "babel-eslint",
  "rules": {
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "mjs": "never",
      "jsx": "never",
      "tsx": "never"
    }],
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
  },
  "extends": ["airbnb-base"],
  "overrides": [{
    "files": ["src/**/*.ts{,x}"],
    "rules": {
      "no-restricted-globals": ["off", "name", "open"],
      "no-undef": "off"
    }
  }]
}