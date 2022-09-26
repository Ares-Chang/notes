# CSS 控制文本大小写

## 分享

今日份摸鱼新发现：CSS 中有个属性可以直接控制文本大小写。

可选属性：全部大写，全部小写，单词首字母大写。

## 实现方法

通过 `text-transform` 属性可以控制文本显示模式。

可选属性：

| 属性       | 值                                             |
| :--------- | :--------------------------------------------- |
| none       | 默认。定义带有小写字母和大写字母的标准的文本。 |
| capitalize | 文本中的每个单词以大写字母开头。               |
| uppercase  | 定义仅有大写字母。                             |
| lowercase  | 定义无大写字母，仅有小写字母。                 |
| inherit    | 规定应该从父元素继承 text-transform 属性的值。 |

下面是使用方法，[点击跳转 CodePen 查看效果](https://codepen.io/ares-chang/pen/mdWZoLo)。

网址如无法打开可以复制代码块到本地运行。

::: details 点击查看代码块

```html
<div class="capitalize">text-transform: capitalize;</div>
<div class="uppercase">text-transform: uppercase;</div>
<div class="lowercase">text-transform: lowercase;</div>
<style>
  .capitalize {
    text-transform: capitalize;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .lowercase {
    text-transform: lowercase;
  }
</style>
```

:::
