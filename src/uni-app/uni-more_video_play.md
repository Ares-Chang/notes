# 解决同页面多视频可同时播放问题

## 问题

在 uniapp 使用 video 组件时遇到一个问题：

同一页面中有多个视频，当逐一点击时会同时播放，这显然是不合理的。

## 解决方法

参考 [小程序中手动控制视频播放](./uni-video.md) 可以发现：

[uni.createVideoContext](https://uniapp.dcloud.io/api/media/video-context?id=createvideocontext) 方法可以创建并返回 video 上下文 `videoContext` 对象。

该对象中包含了可以操控 video 组件播放、暂停、停止...等一系列操作方法。如需详细了解可以参考 [官方文档](https://uniapp.dcloud.io/api/media/video-context?id=createvideocontext)

既然可以暂停视频了，我们只需要通过监听每个视频的播放事件来判断，当前是否已经有视频正在播放，如果有就暂停它。

**代码块：**

```vue {3-11,41-58}
<template>
  <view class="content">
    <!-- 设置 id 属性，用于判断视频源 -->
    <video
      :src="item.url"
      :id="item.id"
      v-for="item in list"
      :key="item.id"
      controls
      @play="videoPlaying"
    ></video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4'
        },
        {
          id: 2,
          url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4'
        },
        {
          id: 3,
          url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4'
        },
        {
          id: 4,
          url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4'
        }
      ],
      video: null
    }
  },
  methods: {
    videoPlaying(e) {
      // 解析同页面多视频同时播放问题
      let newVideo = uni.createVideoContext(e.currentTarget.id) // 根据视频 id 创建对应视频上下文
      // let newVideo = uni.createVideoContext(e.currentTarget.id, this); // 自定义组件中使用
      newVideo.id = e.currentTarget.id // 设置上下文 id
      if (!this.video) {
        // 判断当前如无视频正在播放，直接播放当前视频并记录
        this.video = newVideo
        this.video.play()
        return
      }
      if (this.video.id !== newVideo.id) {
        // 哪果之前播放视频和当前播放视频 id 不相同进入执行
        newVideo.play() // 当前视频主体播放
        this.video.pause() // 之前视频主体暂停
        this.video = newVideo // 播放主体切换记录
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  text-align: center;
}
</style>
```

**注意设置每个视频组件 `id` 属性，方法中需要根据 `id` 来判断播放视频源。否则视频播放会产生错误！**

::: danger 注意：
**注意！注意！注意！！！组件中使用，传参 `this`，否则方法找不到组件，不会产生效果！！！**

`uni.createVideoContext` 在**自定义组件**中使用时，**第二个参数传入组件实例 this**，以操作组件内 `<video>` 组件。 --- [uni-app 官网](https://uniapp.dcloud.io/api/media/video-context?id=createvideocontext)
:::
