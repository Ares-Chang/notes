# vue 页面绑定滚动事件

## 需求

vue 项目中需要做一个页面滚动到特定位置执行动画的操作，但是 vue 本身是没有提供哪个方法或事件来实现这个功能的，所以需要使用到原生的事件绑定来自己完成。

## 实现

```js
mounted () {
  // 给 window 绑定一个滚动事件监听
  window.addEventListener('scroll', this.handleScroll)
},

methods: {
  handleScroll () {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop >= 500) {
      // 这里写入执行操作
    }
  },
},
destroyed () {
  // 离开页面销毁事件
  window.removeEventListener('scroll', this.handleScroll)
}
```
