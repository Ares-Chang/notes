# 小程序中手动控制视频播放

## 问题

微信小程序中没有 DOM 是众所周知的事情，那么没有了 DOM 我们怎么控制元素呢？

工作中遇到一个业务，需要用户授权信息然后自动播放视频，都没有了 DOM 元素我们怎么使用 `play()` 方法来播放呢？

## 解决方法

`uni-app` 中提供了一个方法代替 DOM 元素来操作 `<video>` 组件:

我们可以使用 `uni.createVideoContext(videoId, this)` 来获取当前 `video` 然后通过一些特定的方法来完成操作

官方文档 [传送门](https://uniapp.dcloud.io/api/media/video-context?id=createvideocontext)

## 具体实现

结构：

```html
<template>
  <view>
    <video
      id="myVideo"
      src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4"
      controls
    ></video>
    <button
      class="btn-info"
      plain="true"
      open-type="getPhoneNumber"
      @getphonenumber="getPhoneNumber"
    ></button>
  </view>
</template>
```

行为：

```js
export default {
  data() {
    return {
      videoContext: {}
    }
  }
  onReady: function (res) {
    // 获取 video 元素
    this.videoContext = uni.createVideoContext('myVideo')
  },
  methods: {
    getPhoneNumber() {
      // 获取授权信息
      ...
      // 手动播放视频
      this.videoContext.play()
      ...
      // 其他业务代码
    }
  }
}
```
