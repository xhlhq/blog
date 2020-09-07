const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: 'XHLHQ的个人笔记博客',
  description: 'XHLHQ的个人笔记博客，作为学习记录',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'xhlhq/blog',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf,
    algolia: {
      appId: 'M698VCXCJN',
      apiKey: '8b552055fb68ffc808bfbd3f98a1dbe2',
      indexName: 'shanyuhai_documents',
      algoliaOptions: {
        hitsPerPage: 10,
        facetFilters: ""
      }
    }
  },
}