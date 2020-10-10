(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{435:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("微信小程序上线成功后发现，无法分享小程序。分享按钮呈灰色，点击无反应。")]),t._v(" "),s("p",[t._v("经查询：微信小程序分享功能需要手动开启。可自定义分享标题、图片等，可分享群聊获取回调。")]),t._v(" "),s("h2",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),s("p",[t._v("用户点击右上角转发分享按钮会触发 wx 小程序的 "),s("code",[t._v("onShareAppMessage")]),t._v(" 函数（和 "),s("code",[t._v("onLoad")]),t._v(" 等生命周期函数同级）,此事件需要 "),s("code",[t._v("return")]),t._v(" 一个 "),s("code",[t._v("Object")]),t._v("，用于自定义分享内容。")]),t._v(" "),s("p",[t._v("微信小程序平台的分享管理比较严格，具体请参考 "),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序分享指引"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("使用方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShareAppMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 来自页面内分享按钮")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'自定义分享标题'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/test/test?id=123'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意：微信、头条平台：只有定义了此事件处理函数，小程序右上角菜单才会显示“转发”按钮")])]),t._v(" "),s("p",[t._v("详细参数请参考"),s("a",{attrs:{href:"https://uniapp.dcloud.io/api/plugins/share?id=onshareappmessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"如页面中根本没有分享按钮，请查看分享按钮是否被隐藏。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如页面中根本没有分享按钮，请查看分享按钮是否被隐藏。"}},[t._v("#")]),t._v(" 如页面中根本没有分享按钮，请查看分享按钮是否被隐藏。")]),t._v(" "),s("p",[t._v("检查代码中是否存在 "),s("a",{attrs:{href:"https://uniapp.dcloud.io/api/plugins/share?id=hidesharemenu",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("uni.hideShareMenu")]),s("OutboundLink")],1),t._v(" 方法，该方法可以隐藏原生菜单中的分享按钮。")]),t._v(" "),s("h4",{attrs:{id:"如果需要分享群聊获取回调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果需要分享群聊获取回调"}},[t._v("#")]),t._v(" 如果需要分享群聊获取回调")]),t._v(" "),s("p",[t._v("可以使用 "),s("a",{attrs:{href:"https://uniapp.dcloud.io/api/plugins/share?id=showsharemenu",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("uni.showShareMenu")]),s("OutboundLink")],1),t._v(" 来完成分享，该方法分享到群聊中，用户点击会携带特定参数进入，可以做判别操作。")])])}),[],!1,null,null,null);a.default=n.exports}}]);