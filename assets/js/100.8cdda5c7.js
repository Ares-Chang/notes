(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{460:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"关于"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),a("p",[t._v("最近业务需要使用的 ECharts 图表做展示，但是引入后发现图表中出现了鼠标经过选中错位的情况。")]),t._v(" "),a("p",[t._v("如下所示：")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/web/echarts/echarts-malposition/GIF 2021-9-26 18-32-51.gif")}}),t._v(" "),a("p",[t._v("这可是个大问题？？？也不能这么交工啊，怎么解决？")]),t._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("p",[t._v("排查半天也没找到问题所在，但是功能移动到别的项目又是完好的。")]),t._v(" "),a("p",[t._v("没办法只能再一点一点的找，最后找到问题出现在了 "),a("code",[t._v("body")]),t._v(" 的一层全局 "),a("code",[t._v("zoom")]),t._v(" 样式上。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 90%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("zoom")]),t._v(" 取消，功能修复。")]),t._v(" "),a("p",[t._v("但是也不能取消 "),a("code",[t._v("zoom")]),t._v(" 样式，别处还是需要使用这个功能的。")]),t._v(" "),a("p",[t._v("只能在 ECharts 的父标签上放大同样的 "),a("code",[t._v("zoom")]),t._v(" 以解决这个问题。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ECharts 父级 */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 110%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);