(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{448:function(t,a,_){"use strict";_.r(a);var s=_(25),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"关于"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),_("p",[t._v("业务需求：为了更好的推广自家产品，需求兼容扫描普通二维码打开小程序的能力。")]),t._v(" "),_("p",[t._v('需注意：该功能只支持微信"扫一扫"和微信内长按识别二维码')]),t._v(" "),_("p",[t._v("以下为踩坑体验，具体配置可查看"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/introduction/qrcode.html#%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"实现步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),_("ol",[_("li",[t._v("wx 后台打开开发模块 -> 开发设置 -> 启用")])]),t._v(" "),_("img",{staticClass:"zoom",attrs:{src:t.$withBase("/web/uni-app/wx-link_open_applet/Snipaste_2020-09-27_13-07-18.png")}}),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("点击添加，设置截取链接规则")])]),t._v(" "),_("img",{staticClass:"zoom",attrs:{src:t.$withBase("/web/uni-app/wx-link_open_applet/Snipaste_2020-09-27_13-10-04.png")}}),t._v(" "),_("p",[t._v("规则介绍：")]),t._v(" "),_("p",[t._v("微信扫描二维码后会在配置中查找，如符合配置则可以打开小程序，如不符合，照常访问 H5 页面")]),t._v(" "),_("p",[t._v("如现在设置的 "),_("code",[t._v("https://www.abc.com/a")]),t._v(" 如果访问 "),_("code",[t._v("https://www.abc.com/abc")]),t._v(" 是访问不通的，但是访问 "),_("code",[t._v("https://www.abc.com/a?123")]),t._v(" 是可以打开小程序的。")]),t._v(" "),_("p",[t._v("微信的访问规则是匹配前面的访问路径，如果路径正确，可以访问，如果路径不正确是访问不通的。")]),t._v(" "),_("blockquote",[_("p",[t._v("自 2017 年 5 月开始，微信客户端支持二维码规则根据“子路径匹配”。如原有二维码链接为 "),_("code",[t._v("http://www.qq.com/a/123456")]),t._v(" ，其中12345为业务参数，则可配置规则 "),_("code",[t._v("http://www.qq.com/a/")]),t._v(" 实现扫码打开小程序。")])]),t._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("br"),t._v(" "),_("img",{staticClass:"zoom",attrs:{src:t.$withBase("/web/uni-app/wx-link_open_applet/Snipaste_2020-09-27_13-28-46.png")}}),t._v(" "),_("p",[t._v("这个地方只限于测试，不会影响到线上，不是只能设置 100(20*5) 个码！！！(我恨自己没有多长几双眼睛去看清 wx 的文档，语文阅读理解没有得满分。就不能换个显眼的字体颜色吗？开个黑背景什么也看不清😡)")])]),t._v(" "),_("p",[t._v("如服务器未放置校验文件无法创建成功哦~")]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("添加成功之后还需要手动发布一下")])]),t._v(" "),_("img",{staticClass:"zoom",attrs:{src:t.$withBase("/web/uni-app/wx-link_open_applet/Snipaste_2020-09-27_13-40-47.png")}}),t._v(" "),_("p",[t._v("配置发布成功之后会在5分钟之内生效，请不要马上扫描测试，会失败！血泪史！！!😭")]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("成功进入小程序之后，页面所携带的参数可以在 onLoad() 事件中提取 q 参数自行 "),_("code",[t._v("decodeURIComponent")]),t._v(" 一次，获取原二维码完整内容。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);