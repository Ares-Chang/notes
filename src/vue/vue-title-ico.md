---
aside: false
---

# 配置 title 图标及文字

### 1. **把 logo.ico 放在项目根目录下**

:::warning 注意
注意这步，要放在根目录下，否则不会生效。
:::

### 2. 在 index.html 页面上配置图标及文字

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <link rel="ico" href="./logo.ico" type="image/x-icon" />
  <title>Ares Chang的小笔记</title>
</head>
```

### 3. 修改 build 文件夹下 webpack.prod.conf.js 和 webpack.dev.conf.js 文件

webpack.prod.conf.js 和 webpack.dev.conf.js 文件都要添加以下内容：

```js
var path = require('path') // 开头引入 path 模块
....
// HtmlWebpackPlugin 中添加 favicon
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'index.html',
  favicon: path.resolve('logo.ico'), // 引入图片地址
  inject: true
})
```

### 4. 重启项目

```shell
yarn dev
# npm run dev
```

[阅读原文](https://blog.csdn.net/weixin_41767649/article/details/79986756)
