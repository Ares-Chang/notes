# 文本打点展示

## 业务需求

展示文本过长，**需要打点展示。**

## 解决方法

打点展示包括[单行打点](#单行打点展示)和[多行打点](#多行打点展示)两种文本。

### 单行打点展示

::: tip **示例：**

<div class="demo_content">
  <div class="singleLine_text">
    我是一段很长很长的长文本，你看我长不长，长不长，长不长，长不长，长不长，长不长，长不长，长不长
  </div>
</div>

<style scoped>
  .demo_content {
    font-size: 1rem;
    color: #999;
    border-left: 0.2rem solid #42b983;
    margin: 1rem 0;
    padding: 0.25rem 0 0.25rem 1rem;
    background-color: rgba(66, 185, 131, .1);
  }
  .singleLine_text {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #c1bcbd3d;
  }
</style>

:::

**代码块：**

```html {8-11}
<template>
  <div class="singleLine_text">
    我是一段很长很长的长文本，你看我长不长，长不长，长不长，长不长，长不长，长不长，长不长，长不长
  </div>
</template>
<style>
  .singleLine_text {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
```

**原理：**

- 打点展示主要依靠 `text-overflow` 属性来实现。
- 单行打点原理为限制容器宽度，通过 `white-space` 属性来控制不让文字换行，然后超出容器 `overflow: hidden;` 隐藏显示。

### 多行打点展示

::: tip **示例：**

<div class="demo_content">
  <div class="multiLine_text">
    我是一段很长很长的长文本，你看我长不长，长不长，长不长，长不长，长不长，长不长，长不长，长不长
  </div>
</div>

<style scoped>
  .multiLine_text {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    background-color: #c1bcbd3d;
  }
</style>

:::

**代码块：**

```html {7-12}
<div class="multiLine_text">
  我是一段很长很长的长文本，你看我长不长，长不长，长不长，长不长，长不长，长不长，长不长，长不长
</div>

<style>
  .multiLine_text {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 行数 */
    -webkit-box-orient: vertical;
  }
</style>
```

**原理：**

多行打点原理同单行类似，主要是通过控制容器内显示行数来实现。

1. 通过 `display: -webkit-box` 把 `div` 设置为弹性伸缩盒子模型，之后下面属性都会生效。

2. `-webkit-line-clamp` 属性可以控制容器中文字显示行数。它只有在容器为弹性伸缩盒子并且 `-webkit-box-orient` 属性设置成 `vertical` 时才有效果。

3. `-webkit-box-orient` 用来设置一个元素是水平还是垂直布局其内容。
