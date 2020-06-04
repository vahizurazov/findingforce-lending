# Gridsome Finding Force Starter

## Install

<details>
<summary>Details</summary>

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install package devDependencies

For YARN `yarn` or `yarn install` (recommended)

For NPM `npm i` or `npm install`

### 3. Development mode

For yarn (recommended)

```sh
yarn start
```

For npm

```sh
npm start
```

### 4. Add GraphQL syntax for `<page-query>` and `<static-query>`

[Gridsome docs GraphQL syntax](https://gridsome.org/docs/dev-tools/#graphql-syntax-for-page-query-and-static-query)

- Install [GraphQL](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
- Add this item in `settings.json`

```sh
{
  ... ,
  "vetur.grammar.customBlocks": {
    "page-query": "graphql",
    "static-query": "graphql"
  },
  ...
}
```

- Run command ( Press `Ctrl+Shift+P` in the VS Code )

`Vetur: Generate grammar from vetur.grammar.customBlocks`

</details>

## Netlify Deploy

[https://findingforce.netlify.app/](https://findingforce.netlify.app/)

## Features

- Gridsome
- SCSS
- Markdown
- Tags
- Blog

## Plugins

With Gridsome offering a plugin-rich ecosystem, there are a few key plugins that make this project possible.

<details>
<summary>Details</summary>

- [Gridsome Source Filesystem](https://gridsome.org/plugins/@gridsome/source-filesystem) Transform files into content that can be fetched with GraphQL in your components.

</details>

## Credits

This project was initial created by [Sparkybit](https://sparkybit.com/).
