(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{369:function(t,s,a){"use strict";a.r(s);var e=a(26),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("GitHub Actions 由 GitHub 官方推出的工作流工具。典型的应用场景应该是 CI/CD，类似 Travis 的用法。")]),t._v(" "),a("p",[t._v("我的的项目，每次需要手动推送到 GitHub Pages 实在是太麻烦，我们使用 GitHub Actions 就可以自动起来了。")]),t._v(" "),a("h2",{attrs:{id:"一、配置域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、配置域名"}},[t._v("#")]),t._v(" 一、配置域名")]),t._v(" "),a("p",[t._v("如果推送自己的域名，按以下操作，如果没有域名，直接从二开始即可")]),t._v(" "),a("p",[t._v("域名解析记录中添加一个 CNAME 到 "),a("code",[t._v("<user>.github.io")]),t._v("。")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208222036924.png")}}),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208222202467.png")}}),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208222252745.png")}}),t._v(" "),a("blockquote",[a("p",[t._v("记录类型：CNAME")]),t._v(" "),a("p",[t._v("主机记录：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@")]),t._v(": 访问地址："),a("code",[t._v("areschang.top")])]),t._v(" "),a("li",[a("code",[t._v("www")]),t._v(" 访问地址："),a("code",[t._v("www.areschang.top")])]),t._v(" "),a("li",[a("code",[t._v("demo")]),t._v(" 访问地址： "),a("code",[t._v("demo.areschang.top")])])]),t._v(" "),a("p",[t._v("解析线路：默认")]),t._v(" "),a("p",[t._v("记录值："),a("code",[t._v("你的GitHub用户名.github.io")])]),t._v(" "),a("p",[t._v("TTL: 10分钟，默认的")])]),t._v(" "),a("p",[t._v("然后在项目的 "),a("code",[t._v("public")]),t._v(" 目录中添加一个文件 "),a("code",[t._v("CNAME")]),t._v(" 写入你的自定义域名")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("demo.areschang.top\n")])])]),a("h2",{attrs:{id:"二、生成-github-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、生成-github-token"}},[t._v("#")]),t._v(" 二、生成 GitHub Token")]),t._v(" "),a("p",[t._v("点击 Settings")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208223029848.png")}}),t._v(" "),a("p",[t._v("点击 Developer settings")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208223154720.png")}}),t._v(" "),a("p",[t._v("点击 Personal access tokens 生成个人令牌")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208223316794.png")}}),t._v(" "),a("p",[t._v("自己取个名字，给予访问权限")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208223358424.png")}}),t._v(" "),a("p",[t._v("点击确定生成个人令牌")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208223455169.png")}}),t._v(" "),a("blockquote",[a("p",[t._v("注意：这个令牌自己保存好，只会出现一次，如果忘记只能再次重新生成")])]),t._v(" "),a("h2",{attrs:{id:"三、将-token-配置到项目的-secrets-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、将-token-配置到项目的-secrets-中"}},[t._v("#")]),t._v(" 三、将 token 配置到项目的 secrets 中")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208224538226.png")}}),t._v(" "),a("blockquote",[a("p",[t._v("Name：最好和我的一致，如果你修改了则下面的脚本内容也要修改。")]),t._v(" "),a("p",[t._v("Value：填写上一步生成的那个 token。")])]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208224724799.png")}}),t._v(" "),a("p",[t._v("如图，添加成功了")]),t._v(" "),a("h2",{attrs:{id:"四、配置-github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、配置-github-actions"}},[t._v("#")]),t._v(" 四、配置 GitHub Actions")]),t._v(" "),a("p",[t._v("在项目中创建 "),a("code",[t._v(".github/workflows/main.yml")]),t._v(" 并写入下面的配置内容。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" build and deploy\n\n# 当 master 分支 push 代码的时候触发 workflow\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    runs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    # 下载仓库代码\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" uses"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("checkout@v2\n    \n    # 缓存依赖\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Cache dependencies\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cache@v1\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**/package-lock.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        restore"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n          $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n    \n    # 安装依赖\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" run"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" npm ci\n    \n    # 打包构建\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" run"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" npm run build\n    \n    # 发布到 GitHub Pages\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Deploy\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" peaceiris"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pages@v2\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果刚刚 name 修改了，这里也要修改为你自己设定的 name")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PERSONAL_TOKEN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACCESS_TOKEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PUBLISH_BRANCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pages\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PUBLISH_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n\n")])])]),a("p",[t._v("部署需要使用到 npm 安装依赖产生的 package-lock.json 文件，所以需要使用 npm 来安装依赖")]),t._v(" "),a("h2",{attrs:{id:"五、推送源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、推送源代码"}},[t._v("#")]),t._v(" 五、推送源代码")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test: GtiHub Pages 自动部署测试'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("h2",{attrs:{id:"六、查看部署状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、查看部署状态"}},[t._v("#")]),t._v(" 六、查看部署状态")]),t._v(" "),a("br"),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208232052118.png")}}),t._v(" "),a("blockquote",[a("p",[t._v("当所有的任务都完成变为绿色的对勾之后，就表示本次自动部署成功了。")]),t._v(" "),a("p",[t._v("当有新的源码 push 推送过来，会再次触发自动部署。")]),t._v(" "),a("p",[t._v("如果自动部署失败，会有红色的 ×，它还会给你发一封邮件告诉你部署失败了。")])]),t._v(" "),a("h2",{attrs:{id:"七、访问网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、访问网站"}},[t._v("#")]),t._v(" 七、访问网站")]),t._v(" "),a("p",[t._v("部署成功以后，进入 settings 中查看 GitHub Pages 服务是否正常。")]),t._v(" "),a("img",{staticClass:"zoom",attrs:{src:t.$withBase("/else/about/GitHub-Actions/image-20200208232225817.png")}}),t._v(" "),a("p",[t._v("服务正常即可在浏览器中访问你的网站。")])])}),[],!1,null,null,null);s.default=r.exports}}]);