---
title: vue-cli 2.X 如何开启局域网访问
---

## 需求

平常我们使用 vue 写移动端项目时，总是想在手机上试试效果。我们使用 vue-cli 3.X 可以轻松实现局域网访问，因为项目内自带了处理方法，但是我们如果使用的 vue-cli 2.X 我们就需要自己配置一下来完成这个功能。

## 解决方法

我们可以配置一下自己的 `package.json` 文件，在 `dev` 命令结尾增加一个参数 `--host 192.168.1.150`

```json
"scripts": {
	"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 192.168.1.150",
	"start": "npm run dev",
	"build": "node build/build.js"
},
```

然后手机和电脑处于一个局域网下，连接一个 ip 项目访问就可以了。