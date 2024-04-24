# vue-cli 2.X 如何开启局域网访问

## 需求

平常我们使用 vue 写移动端项目时，总是想在手机上试试效果。我们使用 vue-cli 3.X 可以轻松实现局域网访问，因为项目内自带了处理方法，但是我们如果使用的 vue-cli 2.X 我们就需要自己配置一下来完成这个功能。

## 解决方法

- 方法一：

找到 config 文件夹下的 `index.js` 文件,修改 `host:"localhost"` 为 `host:"0.0.0.0"` 或 `host: [本机IP]`

- 方法二：

我们可以配置一下自己的 `package.json` 文件，在 `dev` 命令结尾增加一个参数 `--host 本机IP`

```json
"scripts": {
	"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host [本机IP]",
	"start": "npm run dev",
	"build": "node build/build.js"
},
```

然后手机和电脑处于一个局域网下，连接一个 ip 项目访问就可以了。

::: danger 警告
如果配置好后还是没有效果，请检查计算机防火墙是否关闭。

防火墙阻止局域网互相访问！
:::
