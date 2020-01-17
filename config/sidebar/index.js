/**
 * 侧边栏目录配置
 */

const css = require('./css')
const javascript = require('./javascript')

module.exports = {
	'/css/': css,

	'/javascript/': javascript,

	// 关于我
	'/about/': [
		'',
		'test',
	]
}