/**
 * 侧边栏目录配置
 */

module.exports = {
	'/web/html/': require('./web/html'),
	'/web/css/': require('./web/css'),
	'/web/javascript/': require('./web/javascript'),
	'/web/ajax/': require('./web/ajax'),
	'/vue/': require('./vue'),
	'/git/': require('./git'),
	'/linux/': require('./linux'),
	'/else/hodgepodge/': require('./else/hodgepodge'),
	'/else/tools/': require('./else/tools'),
	'/else/interview/': require('./else/interview'),
	// 关于我
	'/else/about/': [
		'',
		'test',
		...require('./else/about')
	]
}