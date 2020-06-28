(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{243:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("当使用 vim 时以普通用户身份打开一个只有 root 用户才能操作的文件时。编辑完成后但无法保存，很是苦恼。")]),t._v(" "),s("h2",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),s("ul",[s("li",[t._v("底行执行命令："),s("code",[t._v(":w !sudo tee %")])])]),t._v(" "),s("blockquote",[s("p",[t._v("w： 表示保存文件")]),t._v(" "),s("p",[t._v("！： 表示执行外部命令")]),t._v(" "),s("p",[t._v("tee： linux命令，这个有点复杂，可以查看linux命令帮助")]),t._v(" "),s("p",[t._v("%： 在执行外部命令时，%会扩展成当前文件名；这个%区别于替换时的%，替换时%的意义是代表整个文件，而不是文件名")])]),t._v(" "),s("h2",{attrs:{id:"优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),s("p",[t._v("上述命令虽然解决了我们保存只读文件的需求，但是命令繁琐不好记，所以我们可以自己配置一下它的使用方法。")]),t._v(" "),s("p",[t._v("更改 .vimrc 文件,为它添加一条映射命令")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v('" 强制保存只读文件\ncmap w'),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("sudo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null %\n")])])]),s("p",[t._v("这样，简单的运行:w!!即可。命令后半部分> /dev/null作用为显式的丢掉标准输出的内容。")])])}),[],!1,null,null,null);a.default=r.exports}}]);