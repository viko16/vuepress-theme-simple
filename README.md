# vuepress-theme-simple

[![npm](https://img.shields.io/npm/v/vuepress-theme-simple.svg)](https://www.npmjs.com/package/vuepress-theme-simple)
[![LICENSE](https://img.shields.io/npm/l/vuepress-theme-simple.svg)](https://github.com/viko16/vuepress-theme-simple/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/viko16/vuepress-theme-simple.svg?theme=shields.io)](https://david-dm.org/viko16/vuepress-theme-simple)

> ✏️ Very Simple Blog Theme for VuePress.

![preview](https://user-images.githubusercontent.com/5064777/52162728-51198680-2713-11e9-9546-e737600be782.png)

Demo: [My Personal Blog](https://ukn.me/) ([Source](https://github.com/viko16/vuepress-blog))

## Features
- 💡 Simple Configuration.
- 🖼️ `/README.md` content will be **IGNORE** by this theme, and replace with posts list as screenshot.
- 📅 The list of posts is sorted by the following two fields:
  - `lastUpdated` based Git Commit **(Default)** - [Detail](https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated)
  - `date` field in FrontMatter **(Higher Priority)** - [Detail](https://vuepress.vuejs.org/guide/frontmatter.html)

## Installation

> Note: Work For VuePress 1.x

```shell
$ npm install vuepress-theme-simple --save-dev
# or
$ yarn add vuepress-theme-simple --dev
```

## Usage

Modify your `.vuepress/config.js` and provide the `theme` option.

```js
module.exports = {
  theme: 'simple',
}
```

And that's some additional configs: (Optional) 
```js
module.exports = {
  theme: 'simple',
  themeConfig: {
    author: 'YOUR NAME', // will display on the page footer
    navbar: { // will display below the title
      YOUR_SITE_NAME: 'YOUR_SITE_URL',
    }
  }
}
```

## Development

```sh
npm run dev
```

## License

[MIT License](https://opensource.org/licenses/MIT) © [viko16](https://github.com/viko16)
