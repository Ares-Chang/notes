/**
 * 侧边栏目录配置
 */

const html = require('./html')
const css = require('./css')
const javascript = require('./javascript')
const git = require('./git')
const AJAX = require('./AJAX')
const vue = require('./vue')
const about = require('./about')
const hodgepodge = require('./hodgepodge')
const tools = require('./tools')
const interview = require('./interview')

module.exports = {
	'/html/': html,
	'/css/': css,
	'/javascript/': javascript,
	'/AJAX/': AJAX,
	'/vue/': vue,
	'/git/': git,
	'/hodgepodge/': hodgepodge,
	'/tools/': tools,
	'/interview/': interview,
	// 关于我
	'/about/': [
		'',
		'test',
		...about
	]
}