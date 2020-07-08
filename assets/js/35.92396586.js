(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{385:function(t,s,e){"use strict";e.r(s);var a=e(25),l=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("Chrome 不是开放源代码浏览器，它也不包含在标准 Ubuntu 存储库中。在 Ubuntu 上安装 Chrome 浏览器是一个非常简单的过程。我们将从官方网站下载安装文件，然后从命令行进行安装。")]),t._v(" "),e("ol",[e("li",[t._v("下载谷歌浏览器")])]),t._v(" "),e("p",[t._v("打开终端，使用 wget 下载最新的 Google Chrome .deb 软件包：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("安装Google Chrome")])]),t._v(" "),e("p",[t._v("在 Ubuntu 上安装软件包需要管理权限。以具有 sudo 特权的用户身份运行以下命令，以.deb在系统上安装Chrome 软件包：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ./google-chrome-stable_current_amd64.deb\n")])])]),e("p",[t._v("出现提示时，输入您的用户密码，安装将开始。")]),t._v(" "),e("p",[t._v("至此 Chrome 已经安装完成，打开使用即可。")]),t._v(" "),e("h2",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("p",[t._v("在安装过程中，正式的Google存储库将添加到您的系统中。您可以使用以下cat命令来验证文件内容：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/apt/sources.list.d/google-chrome.list\n")])])]),e("p",[t._v("输出将如下所示：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### THIS FILE IS AUTOMATICALLY CONFIGURED ###")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You may comment out this entry, but any other modifications may be lost.")]),t._v("\ndeb "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" http://dl.google.com/linux/chrome/deb/ stable main\n")])])]),e("p",[t._v("这样可以确保在通过桌面标准软件更新工具发布新版本时，您的 Google Chrome 安装会自动更新。")])])}),[],!1,null,null,null);s.default=l.exports}}]);