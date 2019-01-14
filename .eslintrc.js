module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
     },
    "extends": [
      "eslint:recommended",
      "prettier",
      "plugin:prettier/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "prettier/prettier": "error",
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "react/react-in-jsx-scope": 2
    }
};
