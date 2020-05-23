const utils = {
	// 侧边栏分组
	gneSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 1) {
		return {
			title,  					  // 必要的
			collapsable, 				// 可选的, 默认值是 true,
			sidebarDepth,    		// 可选的, 默认值是 1
			children
		}
	}
}

module.exports = utils