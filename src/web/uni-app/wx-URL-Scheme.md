# 在 H5 中打开小程序

## 关于

近期产品新提需求：能否在 H5 推广页中打开小程序转换用户流量。

刚好这两天翻看微信小程序后台，发现工具栏中多了个生成 `URL Scheme` 的工具。

点开简介说明：

> 小程序 URL Scheme 可以从微信外部打开小程序。

## 解决方法

### 生成

`URL Scheme` 可以通过 [服务端接口](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html) 或在 [小程序管理后台](https://mp.weixin.qq.com/)「工具」-「生成 URL Scheme」获取打开小程序任意页面的 URL Scheme。

通过 URL Scheme 打开小程序的场景值为 1065。

生成的 URL Scheme 如下所示：

```
weixin://dl/business/?t= *TICKET*
```

### 使用

仔细看一下 `URL Scheme` 的 [文档说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html) 发现。

因为系统差异问题：

iOS 系统可以直接识别 `URL Scheme` 可以直接通过 Scheme 跳转小程序。

但是 Android 系统内是不支持直接识别 `URL Scheme` 的，需要开发者使用 H5 页面进行中转，再跳转到 Scheme 实现打开小程序。

可以简单理解为：

iOS 系统内可以直接点击使用 `URL Scheme` 生成的链接，但是因为无法确定用户所用机型及系统。

我们最好使用 H5 页面跳转的方法来实现。

跳转代码示例如下：

```js
location.href = 'weixin://dl/business/?t= *TICKET*'
```

该跳转方法可以在用户打开 H5 时立即调用，也可以在用户触发事件后调用。

### 调用上限

Scheme 将根据是否为到期有效与失效时间参数，分为**短期有效 Scheme**与**长期有效 Scheme**：

1. 单个小程序每日生成 Scheme 上限为 50 万个（包含短期有效 Scheme 与长期有效 Scheme）
2. 有效时间超过 31 天的 Scheme 或永久有效的 Scheme 为**长期有效 Scheme**，单个小程序总共可生成长期有效 Scheme 上限为 10 万个，请谨慎调用
3. 有效时间不超过 31 天的 Scheme 为**短期有效 Scheme**，单个小程序生成短期有效 Scheme 不设上限

### 注意事项

1. 微信内的网页如需打开小程序请使用[微信开放标签-小程序跳转按钮](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#%E5%BC%80%E6%94%BE%E6%A0%87%E7%AD%BE%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3)，无公众号也可以直接使用小程序身份开发网页并免鉴权跳转小程序，见[云开发静态网站跳转小程序](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/staticstorage/jump-miniprogram.html)。符合开放范围的小程序可以[下发支持打开小程序的短信](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/staticstorage/msg-miniprogram.html)
2. 该功能基本覆盖当前用户正在使用的微信版本，开发者无需进行低版本兼容
3. 只能生成已发布的小程序的 URL Scheme
4. 通过 URL Scheme 跳转到微信时，可能会触发系统弹框询问，若用户选择不跳转，则无法打开小程序。请开发者妥善处理用户选择不跳转的场景
5. 部分浏览器会限制打开网页直接跳转，可参考示例网页设置跳转按钮

### 开放范围

针对国内非个人主体小程序开放。

### 示例

示例使用了云开发静态网站托管搭建网页，无需公众号，只需准备好小程序和开通云开发。网页会判断所在的环境来觉得采用哪种跳转方式，如检测到微信客户端内，则免鉴权使用开放标签跳转，如检测到在外部浏览器或 App，则使用 URL Scheme 跳转小程序。

示例网页地址：**https://postpay-2g5hm2oxbbb721a4-1258211818.tcloudbaseapp.com/jump-mp.html**

<img class="zoom" style="width: 120px;" src="./images/wx-URL-Scheme/jump-mp.png">

详细代码示例和说明：[云开发静态网站跳转小程序](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/staticstorage/jump-miniprogram.html)。

<br/>

以上说明搬运自微信文档，若无法理解可直接参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html)
