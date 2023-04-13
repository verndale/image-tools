# Verndale Frontend Toolkit

[![npm][npm-image]]()

<p align="center">
  <a href="verndale.com">
    <img src="src/static/images/logo-verndale.png" alt="Verndale" />
  </a>
</p>

<br />

The **Verndale Frontend Toolkit** is a powerful solution designed to help developers streamline their
development process. It utilizes the latest technologies and tools to provide a comprehensive solution
for building robust and efficient web applications.

## Features

- **Handlebars:** Handlebars is a popular templating engine that allows developers to create dynamic
  templates with ease. With the toolkit, developers can use Handlebars to quickly and easily create reusable
  components that can be used throughout the application.

- **SASS:** SASS is a powerful CSS preprocessor that provides advanced features like variables, nesting,
  and mixins. With the toolkit, developers can use SASS to create complex and dynamic stylesheets that are
  easy to maintain and update.
- **JavaScript:** The toolkit supports a variety of JavaScript tools and frameworks to help developers build
  complex functionality into the application.
- **Storybook:** Storybook is a powerful UI development and testing tool that makes it easy to create and
  test UI components. With the toolkit, developers can use Storybook to rapidly develop and test UI components,
  ensuring they work as intended before integrating them into the application.
- **ViteJS:** ViteJS is a fast and reliable bundler that makes it easy to bundle code and assets for deployment.
  It's designed to work seamlessly with other tools in the toolkit, allowing developers to quickly build and deploy
  their application.

## Getting Started

### Requirements

Download/install these tools/packages in order to run the toolkit locally.

- [Node][node-url] - `~18.x.x`
- [Yarn][yarn-url] - `~1.x.x`

### Install requirements

#### Install Node JS

Installing Node will also install the Node Package Manager ([npm][npm-url])

- Click [here][node-url] to grab the package
- Download the most current node which has the latest features
- Follow on screen instructions to complete installation

To make sure Node is installed properly, launch your terminal or command line and type:

```sh
node --version
```

#### Install Yarn

- Follow instructions [here][yarn-url]
- After installation, you should be able to run yarn on the command line

To make sure Yarn installed properly, launch your terminal or command line and type:

```sh
yarn --version
```

_You should see a version number such as this: `1.22.4`_

---

### Install dependencies

Once you have your requirements installed, navigate to the root of the toolkit in terminal or command line and run:

```sh
yarn
```

This will bring down all `dependencies` and `devDependencies` for the project that are defined in the `package.json` file so you can properly run a build and work on the project.

---

## Running the application

The toolkit uses [storybook](https://storybook.js.org/) to deliver all components (and modules) within an interactive UI. Developers should write one or multiple stories per component that describe all the states a component can support.

To start storybook run the following at the root of the project:

```sh
yarn start
```

---

## Scripts

When working in the development environment, you will use the `yarn start` task to view up-to-date changes while you work.

For individual tasks, the following can be used:

- Lint JavaScript files - `yarn js-lint`
- Lint Styles files - `yarn style-lint`
- Build - `yarn build`
- Build static version of storybook - `yarn build-storybook`

---

## Scaffolding

The toolkit provides tools that help to generate resource files faster with a predefined standard structure.

The following available tasks can be used:

- Scaffold a new page - `yarn create-page`
- Scaffold a new module - `yarn create-module`
- Scaffold a new component - `yarn create-component`

---

## Production build

The compiled and minified assets can be created by running `yarn build`. This will put all compiled and minified
files in the `dist` folder.

---

## Source code

### Page templates

The page templates can be found under the following folder:

- HTML - `src/html/templates`

> **Note:** each page template contains a collection of individual modules.
> To view the source code for these modules see the "Module source code" section below.

### Module source code

The module source code can be found under the following:

- HTML - `src/html/modules`
- SCSS - `src/scss/modules`
- JS - `src/scripts/modules`

### Component source code

The component source code can be found under the following:

- HTML - `src/html/components`
- SCSS - `src/scss/components`
- JS - `src/scripts/components`

### Stories source code

The stories source code can be found under the following:

- Components - `src/stories/components`
- Modules - `src/stories/modules`
- Templates - `src/stories/templates`

[node-url]: https://nodejs.org/en/
[yarn-url]: https://classic.yarnpkg.com/en/docs/install/#mac-stable
[npm-url]: https://www.npmjs.com/
[verndale-logo]: src/images/logo-verndale.png?raw=true 'Verndale'
[npm-image]: https://img.shields.io/npm/v/npm.svg

### Static files

All static files, such as images or fonts, should be located under `src/static`. SVG files to be included in the svgstore spritesheet should be located under `src/static/svg-sprites`.
