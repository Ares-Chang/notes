/**
 * 导航栏配置
 */

module.exports = [
	{
		text: '前端',
		items: [
			{ text: 'HTML', link: '/html/' },
			{ text: 'CSS', link: '/css/' },
			{ text: 'JavaScript', link: '/javascript/' },
			{ text: 'AJAX', link: '/ajax/' },
		]
	},
	// { text: 'Node', link: '/node/' },
	{ text: 'Vue', link: '/vue/' },
	{ text: 'Git', link: '/git/' },
	{ text: '算法', link: '/arithmetic/' },
	{
		text: '其他',
		// ariaLabel: 'Language Menu',
		items: [
			{ text: '书单', link: '/books/' },
			{ text: '鸡汤', link: '/chickenSoup/' },
			{ text: '工具', link: '/tools/' },
			{ text: '面试题', link: '/interview/' },
			{ text: '大杂绘', link: '/hodgepodge/' },
			{ text: '关于我', link: '/about/' },
		]
	},
]