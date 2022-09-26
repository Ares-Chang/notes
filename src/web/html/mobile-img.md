# 防止 img 的图片被手机浏览器的 图片查看器 打开

## 问题

近期在制作移动端活动页时遇到一个问题，页面大体由图片组成，只需要按照位置定位上去几个按钮就可以满足需求。

但是页面在 QQ，夸克等浏览器打开时点击按钮或背景图，img 标签会被浏览器的图片查看器所打开。

## 解决方法

在 img 标签前面包裹一个 a 标签，不让 href 进行跳转。

```html
<a href="javascript:;">
  <img class="subject_img" src="@/assets/subject/subject-one.png" alt />
</a>
```

这样就可以解决 img 被手机浏览器打开的问题了。
