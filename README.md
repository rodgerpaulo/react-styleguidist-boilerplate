# Jussi Front End Base

A base structure for projects made with React

> This boilerplate was created initialy with [Create React App](https://github.com/facebookincubator/create-react-app) and Ejected

## Stack

- Webpack 3
- Sass & Postcss
- Linting (Eslint, Prettier e Stylelint)
- Precommit Lints
- WhyDidYouUpdate

## Requires

- Node 8.11+

## Installation

Dependencies

```sh
npm install
# or with yarn
yarn install
```

## IDE Setup

In order to keep quality and consistency, the project runs with **Eslint**, **Prettier** and **Stylelint**.
This project runs real-time validations with **Visual Studio** extensions and configurations, so it is recomended.

#### Plugins

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

## Running the project

```sh
npm run start
# or with yarn
yarn start
```

## Styleguide

This project uses [Styleguidist](https://react-styleguidist.js.org/) to automatically generate components styleguide.

Run locally:

```sh
npm run styleguidist
#or with yarn
yarn styleguidist
```

Build styleguide:

```sh
npm run styleguidist-build
#or with yarn
yarn styleguidist-build
```

## Testing

The testing environmeent isn't implemented yet, but you can still run test scripts with:

```sh
npm run test
# or with yarn
yarn test
```

To analise the _coverage_

```sh
npm run coverage
# or with yarn
yarn coverage
```

## Build

Generate the **build** statics by running:

```sh
npm run build
# or with yarn
yarn build
```
