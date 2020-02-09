/**
 * 侧边栏目录配置
 */

const html = require('./html')
const css = require('./css')
const javascript = require('./javascript')
const about = require('./about')

module.exports = {
	'/html/': html,
	'/css/': css,
	'/javascript/': javascript,

	// 关于我
	'/about/': [
		'',
		'test',
		...about
	]
}