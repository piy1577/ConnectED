module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react",
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "react-hooks", "import", , "prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "react/prop-types": 0, // Disable prop-types as you use TypeScript or propTypes
        "import/extensions": [
            "error",
            "ignorePackages",
            { js: "never", jsx: "never" },
        ],
        "import/prefer-default-export": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
