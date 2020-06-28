module.exports = {
	// 回到顶部插件
	'@vuepress/back-to-top': true,
	// 图片缩放插件
	'@vuepress/medium-zoom': {
		selector: 'img.zoom',
		options: {
			margin: 16
		}
	},
	// 页面滚动自动对应左侧标题
	'@vuepress/active-header-links': true,
	'@vuepress/google-analytics': {
		'ga': 'UA-167481421-1'
	},
	'vuepress-plugin-auto-sidebar': {
		titleMode: "uppercase",	// 标题模式
		titleMap: {
			// "hodgepodge": "大杂绘",  // 标题名称自定义映射
		},
		collapseList: [	// 折叠的路由列表
			"/linux/ubuntu/"
		]
	}
}