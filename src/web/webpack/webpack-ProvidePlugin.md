# webpack 配置全局引入 npm 包

## 关于

由于项目中每个模块都需要用到同一个 `npm` 包，这里引入一下，那里引入一下，代码杂乱无章。但是又不想挂载到全局 `this` 上，用起来非常麻烦。

通过查询 `webpack` 文档，发现了一个 [`api`](https://www.webpackjs.com/plugins/provide-plugin/) 可以实现我的需求，所以记录一下。

## 实现方法

`webpack` 有一个开放 `api`，`ProvidePlugin` ，它可以自动引入并加载模块。

> 自动加载模块，而不必到处 import 或 require 。 —— 引自 webpack 文档

### 使用方法

1. 打开 `build` 文件夹下的 `webpack.base.conf.js` 文件。

2. 在文件开始引入 `webpack`，后面我们需要用。

```js
const webpack = require('webpack')
```

3. 在 `module.exports` 中写入以下代码，把插件暴露到全局。

```js
module.exports = {
  ...
  // 注册公共插件
  plugins: [
    new webpack.ProvidePlugin({
      qs: 'qs',
      qss: ['qs','stringify']
    })
  ]
  ... // 业务代码
}
```

4. 插件全局暴露已经完成，后面直接在项目中使用就可以了，无需再次 `import` 引入了

```js
console.log(qs.stringify([1, 2, 3]))
console.log(qss([1, 2, 3]))
```

### 参数详解

根据[官方文档](https://www.webpackjs.com/plugins/provide-plugin/)介绍

```js
new webpack.ProvidePlugin({
  identifier: 'module1'
  // ...
})
```

`identifier` 可以理解为自定义插件名称，`module1` 是需要引入的插件。

还可以解析插件中的某个属性方法：

```js
new webpack.ProvidePlugin({
  identifier: ['module1', 'property1']
  // ...
})
```

`property1` 还可以写为某个属性方法。

[官方文档](https://www.webpackjs.com/plugins/provide-plugin/) 还提供了 `JQuery`、`Angular`、`Lodash Map`、`Vue` 等方法和属性的引用，如果需要请自行查阅。
