# 去除左上小房子

## 问题

使用 `uni-app` 开发小程序发现，进入子类页面发布左上角出现一个小房子按钮，点击就返回主页，但是业务中不需要这个操作，想办法去除。

## 解决方法

在当前页面添加以下代码

```js
onShow(){
  uni.hideHomeButton();
}
```

该方法可以隐藏返回首页按钮,如全局都要去除可以在 `App.vue` 中添加

> PS: 原生同理，只要把 `uni.` 改成 `wx.` 即可

其他疑问请参考官方文档 [传送门](https://uniapp.dcloud.io/api/ui/navigationbar?id=hidehomebutton)
