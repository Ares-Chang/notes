(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{473:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("最近在写微信小程序时遇到一个需求：")]),t._v(" "),a("p",[t._v("后端返回一个 "),a("code",[t._v("base 64")]),t._v(" 图片，需要显示到首页上。")]),t._v(" "),a("p",[t._v("听起来很简单，只需要拿到后端返回的串，安装一个文件头就可以直接使用。")]),t._v(" "),a("p",[t._v("但是！！！命运多舛，怎么搞这个图片也显示不出来，更换文件头在浏览器里也无法打开。")]),t._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("p",[t._v("后来后端同学在本地运行了一下，确定图片是没问题的。")]),t._v(" "),a("p",[t._v("但是这段代码在我这边却死活运行不起来，后来一对比数据串根本不一样。")]),t._v(" "),a("p",[t._v("因为数据串太长，数据在传输过程中自动添加了 "),a("code",[t._v("\\n")]),t._v(" 字符，到了浏览器直接无法成功解析，就遇到了这个问题。")]),t._v(" "),a("p",[t._v("解决方法也很简单，只要在获取之后去除一下换行符就可以了。")]),t._v(" "),a("p",[t._v("代码块:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQRCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户二维码数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QRCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("data:image/png;base64,")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\r\\n]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加文件头并去除换行符")]),t._v("\n")])])]),a("p",[t._v("最后直接放在 "),a("code",[t._v("src")]),t._v(" 使用，完美解决。")])])}),[],!1,null,null,null);s.default=e.exports}}]);