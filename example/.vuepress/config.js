const path = require('path')

module.exports = {
  title: 'Example Site',
  lang: 'zh-CN',
  description: 'Example for vuepress-theme-simple',
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    author: 'viko16',
    pageSize: 5,
  },
}
