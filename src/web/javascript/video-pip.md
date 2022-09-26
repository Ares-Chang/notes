# 画中画

## 介绍

Chrome 70 之后已经原生支持 `video` 标签的画中画技术。

实际应用就是在右下角会浮动出一个小窗口，不会被其他页面覆盖（划水利器~）

## 应用

pip 总共提供了两个方法（进入和退出），两个事件（进入和退出）以及一个对象（画中画窗体对象）。

- 获取元素

```js
// 获取 video
let video = document.getElementById('video')
```

- 开启 pip

```js
// 进入画中画
video.requestPictureInPicture()
```

- 关闭 pip

```js
// 退出画中画
document.exitPictureInPicture()
```

为了方便我们监听视频的播放状态，还提供了 2 个事件 API 接口和一个 `PictureInPictureWindow` 对象,包含 `width`，`height` 和 `onresize` 这些属性

```js
// 进入画中画模式时候执行
video.addEventListener('enterpictureinpicture', function (event) {
  // 已进入画中画模式
  console.log(event)
})

// 退出画中画模式时候执行
video.addEventListener('leavepictureinpicture', function (event) {
  // 已退出画中画模式
  console.log(event)
})
```
