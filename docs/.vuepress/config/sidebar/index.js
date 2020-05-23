/**
 * 侧边栏目录配置
 */

const html = require('./html')
const css = require('./css')
const javascript = require('./javascript')
const git = require('./git')
const ajax = require('./ajax')
const vue = require('./vue')
const about = require('./about')
const hodgepodge = require('./hodgepodge')
const tools = require('./tools')
const interview = require('./interview')
const linux = require('./linux')

module.exports = {
	'/html/': html,
	'/css/': css,
	'/javascript/': javascript,
	'/ajax/': ajax,
	'/vue/': vue,
	'/git/': git,
	'/hodgepodge/': hodgepodge,
	'/tools/': tools,
	'/interview/': interview,
	'/linux/': linux,
	// 关于我
	'/about/': [
		'',
		'test',
		...about
	]
}