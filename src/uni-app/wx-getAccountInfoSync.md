# 微信小程序中区分运行环境及请求域名

## 关于

因为微信小程序中是没有 `env` 配置文件的，所以无法直接来区分当前运行环境，无法自动配置当前请求域名。

这样只能自己手动更改 `BASEURL`，一个疏忽可能酿成大错。

## 解决方法

微信小程序官方在一片呼声中，上线了版本查询功能。

可以通过 `wx.getAccountInfoSync()` 来调取小程序帐号信息，

但是查询 `env` 环境的接口最低版本限制在 `2.10.0` 如果再向下就需要做兼容处理。

[官方文档，点击查看。](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html)

通过调用该接口，可以获取 `miniProgram` 小程序帐号信息，帐号信息包含 `envVersion` 环境版本信息。

`miniProgram.envVersion` 的合法值:

| 值      | 说明   |
| ------- | ------ |
| develop | 开发版 |
| trial   | 体验版 |
| release | 正式版 |

## 代码块

在路由拦截器中执行以下方法

```js
// 获取小程序帐号及版本信息
const accountInfo = wx.getAccountInfoSync()
const {
  envVersion = 'release' // 版本不兼容设置默认值
} = accountInfo.miniProgram

// 基础请求路径
const BASEURL = {
  develop: 'xxx', // 开发版
  trial: 'xxx', // 体验版
  release: 'xxx' // 正式版
}

console.log(BASEURL[envVersion]) // 查看对应版本请求路径
```
