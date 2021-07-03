module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    sourceType: "module",
  },
  plugins:[],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-undef": "error",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
