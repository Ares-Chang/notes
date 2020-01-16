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
  base: '/blog/', // 基础路径设置
  themeConfig: {
    repo: 'Ares-Chang/blog', // 添加一个GitH链接
    // 文档放置在master分支下，要编辑需要重新定向：
    editLinks: true,  // 启用左下角编辑文档标签
    editLinkText: '编辑文档!', // 页面左下角提示
    docsDir: 'docs', // 如文档不是放在仓库的根目录下需要设置 否则无法编辑
    lastUpdated: '上次更新',  // 更新时间
    // 导航栏配置
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/html' },
          { text: 'CSS', link: '/css/' },
          { text: 'JavaScript', link: '/javascript/' },
        ]
      },
      { text: 'Node', link: '/node' },
      { text: 'Vue', link: '/vue' },
      { text: '算法', link: '/arithmetic' },
      {
        text: '其他',
        // ariaLabel: 'Language Menu',
        items: [
          { text: '书单', link: '/books' },
          { text: '鸡汤', link: '/chickenSoup' },
          { text: '面试题', link: '/interview' },
          { text: '关于我', link: '/about' },
          {
            text: '语言', items: [
              { text: '中文', link: '/language/chinese/' },
              { text: 'English', link: '/language/japanese/' }
            ]
          },
        ]
      },
    ],
    // 侧边栏配置
    sidebar: {
      '/css/': [
        '',     /* /foo/ */
        'css1',  /* /foo/one.html */
        'css2'   /* /foo/two.html */
      ],

      '/javascropt/': [
        '',      /* /bar/ */
        'javascropt1', /* /bar/three.html */
        'javascropt2'   /* /bar/four.html */
      ],

      // fallback
      '/about/': [
        '',        /* / */
        'test', /* /contact.html */
      ]
    },
    // 标题深度
    sidebarDepth: 2
  }
}