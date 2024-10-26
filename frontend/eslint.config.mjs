import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import"; // Import for sorting imports
import pluginUnusedImports from "eslint-plugin-unused-imports"; // Import for removing unused imports

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021, // Supports modern JavaScript syntax
      sourceType: "module", // Allows ES module syntax (e.g., import/export)
      globals: {
        ...globals.browser, // For browser globals (React)
        ...globals.node, // For Node.js globals
      },
    },
  },
  pluginJs.configs.recommended, // JavaScript recommended rules
  pluginReact.configs.flat.recommended, // React recommended rules
  {
    plugins: {
      import: pluginImport, // Plugin for import sorting
      "unused-imports": pluginUnusedImports, // Plugin for unused imports
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },
    rules: {
      "prettier/prettier": "error", // Enforce Prettier formatting
      "react/react-in-jsx-scope": "off", // For React 17+ (no need to import React in scope)
      "no-unused-vars": "warn", // Warns on unused variables for cleaner development
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always", // Requires new lines between groups
        },
      ],
      "unused-imports/no-unused-imports": "error", // Automatically remove unused imports
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ], // Warn for unused variables
    },
  },
];
