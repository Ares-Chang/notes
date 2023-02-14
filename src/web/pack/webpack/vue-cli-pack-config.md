# Vue Cli 多环境打包命令配置

## 需求

我们用 vue-cli 生成项目后，vue 仅提供给我们一个启动命令和一个打包命令。这个启动命令是开发环境的，打包是生产环境的。

但是我们如果需要用到别的环境怎么处理？还测试环境和预发布环境呢？这时候两个命令就显得不那么够用了。当然你也可以每次使用前都更改一下接口基地址，但是这样的操作就很繁琐了，时间长了自然就没有耐心了。

我们的目标是给不同的环境配置不同的打包命令，执行不同的操作。

## 实现

### vue-cli 2.X

1. 项目安装 `cross-env` , `cross-env` 是 `node` 的一个设置和使用环境变量的脚本；

```shell
yarn add cross-env -D
# npm install cross-env -D
```

2. 在项目的 `package.json` 文件中，把 `scripts` 对象的 `build` 字段的值改为以下代码，实际就是修改 `npm run build` 命令。同时再添加 `npm run build:test` 命令和 `npm run build:pre` 命令。

```js
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "build": "cross-env env_config=prod node build/build.js",
  "build:test": "cross-env env_config=test node build/build.js",
  "build:pre": "cross-env env_config=pre node build/build.js"
},
```

与原文件相比，我们改了 `build` 字段的值，同时添加了 `build:test` 和 `build:pre` 属性，这样做之后相当于我们加了 `npm run build:test` 和 `npm run build:pre` 命令，我准备当运行 `npm run build` 时打生产环境包，运行 `npm run build:test` 时打测试环境包, `npm run build:pre` 打预发布环境包。

与原命令相比，在 `node build/build.js` 前加了 `cross-env env_config=prod` 这点内容，这段东西主要在设置环境变量，可以在 `/build/build.js` 文件内 `console.log('查看环境变量-------->', process.env.env_config)`,然后运行打包命令时会在控制台打印出来。

3. 在项目的 `/build/build.js` 文件内找到 `const spinner = ora('building for production...')` 这行代码，将其改为 const spinner = ora(`正在打${process.env.env_config}环境包...`)，改这个主要是为了打包的时候方便知道正在打那个环境的。

4. 在项目的 `/config/prod.env.js` 文件内，将其内容修改。

```js
'use strict'
module.exports = {
  prod: { NODE_ENV: '"production"' },
  test: { NODE_ENV: '"testing"' },
  pre: { NODE_ENV: '"pre-release"' }
}
```

5. 在项目的 `/build/webpack.prod.conf.js` 文件内找到

```js
new webpack.DefinePlugin({
  'process.env': env
})
```

这段代码改为

```js
new webpack.DefinePlugin({
  'process.env': env[process.env.env_config]
})
```

6. 2.x 修改完成，然后测试一波，在 `main.js` 中写个判断打印出来看一波

```js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  console.log('生产环境')
} else if (process.env.NODE_ENV === 'testing') {
  console.log('测试环境')
} else if (process.env.NODE_ENV === 'pre-release') {
  console.log('预发布环境')
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

以上判断代码仅为测试效果，实际开发过程中，应该对请求进行单独封装，对请求域名设为变量，根据环境不同给变量设置不同的值。

### vue-cli 3.X

1. 在项目根目录下新建 3 个文件，`.env.test`、`.env.prod`、`.env.pre`，在文件内分别写入 `NODE_ENV = testing`、`NODE_ENV = production`、`NODE_ENV = pre-release`。

2. 在项目的 `package.json` 文件中，把 `scripts` 对象的 `build` 字段的值改为以下代码，实际就是修改 `npm run build` 命令。同时再添加 `npm run build:test` 命令和 `npm run build:pre` 命令。

3. 完成 2.X 的第 6 步

4. 3.x 的实现比 2.x 简化了很多，官方文档说的很详细[【传送门】](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)。

> ps: 文章摘录自 [胖大人本胖](https://juejin.im/post/5d40440351882507d52b187f) ，文章只作收录，感谢提供方案解决我所遇到的问题。
