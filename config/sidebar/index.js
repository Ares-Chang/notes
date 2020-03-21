/**
 * 侧边栏目录配置
 */

const html = require('./html')
const css = require('./css')
const javascript = require('./javascript')
const git = require('./git')
const AJAX = require('./AJAX')
const about = require('./about')
const hodgepodge = require('./hodgepodge')
const tools = require('./tools')

module.exports = {
	'/html/': html,
	'/css/': css,
	'/javascript/': javascript,
	'/AJAX/': AJAX,
	'/git/': git,
	'/hodgepodge/': hodgepodge,
	'/tools/': tools,
	// 关于我
	'/about/': [
		'',
		'test',
		...about
	]
}