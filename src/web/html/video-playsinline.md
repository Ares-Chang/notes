# 禁止 Video 视频播放时自动全屏

## 问题

在移动端微信浏览器，苹果等其他浏览器内使用 `<video>` 标签播放视频，用户点击会自动全屏，这样不是很符合我们的业务需求，所以需要去掉这个自动全屏的属性。

## 解决方法

默认情况下，点击 `video` 播放会全屏播放，如果想要视频在局部内可以播放的话，可以设置：`x5-playsinline` 属性

但为兼容性考虑，需要同时支持 Android 和 ios 的 WeChat 浏览器需要添加如下属性：

`webkit-playsinline playsinline x5-playsinline x-webkit-airplay="allow";`

使用方法如下：

```html
<video
  src="./test.mp4"
  webkit-playsinline=""
  playsinline=""
  x5-playsinline=""
  x-webkit-airplay="allow"
  controls=""
></video>
```
