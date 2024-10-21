# Ad dashboard [![Build status](https://github.com/4-life/ad-dashboard/actions/workflows/main.yml/badge.svg)](https://github.com/4-life/ad-dashboard/actions) [![Last commit](https://img.shields.io/github/last-commit/4-life/ad-dashboard)](https://github.com/4-life/ad-dashboard/commit/main)

## Used libraries

![Typescript](https://img.shields.io/badge/-Typescript-333333?style=flat-square&logo=Typescript)
![React](https://img.shields.io/badge/-React-333333?style=flat-square&logo=React)
![Chakra UI](https://img.shields.io/badge/-ChakraUI-333333?style=flat-square&logo=chakraui)
![Vite](https://img.shields.io/badge/-Vite-333333?style=flat-square&logo=vite)
![ESLint](https://img.shields.io/badge/-ESLint-333333?style=flat-square&logo=eslint)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
