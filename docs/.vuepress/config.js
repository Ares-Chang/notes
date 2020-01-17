/**
 * 网站整体部署
 */

const nav = require('../../config/nav')
const sidebar = require('../../config/sidebar')

module.exports = {
  title: 'Ares Chang',  // 网站名字
  description: 'Ares Chang', // SEO优化
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]  // 网站icon图标
  ],
  base: '/notes/', // 基础路径设置
  themeConfig: {
    repo: 'Ares-Chang/notes', // 添加一个GitH链接
    // 文档放置在master分支下，要编辑需要重新定向：
    editLinks: true,  // 启用左下角编辑文档标签
    editLinkText: '编辑文档!', // 页面左下角提示
    docsDir: 'docs', // 如文档不是放在仓库的根目录下需要设置 否则无法编辑
    lastUpdated: '上次更新',  // 更新时间
    // 导航栏配置
    nav,
    // 侧边栏配置
    sidebar,
    // 标题深度
    sidebarDepth: 2
  }
}