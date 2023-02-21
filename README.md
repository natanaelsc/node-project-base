# Scripts

## Get Start

```sh
npm install
npm run start:dev
```

## Iniciando Novo Projeto

```sh
yarn init -y
```

```sh
touch .gitignore && node -v > .nvmrc
```

## Bibliotecas

## Typescript

```sh
yarn add -D typescript ts-node @types/node
```

```sh
yarn tsc --init
```

### [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

```sh
yarn add -D ts-node-dev
```

### [Eslint](https://eslint.org)

```sh
yarn add -D eslint
```

```sh
yarn eslint --init ou yarn create @eslint/config
```

```sh
touch .eslintignore
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.eslintrc.json)***

## [Prettier](https://prettier.io)

```sh
yarn add --dev --exact prettier
```

```sh
yarn add -D eslint-plugin-prettier eslint-config-prettier
```

```sh
yarn add -D eslint-import-resolver-typescript tsconfig-paths
```

```sh
echo {}> .prettierrc.json
```

```sh
touch .prettierignore
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.prettierrc.json)***

## [Nodemon](https://nodemon.io)

```sh
yarn add -D nodemon
```

```sh
echo {}> nodemon.json
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/nodemon.json)***

## [Dotenv](https://github.com/motdotla/dotenv)

```sh
yarn add dotenv
```

```sh
import 'dotenv/config'
```

***[File Exemple](https://github.com/natanaelsc96/node-project-base/blob/main/.env.exemple)***

## [Jest (TS Jest)](https://github.com/kulshekhar/ts-jest)

```sh
yarn add -D jest ts-jest @types/jest
```

```sh
npx ts-jest config:init
```

> Rename jest.config.js to .ts

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/jest.config.ts)***

## [Commit Msg Linter](https://github.com/legend80s/commit-msg-linter)

```sh
yarn add -D git-commit-msg-linter
```

```sh
echo {}> commitlinterrc.json
```

```sh
npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/commitlinterrc.json)***

## [Lint Stage](https://github.com/okonet/lint-staged)

```sh
npx mrm@2 lint-staged
```

```sh
echo {}> .lintstagedrc.json
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.lintstagedrc.json)***
