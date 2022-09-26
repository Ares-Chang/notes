# wangeditor 取消自动获取焦点

## 问题

在项目中使用 `wangeditor` 做富文本编辑器的时候，每次打开页面光标总会自动定位到富文本上，有时富文本在底部时光标也会跟随到底部，这样的体验非常不友好。

## 解决方法

- 方法一

在开始增加一个被隐藏了的输入框, `<input class="hidden-input" type="text" autofocus="autofocus">` 默认让该输入框获得焦点即可

- 方法二

在 `node_module` 中 找到 `wangeditor/release/wangeditor.js` 将

```js
this.selection.createRangeByElem($last, false, true)
this.selection.restoreSelection()
```

注释掉

打包的时候 需要修改 `wangeditor.min.js` 将 `this.selection.restoreSelection()` 删除
