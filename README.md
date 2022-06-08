# node-project-base
# Commands
# Initial
-> yarn init -y <br>
-> touch .gitignore <br>
-> node -v > .nvmrc
# Typescript
-> yarn add -D typescript ts-node @types/node <br>
-> yarn tsc --init <br>
-> yarn add -D ts-node-dev <br>
# Eslint
-> yarn add -D eslint <br>
-> yarn eslint --init ou yarn create @eslint/config <br>
-> touch .eslintignore <br>
# Prettier
-> yarn add --dev --exact prettier <br>
-> yarn add -D eslint-plugin-prettier eslint-config-prettier <br>
-> yarn add -D eslint-import-resolver-typescript tsconfig-paths <br>
-> echo {}> .prettierrc.json <br>
-> touch .prettierignore <br>
# Nodemon
-> yarn add -D nodemon <br>
-> echo {}> nodemon.json <br>
# DotEnv
yarn add dotenv
import 'dotenv/config'
