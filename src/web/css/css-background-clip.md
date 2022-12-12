# CSS 实现文字贴图和渐变文字

## 分享

今日份摸鱼知识：CSS 实现文字贴图和文字颜色渐变。

效果展示：

<span class="base_span chartlet">background-clip: text;</span>
<br />
<span class="base_span color">background-clip: text;</span>

<style scoped>
  .base_span {
    text-transform: capitalize;
    font-size: 60px;
    font-weight: 700;
    line-height: normal;
  }
  .chartlet {
    background: no-repeat center/100% url(http://areschang.top/hero.jpg);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .color {
    color: transparent;
    background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
    background-clip: text;
    -webkit-background-clip: text;
    animation: huerotate 3s infinite;
  }
  @keyframes huerotate {
    100% {
      filter: hue-rotate(360deg); /* 滤镜 色调旋转 */
    }
  }
</style>

## 实现方法

上列效果仅通过 CSS 实现，关键属性只有两个。

下文介绍关键属性，也可以[点击跳转 CodePen 查看在线 Demo](https://codepen.io/ares-chang/pen/JjWgpbo)

### 贴图文字

效果主要通过 `background-clip: text;` 属性实现，点击查看[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)。

简单可以理解为，以区块内文字作为裁剪区域向外裁剪，保留文字内部空间。

然后给背景设置一张背景图片，把文字颜色设为透明，就可以实现。

主要实现通过：

```css
background-clip: text;
-webkit-background-clip: text; /* 设置裁剪区块 */
color: transparent; /* 设置字体透明，可以透出背景 */
```

> 注意：这个属性有兼容性问题，如需使用请查清浏览器是否支持该属性。

如果上方[在线 Demo](https://codepen.io/ares-chang/pen/JjWgpbo) 无法打开可以查看下方代码块：

::: details 点击查看代码块

```html
<span class="chartlet">background-clip: text;</span>
<style>
  .chartlet {
    text-transform: capitalize;
    font-size: 120px;
    font-weight: 700;
    background: no-repeat center/100% url(http://areschang.top/hero.jpg);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
```

:::

### 渐变文字

渐变文字的实现是，在贴图文字的基础上为文字背景设置一个色调滤镜的动画。

可以给文字背景设置多个色值，然后设置一个色调调整的动画过度。

更改 `filter: hue-rotate();` 属性来改变色调。

[本例 Demo](https://codepen.io/ares-chang/pen/JjWgpbo) 和贴图动画 Demo 在一起。

具体可以查看代码块：

::: details 点击查看代码块

```html
<span class="color">background-clip: text;</span>
<style>
  .color {
    text-transform: capitalize;
    font-size: 120px;
    font-weight: 700
    color: transparent;
    background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a); /* 设置多个背景色，可以在动画时出现缤纷的效果 */
    background-clip: text;
    -webkit-background-clip: text;
    animation: huerotate 3s infinite; /* 设置滤镜动画 */
  }

  @keyframes huerotate {
    100% {
      filter: hue-rotate(360deg); /* 修改色调 */
    }
  }
</style>
```

:::

### 歌词加载动画

根据上文，实现一个歌词加载动画。

<span class="toLoad" text-data="hello world~~">hello world~~</span>

<style scoped>
  .toLoad {
    position: relative;
    font-size: 60px;
    font-weight: 700;
    color: #ccc;
    text-transform: capitalize;
    /* 防止脱标换行 */
    white-space: nowrap;
    line-height: normal;
  }
  .toLoad::after {
    content: attr(text-data);
    background: linear-gradient(
      45deg,
      #ffeb3b,
      #009688,
      yellowgreen,
      pink,
      #03a9f4,
      #9c27b0,
      #8bc34a
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    animation: toLoad 6s linear infinite;
  }
  @keyframes toLoad {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
      filter: hue-rotate(360deg);
    }
  }
</style>

[点击查看在线 Demo](https://codepen.io/ares-chang/pen/gOmVegB)。

::: details 点击查看代码块

```html
<span text-data="hello world~~">hello world~~</span>
<style>
  body {
    text-align: center;
    margin-top: 120px;
  }

  span {
    position: relative;
    font-size: 60px;
    font-weight: 700;
    color: #ccc;
    text-transform: capitalize; /* 设置文字大小写统一 */
    /* 防止脱标换行 */
    white-space: nowrap;
  }

  span::after {
    content: attr(text-data);
    background: linear-gradient(
      45deg,
      #ffeb3b,
      #009688,
      yellowgreen,
      pink,
      #03a9f4,
      #9c27b0,
      #8bc34a
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    animation: huerotate, toLoad 6s linear infinite;
  }

  @keyframes toLoad {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes huerotate {
    100% {
      filter: hue-rotate(360deg);
    }
  }
</style>
```

:::

> PS: 上文使用的 [`text-transform: capitalize;`](./css-text-transform.md) 和 [`content: attr(text-data);`](./css-tooltip.md) 属性，可以点击查看对应使用详解。
