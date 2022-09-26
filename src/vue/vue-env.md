# Vue 配置多环境接口地址

## 问题

业务需求：通过命令可以打开不同环境的前端页面，可以访问生产环境和开发环境接口地址。

## 解决方法

::: danger 注意：

此方法不再推荐使用，可以[点击查看 Vue 中模式及环境变量配置](./vue-mode-and-env)一文。

文章中使用了脚手架提供的更为简单安全的方法，如果感兴趣可以点击查看。

:::

我们可以通过 vue cli 提供的 `process.env.NODE_ENV` 来匹配不同地址，来实现 BASEURL 的配置。

```js
// 根据不同环境来配置不同的 BASEURL
let BASEURL = ''

if (process.env.NODE_ENV == 'development') {
  BASEURL = '开发地址'
} else if (process.env.NODE_ENV == 'production') {
  BASEURL = '生产地址'
}

export { BASEURL }
```

我们平常开发所使用的 `yarn dev` 命令会匹配 `development`，`build` 打包后会自动替换为 `production` 来实现地址的自动更换
