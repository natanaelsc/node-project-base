# Scripts

## Initial

```bash
yarn init -y
```

```bash
touch .gitignore
```

```bash
node -v > .nvmrc
```

## Typescript

```bash
yarn add -D typescript ts-node @types/node
```

```bash
yarn tsc --init
```

```bash
yarn add -D ts-node-dev
```

## Eslint

```bash
yarn add -D eslint
```

```bash
yarn eslint --init ou yarn create @eslint/config
```

```bash
touch .eslintignore
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.eslintrc.json)***

## Prettier

```bash
yarn add --dev --exact prettier
```

```bash
yarn add -D eslint-plugin-prettier eslint-config-prettier
```

```bash
yarn add -D eslint-import-resolver-typescript tsconfig-paths
```

```bash
echo {}> .prettierrc.json
```

```bash
touch .prettierignore
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.prettierrc.json)***

## Nodemon

```bash
yarn add -D nodemon
```

```bash
echo {}> nodemon.json
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/nodemon.json)***

## [Dotenv](https://github.com/motdotla/dotenv)

```bash
yarn add dotenv
```

```bash
import 'dotenv/config'
```

***[File Exemple](https://github.com/natanaelsc96/node-project-base/blob/main/.env.exemple)***

## [Jest (TS Jest)](https://github.com/kulshekhar/ts-jest)

```bash
yarn add -D jest ts-jest @types/jest
```

```bash
npx ts-jest config:init
```

> Rename jest.config.js to .ts

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/jest.config.ts)***

## [Commit Msg Linter](https://github.com/legend80s/commit-msg-linter)

```bash
yarn add -D git-commit-msg-linter
```

```bash
echo {}> commitlinterrc.json
```

```bash
npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/commitlinterrc.json)***

## [Lint Stage](https://github.com/okonet/lint-staged)

```bash
npx mrm@2 lint-staged
```

```bash
echo {}> .lintstagedrc.json
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.lintstagedrc.json)***
