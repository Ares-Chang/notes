(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{389:function(t,r,e){"use strict";e.r(r);var a=e(26),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("p",[t._v("今天打开 VSCode 调试 Flutter 项目，发现程序激活了 emulator 但是无法打开项目。")]),t._v(" "),e("p",[t._v("尝试关闭，重启多次未果，发现 Dart 插件报错：")]),t._v(" "),e("div",{staticClass:"language-err extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Error: Emulator didn't connect within 60 seconds\t// 错误:模拟器没有在60秒内连接\n")])])]),e("h2",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),e("p",[t._v("多种方法尝试无果，想到是否需要重新创建模拟器尝试。")]),t._v(" "),e("p",[t._v("幸亏查询到一个朋友遇到了和我一样的问题，帖子回复内容给了我一部分启发但未完全解决。")]),t._v(" "),e("p",[t._v("附赠"),e("a",{attrs:{href:"https://stackoverflow.com/questions/55677874/failed-to-launch-emulator-error-emulator-didnt-connect-within-60-seconds",target:"_blank",rel:"noopener noreferrer"}},[t._v("问题原贴"),e("OutboundLink")],1),t._v("，如果需要请点击查看。")]),t._v(" "),e("h3",{attrs:{id:"解决思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路：")]),t._v(" "),e("p",[e("strong",[t._v("下文为我的问题的具体解决思路，如果遇到相同问题可以参考，但不确保全部管用：")])]),t._v(" "),e("p",[t._v("因为我的模拟器是通过 Android Studio 安装的，同时参考了"),e("a",{attrs:{href:"https://stackoverflow.com/questions/55677874/failed-to-launch-emulator-error-emulator-didnt-connect-within-60-seconds",target:"_blank",rel:"noopener noreferrer"}},[t._v("上方朋友的回复"),e("OutboundLink")],1),t._v(",")]),t._v(" "),e("p",[t._v("所以我尝试在 Android Studio 中停止了该模拟器，")]),t._v(" "),e("p",[t._v("同时抹除了模拟器的数据，并于 VSCode 中启动调试，重新安装该程序。")]),t._v(" "),e("p",[t._v("这次重启正常打开 APP 程序，完美解决问题。")]),t._v(" "),e("h3",{attrs:{id:"具体操作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体操作流程"}},[t._v("#")]),t._v(" 具体操作流程：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("打开 Android Studio 点击 Tools -> AVD Manager。")])]),t._v(" "),e("li",[e("p",[t._v("选择无法正常使用的模拟器，点击 Actions 中向下的三角。")])]),t._v(" "),e("li",[e("p",[t._v("如模拟器未关闭，选择 Stop，先关闭 emulator。")])]),t._v(" "),e("li",[e("p",[t._v("关闭之后可以选择 Wipe Data 抹除用户数据信息。")])])]),t._v(" "),e("p",[t._v("完成以上操作，在 VSCode 中重新启动调试，应该就可以解决问题。")])])}),[],!1,null,null,null);r.default=o.exports}}]);