---
title: 微信小程序内使用阿里图标库
---

## 关于

想要在 wx 小程序内使用阿里巴巴图标库，但是微信小程序内是没有 `index.html` 文件的，怎么引入在线地址使用呢？

## 使用示例

1. 挑选想要使用的图标加入到购物车内

<img class="zoom" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_11-07-02.png')">

2. 将要使用的图标添加到项目中

<img class="zoom" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_11-08-01.png')">

3. 将代码下载到本地

方法一：

点击下载代码，下载 zip 压缩包

<img class="zoom" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_11-09-11.png')">

方法二：

直接将代码在线打开，另存为下载，导入项目，方可直接使用。

<img class="zoom" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_13-15-21.png')">

> ps: 使用此方法可跳过步骤 6 

4. 下载的代码中有个 `iconfont.css` 的文件，将文件复制到你的项目中

5. 然后在你的 `App.vue` 文件中引入 `iconfont.css`

<img class="zoom" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_11-39-13.png')">

因为下载到你本地的代码资源使用的是你本地路径，需要更改为你的线上地址。

6. 打开阿里图标库，选中 `Unicode` 点击打开在线链接，复制生成代码替换你本地代码块。

<img class="zoom" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_11-09-44.png')">

保存之后就可以正常使用了。

代码：

<img class="zoom" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_11-43-18.png')">

效果：

<img class="zoom" style="width: 200px" :src="$withBase('/web/uni-app/wx-iconfont/Snipaste_2020-09-15_11-44-12.png')">

