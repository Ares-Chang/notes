# CSS 鼠标聚焦动画

## 分享

记录一种鼠标移动，按钮聚焦效果，主要通过 CSS `before` 和 `after` 实现。

鼠标移动，展示效果：

<div class="_content">
  <span class="_btn">按钮</span>
</div>
  
<style scoped>
  ._content {
    display: inline-block;
    padding: 20px;
    margin-top: 10px;
  }
  ._btn {
    position: relative;
    font-size: 30px;
    padding: 20px 30px;
    cursor: pointer;
    transition: all .5s;
  }
  ._btn:hover {
    background: pink;
    box-shadow: 0 0 50px pink;
    transition-delay: 0.5s;
  }
  ._btn::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-top: 6px solid pink;
    border-left: 6px solid pink;
    box-sizing: border-box;
    left: 0;
    top: 0;
    transition: all .5s;
  }
  ._btn:hover::before {
    width: 100%;
    height: 100%;
  }
  ._btn::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-right: 6px solid pink;
    border-bottom: 6px solid pink;
    box-sizing: border-box;
    right: 0;
    bottom: 0;
    transition: all .5s;
  }
  ._btn:hover::after {
    width: 100%;
    height: 100%;
  }
</style>

## 实现方法

[点击跳转 CodePen 查看详情](https://codepen.io/ares-chang/pen/YzVzLgM)

若地址无法打开可复制代码块到本地运行。

代码块：

```html
<span>按钮</span>
<style>
  body {
    margin: 0;
    height: 100vh;
    background-color: #14213d;
    text-align: center;
  }

  span {
    position: relative;
    top: 300px;
    font-size: 30px;
    padding: 20px 40px;
    color: #fff;
    user-select: none;
    transition: 0.5s;
    cursor: pointer;
  }

  /* 鼠标移经 btn 显示背景及阴影过渡 */
  span:hover {
    background: pink;
    color: #111;
    box-shadow: 0 0 50px pink;
    transition-delay: 0.5s; /* 动画延时 0.5 秒执行 */
  }

  /* 左上边框动画执行 */
  span::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-top: 6px solid pink;
    border-left: 6px solid pink;
    left: 0;
    top: 0;
    transition: all 0.5s;
    box-sizing: border-box;
  }
  span:hover::before {
    width: 100%;
    height: 100%;
  }

  /* 右下边框动画执行 */
  span::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-bottom: 6px solid pink;
    border-right: 6px solid pink;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
    box-sizing: border-box;
  }
  span:hover::after {
    width: 100%;
    height: 100%;
  }
</style>
```
