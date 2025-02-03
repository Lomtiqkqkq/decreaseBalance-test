
## Description

Данный проект реализовывает расширяемую систему, которая имеет функционал над балансом пользователя
# Структура Проекта:
```
.
\---src
    |   app.module.ts
    |   main.ts
    |   
    +---application
    |       decrease-item.use-case.ts # use-case оркестрант для списания покупки с баланса пользователя
    |       
    +---core
    |   \---entity
    |           transaction-history.entity.ts # сущность операции
    |           user.entity.ts # сущность пользователя
    |           
    +---infrastructure
    |   +---controller
    |   |       user-purchase.controller.ts # rest контроллер для входящего запроса
    |   |       
    |   +---database
    |   |       typeorm.config.service.ts # конфиг orm
    |   |       
    |   +---dto
    |   |       decreaseBalance.dto.ts
    |   |       
    |   +---models
    |   |       transaction.typeorm.model.ts # модель для orm
    |   |       user.typeorm.model.ts        # ~~
    |   |       
    |   \---service
    |           transaction.typeorm.service.ts # реализация для typeorm
    |           user.typeorm.service.ts        # ~~
    |           
    \---modules
            transaction.module.ts
            user.module.ts
|   .env
|   .gitignore
|   .prettierrc
|   eslint.config.mjs
|   nest-cli.json
|   package-lock.json
|   package.json
|   README.md
|   tsconfig.build.json
|   tsconfig.json
```
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

