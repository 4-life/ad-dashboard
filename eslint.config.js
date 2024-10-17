import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginRequireExplicitGenerics from 'eslint-plugin-require-explicit-generics';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [eslintPluginPrettier, js.configs.recommended, ...tseslint.configs.recommended, pluginReact.configs.flat.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'require-explicit-generics': pluginRequireExplicitGenerics,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          "singleQuote": true,
          "parser": "flow"
        }
      ],
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-require-imports': 'off',
      'no-shadow': 'off',
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 0 }],
      '@typescript-eslint/no-shadow': 'error',
      'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],
      'indent': ['error', 2, { 'SwitchCase': 1, 'ObjectExpression': 1, 'ImportDeclaration': 1, 'ignoredNodes': ['VariableDeclaration[declarations.length=0]'] }],
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      '@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true, 'allowTypedFunctionExpressions': true }],
      'no-case-declarations': 0,
      '@typescript-eslint/camelcase': 0,
      'no-trailing-spaces': ['error'],
      'curly': ['error'],
      'eqeqeq': ['error'],
      'no-alert': ['error'],
      'no-eq-null': ['error'],
      '@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true, 'argsIgnorePattern': '^_', 'args': 'all' }],
      '@typescript-eslint/no-explicit-any': ['error', { 'ignoreRestArgs': true }],
      'object-curly-spacing': ['error', 'always'],
      'space-before-blocks': ['error'],
      'arrow-spacing': ['error'],
      'array-callback-return': 'error',
      'spaced-comment': ['error', 'always'],
      'no-console': 'error',
      'no-mixed-operators': 'error',
      'max-len': ['error', { 'code': 100 }],
      'one-var': ['error', 'never'],
      'no-unreachable': 'error',
      'semi': 'error',
      'default-param-last': 'off',
      'react/require-default-props': 'off',
      'import/no-extraneous-dependencies': 0,
      '@typescript-eslint/no-empty-function': 'error',
      'require-explicit-generics/require-explicit-generics': ['error', ['useState']],
      'no-await-in-loop': 0,
      'no-plusplus': 0,
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        2,
        {
          'namedComponents': 'function-declaration',
          'unnamedComponents': 'arrow-function'
        }
      ]
    },
  },
)
