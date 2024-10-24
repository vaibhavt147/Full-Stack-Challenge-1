import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // For browser environments (React)
        ...globals.node, // For Node.js environments (require, process)
      },
      ecmaVersion: 2021, // Supports modern JavaScript syntax
      sourceType: "module", // Support for ES module syntax
    },
  },
  pluginJs.configs.recommended, // JavaScript recommended rules
  pluginReact.configs.flat.recommended, // React recommended rules
  {
    rules: {
      "prettier/prettier": "error", // Ensures code is formatted with Prettier
    },
  },
];
