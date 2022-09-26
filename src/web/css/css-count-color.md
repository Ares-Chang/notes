# 通过一个颜色计算出一个更浅的颜色

## 关于

愉快的周一喜提新需求：

通过色板让用户自定义主题色，为区分主次，侧栏颜色相对顶栏较浅就可以。

刚听到消息我的一脸懵 B，还能这么搞 😒，搞个色板上去，人人都是艺术家吗？

但是没有办法，谁让咱是打工人呢~

## 解决方法

一开始想，这个需求听上去很高大上，但是不就是想要颜色浅一点吗，把透明度调低一点不就好了。

想法很美好，实现起来也很简单。

但是不得不面对一个现实的问题：如果底色不是白色怎么办？？？

想想，这个方法也就不是很贴合实际了。

### lighten

后来想到 HEX 值不是十六进制的吗，我在这个基础上加上几位，色值不就改变了。

只要控制好尺度，色差就不会太大。

想法是美好的，但是实现起来却是要技术的。

我也不会进制转换啊！！！到头来还是得靠百度过活。

搜索半天发现，`scss` 提供了一个方法 `lighten()`，可以根据提供的颜色和百分比获得一个更浅的颜色。

但是这也不能因为一个功能安装个 `scss` 啊！后来在 [stack overflow](https://stackoverflow.com/questions/14530941/js-lighten-darken-color) 找到一篇帖子，使用 js 模拟出了 `lighten` 功能（咱也没用过 `lighten` 咱也不知道正不正宗，但是），感谢解决我的问题！

**代码块：**

```js
const lighten = (color, lighten) => {
  const c = color.replace('#', '') // 去除 # 号
  // 取值
  let rgb = [
    parseInt(c.substr(0, 2), 16),
    parseInt(c.substr(2, 2), 16),
    parseInt(c.substr(4, 2), 16)
  ]
  let returnstatement = '#' // 添加 # 号
  // 改变色值
  rgb.forEach(color => {
    returnstatement += Math.round(
      (255 - color) * (1 - Math.pow(Math.E, -lighten)) + color
    ).toString(16)
  })
  return returnstatement
}
```

[点击 CodePen 查看效果](https://codepen.io/ares-chang/pen/wvrGNJO)

简单理解，大体就是上面解释的样子，把颜色值抽出来，根据一定比例加减。

### filter

其实一开始也找到了[另外一篇帖子](https://stackoverflow.com/questions/1625681/dynamically-change-color-to-lighter-or-darker-by-percentage-css/55828346#55828346)，可以使用 `CSS filter` 来在这个色值基础上加减亮度，但是效果没有 `lighten` 那么好控制，但是用法相对简单很多。可以根据项目需求选择不同的实现方法。

**代码块：**

```css
.box {
  background: pink;
  filter: brightness(110%);
}
```

[点击 CodePen 查看效果](https://codepen.io/ares-chang/pen/wvrGNJO)

综上，感谢各位大神提出的解决方法。
