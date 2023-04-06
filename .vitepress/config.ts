import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs/index'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Ares Chang',
  description: 'Ares Chang 的小笔记 - 前端个人开放文档',
  srcDir: 'src',
  outDir: './dist',
  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/logo.ico' }]],

  themeConfig: {
    nav,
    sidebar,

    outline: [2, 3],

    algolia: {
      appId: '1NORI5DM33',
      apiKey: 'fb3c8555f05beb4a981518857e30697c',
      indexName: 'areschang'
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1665308375862" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2715" data-darkreader-inline-fill="" width="128" height="128"><path d="M512 64C265 64 64 265 64 512s201 448 448 448 448-201 448-448S759 64 512 64z m185.8 612.9c-6.5 12-16.5 20.4-28.1 23.5-3.3 0.9-6.7 1.3-10.1 1.3-7.8 0-15.6-2.3-22.9-6.7l-149.4-96.1c-5.2-3.1-11.4-6.8-15.6-11.8-20.6-13-30.6-26.3-30.6-40.7V281.1c0-27.1 21-49.1 46.9-49.1 25.8 0 46.9 22 46.9 49.1v241.6l142.6 87.6c23.3 14.3 32.4 44.2 20.3 66.6z" p-id="2716"></path></svg>'
        },
        link: 'https://clock.areschang.top/time'
      },
      { icon: 'github', link: 'https://github.com/ares-chang/notes' }
    ],

    editLink: {
      pattern: 'https://github.com/ares-chang/notes/edit/master/src/:path',
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
