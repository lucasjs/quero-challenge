# Quero Challenge

<p align="center">
<img alt="David" src="https://img.shields.io/david/dev/lucasjs/quero-challenge">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/lucasjs/quero-challenge">
<img alt="GitHub" src="https://img.shields.io/github/license/lucasjs/quero-challenge">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasjs/quero-challenge">
</p>

![Screenshot](screenshot.png "Screenshot")

Stack:
- [React](https://github.com/facebook/react)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [PropTypes](https://github.com/facebook/prop-types)
- [Babel](https://github.com/babel/babel)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [PostCSS](https://github.com/postcss/postcss)
- [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- [Webpack](https://github.com/webpack/webpack)
- [ESLint](https://github.com/eslint/eslint)
- [stylelint](https://github.com/stylelint/stylelint)
- [Storybook](https://github.com/storybookjs/storybook)

## Run the project locally

**1 -** Clone the project and install the dependencies:

```
$ git clone https://github.com/lucasjs/quero-challenge.git
$ cd quero-challenge
$ npm install
```

**2 -** Run development mode:

```
$ npm start
```
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Scripts

Build:

```
$ npm run build
```

Storybook:

```
$ npm run storybook
```
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

## Folders

    .
    ├── README.md
    ├── LICENSE
    ├── .storybook/
    |   ├── addons.js
    |   ├── config.js
    |   └── webpack.config.js
    ├── public/
    |   └── index.html
    ├── src/
    |   ├── components
    |   ├── containers
    |   ├── stories/
    |   |   └── index.js
    |   ├── App.css
    |   ├── App.js
    |   ├── global.css
    |   └── index.js
    ├── package.json
    ├── screenshot.png
    ├── webpack.config.js
    ├── yarn.lock
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc.json
    ├── .stylelintrc
    └── .gitignore
