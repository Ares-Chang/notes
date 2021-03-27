/**
 * 导航栏配置
 */

module.exports = [
	{
		text: '前端',
		items: [
			{ text: 'HTML', link: '/web/html/' },
			{ text: 'CSS', link: '/web/css/' },
			{ text: 'JavaScript', link: '/web/javascript/' },
			{ text: 'AJAX', link: '/web/ajax/' },
			{
				text: '工具',
				items: [
					{ text: 'iView', link: '/web/iview/' },
					{ text: 'uni-app', link: '/web/uni-app/' },
					{ text: 'webpack', link: '/web/webpack/' },
				]
			}
		]
	},
	// { text: 'Node', link: '/node/' },
	{ text: 'Vue', link: '/vue/' },
	{ text: 'Git', link: '/git/' },
	{
		text: 'Flutter',
		items: [
			{ text: 'Dart 基础', link: '/flutter/dart/' },
		]
	},
	{
		text: 'Linux',
		items: [
			{ text: 'Linux 基础', link: '/linux/linux/' },
			{ text: 'Vim', link: '/linux/vim/' },
			{ text: 'Ubuntu', link: '/linux/ubuntu/' },
		]
	},
	{
		text: '其他',
		// ariaLabel: 'Language Menu',
		items: [
			// { text: '书单', link: '/else/books/' },
			// { text: '鸡汤', link: '/else/chickenSoup/' },
			{ text: '工具', link: '/else/tools/' },
			// { text: '算法', link: '/else/arithmetic/' },
			{ text: '面试题', link: '/else/interview/' },
			{ text: '大杂绘', link: '/else/hodgepodge/' },
			{ text: '关于我', link: '/else/about/' },
		]
	},
]