# Node Project Base

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=natanaelsc_node-project-base&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=natanaelsc_node-project-base)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=natanaelsc_node-project-base&metric=coverage)](https://sonarcloud.io/summary/new_code?id=natanaelsc_node-project-base)

## Get Start

```sh
npm install
npm run start:dev
```

### Sonarqube

```sh
docker compose up -d
```

**User:** *admin* \
**Pass:** *admin*

<http://localhost:9000>

```sh
npm run sonar-scanner
```

## Iniciando Novo Projeto

```sh
npm init -y
```

```sh
touch .gitignore && node -v > .nvmrc
```

## Bibliotecas

## [Typescript](https://www.typescriptlang.org)

```sh
npm install -D typescript ts-node @types/node
```

```sh
npx tsc --init
```

### [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

```sh
npm install -D ts-node-dev
```

### [Eslint](https://eslint.org)

```sh
npm install -D eslint @eslint/create-config
```

```sh
npm create @eslint/config
```

```sh
touch .eslintignore
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.eslintrc.json)***

## [Prettier](https://prettier.io)

```sh
npm install --dev --exact prettier
```

```sh
npm install -D eslint-plugin-prettier eslint-config-prettier
```

```sh
npm install -D eslint-import-resolver-typescript tsconfig-paths
```

```sh
echo {} > .prettierrc.json
```

```sh
touch .prettierignore
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.prettierrc.json)***

## [Nodemon](https://nodemon.io)

```sh
npm install -D nodemon
```

```sh
echo {} > nodemon.json
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/nodemon.json)***

## [dotenv](https://github.com/motdotla/dotenv)

```sh
npm install dotenv
```

```sh
import 'dotenv/config'
```

***[File Exemple](https://github.com/natanaelsc96/node-project-base/blob/main/.env.exemple)***

## [TS Jest](https://github.com/kulshekhar/ts-jest)

```sh
npm install -D jest ts-jest @types/jest
```

```sh
npx ts-jest config:init
```

> Rename jest.config.js to .ts

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/jest.config.ts)***

## [Sonar Scanner](https://www.npmjs.com/package/sonar-scanner)

```sh
npm i sonar-scanner --save-dev
```

**Adicione script:**

```json
"scripts": {
  "sonar-scanner": "node_modules/sonar-scanner/bin/sonar-scanner"
}
```

## [Commit Msg Linter](https://github.com/legend80s/commit-msg-linter)

```sh
npm install -D git-commit-msg-linter
```

```sh
echo {} > commitlinterrc.json
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
echo {} > .lintstagedrc.json
```

***[File Config](https://github.com/natanaelsc96/node-project-base/blob/main/.lintstagedrc.json)***
