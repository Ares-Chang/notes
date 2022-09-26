# 去除背景色

## 问题

平常使用组件经常是带有背景色的，某个情况下我们不需要这个颜色尝试去除，设置 `background-color` 为 `none` 却没有产生效果。

查询发现 `background-color` 是没有 `none` 值属性的。

## 解决方法

如果想要清除背景颜色可以使用 `background-color: transparent` 背景颜色透明来暂时解决这个问题。
