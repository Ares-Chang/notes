/**
 * 侧边栏目录配置
 */

const html = require('./html')
const css = require('./css')
const javascript = require('./javascript')
const about = require('./about')
const hodgepodge = require('./hodgepodge')

module.exports = {
	'/html/': html,
	'/css/': css,
	'/javascript/': javascript,
	'/hodgepodge/': hodgepodge,

	// 关于我
	'/about/': [
		'',
		'test',
		...about
	]
}