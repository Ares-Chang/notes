/**
 * 侧边栏目录配置
 */

const html = require('./html')
const css = require('./css')
const javascript = require('./javascript')
const about = require('./about')
const bigPicture = require('./big-picture')

module.exports = {
	'/html/': html,
	'/css/': css,
	'/javascript/': javascript,
	'/big-picture/': bigPicture,

	// 关于我
	'/about/': [
		'',
		'test',
		...about
	]
}