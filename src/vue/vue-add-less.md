---
aside: false
---

# 安装 less

vue cli 在配置时可以选配是否添加 less 等预处理器。

如果后期想要安装也可以使用包管理器来自己进行安装。

> less 无法单独运行，需要搭配 less-loader 来进行编译过可以。

安装步骤：

1. 安装 less 和 less-loader

```bash
yarn add less less-loader --save-dev

# npm install less less-loader --save-dev
```

2. 配置 less

打开 `build/webpack.base.conf.js` 文件，在 module.rules 后面添加以下代码：

```js
{
  test: /\.less$/,
  loader: 'style-loader!css-loader!less-loader'
}
```

3. 最后在 style 标签中添加 lang="less" 应用即可

<br />

如果报错请参考 [安装 less 的错误处理](./vue-less-error.md)
