import { defineConfig } from 'vitepress'
import { nav, sidebar } from './config/index'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Ares Chang',
  description: 'Ares Chang 的小笔记 - 前端个人开放文档',
  lastUpdated: true,
  cleanUrls: 'with-subfolders',

  head: [['link', { rel: 'icon', href: '/logo.ico' }]],

  themeConfig: {
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ares-chang/notes' }
    ],

    editLink: {
      pattern: 'https://github.com/ares-chang/notes/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Ares Chang'
    }
  },

  vue: {
    reactivityTransform: true
  }
})
