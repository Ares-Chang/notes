# 微信分享按钮呈灰色

## 问题

微信小程序上线成功后发现，无法分享小程序。分享按钮呈灰色，点击无反应。

经查询：微信小程序分享功能需要手动开启。可自定义分享标题、图片等，可分享群聊获取回调。

## 解决方法

用户点击右上角转发分享按钮会触发 wx 小程序的 `onShareAppMessage` 函数（和 `onLoad` 等生命周期函数同级）,此事件需要 `return` 一个 `Object`，用于自定义分享内容。

微信小程序平台的分享管理比较严格，具体请参考 [小程序分享指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)。

使用方法：

```js
export default {
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内分享按钮
      console.log(res.target)
    }
    return {
      title: '自定义分享标题',
      path: '/pages/test/test?id=123'
    }
  }
}
```

> 注意：微信、头条平台：只有定义了此事件处理函数，小程序右上角菜单才会显示“转发”按钮

详细参数请参考[官方文档](https://uniapp.dcloud.io/api/plugins/share?id=onshareappmessage)

**如页面中根本没有分享按钮，请查看分享按钮是否被隐藏。**

检查代码中是否存在 [`uni.hideShareMenu`](https://uniapp.dcloud.io/api/plugins/share?id=hidesharemenu) 方法，该方法可以隐藏原生菜单中的分享按钮。

**如果需要分享群聊获取回调**

可以使用 [`uni.showShareMenu`](https://uniapp.dcloud.io/api/plugins/share?id=showsharemenu) 来完成分享，该方法分享到群聊中，用户点击会携带特定参数进入，可以做判别操作。
