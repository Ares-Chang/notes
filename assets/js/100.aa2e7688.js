(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{460:function(_,t,v){"use strict";v.r(t);var e=v(26),i=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"业务需求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#业务需求"}},[_._v("#")]),_._v(" 业务需求")]),_._v(" "),v("p",[_._v("业务需求：自定义密码输入展示弹窗")]),_._v(" "),v("img",{staticClass:"zoom",staticStyle:{width:"200px"},attrs:{src:_.$withBase("/web/uni-app/uni-pop_up/Snipaste_2020-10-30_17-33-43.png")}}),_._v(" "),v("h2",{attrs:{id:"实现思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[_._v("#")]),_._v(" 实现思路")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("使用 "),v("code",[_._v("li")]),_._v(" 标签更改 "),v("code",[_._v("css")]),_._v(" 模拟实现 "),v("code",[_._v("_")]),_._v(" 效果。")])]),_._v(" "),v("li",[v("p",[_._v("把 "),v("code",[_._v("input")]),_._v(" 标签定位到 "),v("code",[_._v("li")]),_._v(" 标签之上，保证用户可以点击触发数字键盘")])]),_._v(" "),v("li",[v("p",[_._v("把 "),v("code",[_._v("input")]),_._v(" 标签及其内容隐藏")])])]),_._v(" "),v("h2",{attrs:{id:"解决流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决流程"}},[_._v("#")]),_._v(" 解决流程")]),_._v(" "),v("p",[_._v("本项目使用 "),v("code",[_._v("uni-app")]),_._v(" 框架搭建的小程序项目，实现过程执行到第 3 步无法把 "),v("code",[_._v("input")]),_._v(" 内容彻底隐藏，现已解决，记录一下，防止下次踩坑。")]),_._v(" "),v("p",[_._v("实现过程：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("第一次实现把 "),v("code",[_._v("input")]),_._v(" 的 "),v("code",[_._v("opacity")]),_._v(" 属性调为 0 设置透明，但是光标和文字并没有如愿隐藏。失败!")])]),_._v(" "),v("li",[v("p",[_._v("第二次实现把 "),v("code",[_._v("input")]),_._v(" 的 "),v("code",[_._v("font-size")]),_._v(" 属性调为 "),v("code",[_._v("0.1rpx")]),_._v(" 并把 "),v("code",[_._v("color")]),_._v(" 设置为 白色, 但是手机上显示会存在一个微小光标跟随移动。失败!")])])]),_._v(" "),v("img",{staticClass:"zoom",staticStyle:{width:"200px"},attrs:{src:_.$withBase("/web/uni-app/uni-pop_up/Snipaste_2020-10-30_18-44-46.png")}}),_._v(" "),v("ul",[v("li",[_._v("第三次实现动态设置 "),v("code",[_._v("input")]),_._v(" 具体顶部距离，设置 "),v("code",[_._v("input")]),_._v(" 聚焦状态 "),v("code",[_._v("top: -1000px;")]),_._v(" 失去焦点 "),v("code",[_._v("top")]),_._v(" 回归，运行在安卓设备完美实现(得意洋洋.jpg), 但是运行到 "),v("code",[_._v("ios")]),_._v(" 设备却无法找到 "),v("code",[_._v("input")]),_._v(" 无法进入键盘。失败!")])]),_._v(" "),v("img",{staticClass:"zoom",staticStyle:{width:"200px"},attrs:{src:_.$withBase("/web/uni-app/uni-pop_up/Snipaste_2020-10-30_18-57-54.png")}}),_._v(" "),v("ul",[v("li",[_._v("第四次实现通过谷歌查询，可以使用 "),v("code",[_._v("text-indent: -999rpx;")]),_._v(" 来隐藏文字显示，通过 "),v("code",[_._v("margin-left: -100%;")]),_._v(" 来隐藏 "),v("code",[_._v("input")]),_._v(" 光标，完美实现需求 成功 Nice~")])])])}),[],!1,null,null,null);t.default=i.exports}}]);