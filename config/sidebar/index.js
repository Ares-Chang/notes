/**
 * 侧边栏目录配置
 */

const html = require('./html')
const css = require('./css')
const javascript = require('./javascript')

module.exports = {
	'/html/': html,
	'/css/': css,
	'/javascript/': javascript,

	// 关于我
	'/about/': [
		'',
		'test',
	]
}