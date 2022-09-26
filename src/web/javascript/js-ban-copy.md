# 前端限制：禁止复制剪切

## 需求

领导们考虑公司数据安全，防止员工把数据复制粘贴带走。要求控制用户不能操作复制剪切等行为。

🙃(我很开心，不用管我)

## 技术调研

经常浏览掘金，知乎等网站可以发现，每次复制粘贴长文本数据的时候，字段末尾总是会添加相关版权信息。

这又是怎么搞的？？？

经查询，web 预留了 API 可以直接调用处理。

### 复制、剪切、粘贴事件

1. `copy` 发生复制操作时触发;
2. `cut` 发生剪切操作时触发;
3. `paste` 发生粘贴操作时触发;
4. 每个事件都有一个 `before` 事件对应：`beforecopy`、`beforecut`、`beforepaste`;

这几个 `before` 一般不怎么用，所以我们把注意力放在另外三个事件就可以了。

### 触发条件

1. 鼠标右键菜单的`复制`、`粘贴`、`剪切`;

2. 使用了相应的键盘组合键，比如: `ctrl+c`、`ctrl+v`、`ctrl+x`;

就算你是随便按的，也会触发事件。高程中介绍在 Chorme、Firefox 和 Safari 中，这几个 `before` 事件只会在真实会发生剪贴板事件的情况下触发，IE 上则可以触发 `before`。

但实际测试的时候，使用最新版 chorme 乱按也会触发，所以限制应该是在早一点的版本上。

so,想说的是：`before` 这几个事件最好不要用,有关于剪切板的处理最好放在 `copy`、`cut`、`paste`事件上面。

### 使用姿势

以 `copy` 为例:

```js
document.body.oncopy = e => {
  // 监听全局复制 做点什么
}
// 还有这种写法：
document.addEventListener('copy', e => {
  // 监听全局复制 做点什么
})
```

上面是在 `document.body` 上全局监听的，同时我们还可以为某些 `dom` 单独添加剪切板事件：

```html
<!-- html结构 -->
<div id="test1">test1</div>
<div id="test2">test2</div>

<script>
  // 写法一样：
  let test1 = document.querySelector('#test1')
  test1.oncopy = e => {
    // 监听test1发生的复制事件 做点什么
    // test1发生的复制事件会触发回调，其他地方不会触发回调
  }
</script>
```

### 参数方法

通过触发 `copy` 事件，可以获取 `event` 对象参数，`event` 对象中包含 `clipboardData` 对象

**`clipboardData` 对象是用于访问以及修改剪贴板中的数据的**

但是不同浏览器所属的对象是不同的，在 `IE` 中这个对视像 `window` 对象的属性，但在 `Chrome`、`Safari`、`Firefox` 中，这个对象使相应的 `event` 对象的属性。

所幸现在微软也已经抛弃了 `IE`，新的 `Edge` 也是基于 `Chrome` 内核加工的，但不能保证所有用户都不用 `IE`，所以这里需要做一个兼容操作。

```js
document.body.oncopy = e => {
  let clipboardData = e.clipboardData || window.clipboardData
  // 获取 clipboardData 对象 + do something
}
```

我们虽然获取到了剪贴板中的数据，但是无法直接访问，需要通过该对象的三个方法来做到，分别是：`getDate()`、`setDate()`、`clearDate()`

- `getDate()` 获取剪切板中的数据
  参数：`getDate()` 接受一个参数，即要取得的数据的格式。在 `IE` 中，有两种数据格式：`"text"` 和 `"URL"`。在其他浏览器中，这个参数是一种 MIME 类型；不过，可以用 `"text"` 代表

  在 `IE` 浏览器中，`cut` 和 `copy` 事件中的 `getData()` 方法始终返回 `null`；而其他浏览器始终返回空字符串 `''`。但如果和 `setDada()` 方法配合，就可以正常使用

  实际上在 `chorme` 上测试只有 `paste` 粘贴的时候才能用 `getData()` 访问到数据，用法如下：

  1.  要粘贴的数据：

      ```js
      document.body.onpaste = e => {
        let clipboardData = e.clipboardData || window.clipboardData // 兼容处理
        console.log('要粘贴的数据', clipboardData.getData('text'))
      }
      ```

  2.  被复制/剪切的数据：

      在复制和剪切中的数据，需要通过 `window.getSelection(0).toString()` 来访问:

      ```js
      document.body.oncopy = e => {
        console.log('被复制的数据:', window.getSelection(0).toString())
      }
      ```

- `setDate()` 修改剪切板中的数据

`setData()` 方法的第一个参数也是数据类型，第二个参数是要放在剪贴板中的文本。对于第一个参数的规则与 `getData()` 相同。

在 `IE` 浏览器中，该方法在成功将文本放到剪贴板中后，返回 `true`，否则返回 `false`；而其他浏览器中，该方法无返回值。

> [注意] 在 `paste` 事件中，只有 `IE` 浏览器可以正常使用 `setData()` 方法，`chrome` 浏览器会静默失败，而 `firefox` 浏览器会报错。

- `clearDate()` 删除剪切板中的数据

`clearData()` 方法用于从剪贴板中删除数据，它接受一个参数，即要取得的数据的格式。具体参数格式与 `getDate()`第一个参数规则相同。

## 应用场景

### 实现类知乎/掘金复制大段文本添加版权信息

实现很简单：取消默认复制之后，主要是在被复制的内容后面添加信息，然后根据 `clipboardData` 的 `setData()` 方法将信息写入剪贴板。

```js
// 掘金这里不是全局监听，应该只是监听文章的dom范围内。
document.body.oncopy = event => {
  event.preventDefault() // 取消默认的复制事件
  let textFont,
    copyFont = window.getSelection(0).toString() // 被复制的文字 等下插入
  // 防知乎掘金 复制一两个字则不添加版权信息 超过一定长度的文字 就添加版权信息
  if (copyFont.length > 10) {
    textFont =
      copyFont +
      '\n' +
      '作者：test\n' +
      '链接：https://juejin.cn/\n' +
      '来源：掘金\n' +
      '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
  } else {
    textFont = copyFont // 没超过十个字 则采用被复制的内容。
  }
  if (event.clipboardData) {
    return event.clipboardData.setData('text', textFont) // 将信息写入粘贴板
  } else {
    // 兼容IE
    return window.clipboardData.setData('text', textFont)
  }
}
```

然后 `Ctrl+C`、`Ctrl+V`，输出：

```txt
你复制的内容
作者：test
链接：https://juejin.cn/
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 实现类起点网的防复制功能

- 禁止复制+剪切
- 禁止右键，右键某些选项:全选，复制，粘贴等。
- 禁用文字选择，能选择却不能复制，体验很差。
- user-select 用 css 禁止选择文本。

```js
// 禁止右键菜单
document.body.oncontextmenu = e => {
  console.log(e, '右键')
  return false
  // e.preventDefault();
}
// 禁止文字选择。
document.body.onselectstart = e => {
  console.log(e, '文字选择')
  return false
  // e.preventDefault();
}
// 禁止复制
document.body.oncopy = e => {
  console.log(e, 'copy')
  return false
  // e.preventDefault();
}
// 禁止剪切
document.body.oncut = e => {
  console.log(e, 'cut')
  return false
  // e.preventDefault();
}
// 禁止粘贴
document.body.onpaste = e => {
  console.log(e, 'paste')
  return false
  // e.preventDefault();
}
```

```css
/* css 禁止文本选择 这样不会触发js */
body {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
```

> ps:
>
> - 使用 `e.preventDefault()` 也可以禁用，但建议使用 `return false` 这样就不用去访问 `e` 和 `e` 的方法了。
> - 示例中 `document.body` 全局都禁用了，也可以对 `dom(某些区域)` 进行禁用。

### 点击复制功能

不能使用 `clipboardData`：

在 `IE` 中可以用 `window.clipboardData.setData('text','内容')` 实现。

上文提到过，在 `IE` 中 `clipboardData` 是 `window` 的属性。

而其他浏览器则是相应的 `event` 对象的属性，这实际上是一种安全措施，防止未经授权的访问,为了兼容其他浏览器，所以我们不能通过 `clipboardData` 来实现这种操作。

具体做法：

- 创建一个隐藏的 `input` 框

- 击的时候，将要复制的内容放进 `input` 框中

- 选择文本内容 `input.select()`
  这里只能用 `input` 或者 `textarea` 才能选择文本。

- `document.execCommand("copy")`，执行浏览器的复制命令。

```js
function copyText() {
  var text = document.getElementById('text').innerText // 获取要复制的内容也可以传进来
  var input = document.getElementById('input') // 获取隐藏input的dom
  input.value = text // 修改文本框的内容
  input.select() // 选中文本
  document.execCommand('copy') // 执行浏览器复制命令
  alert('复制成功')
}
```

[点击复制内容](https://codepen.io/OBKoro1/pen/mjjEGa)的 demo 在这里，可以点进去看看。

<br />

本文转载加工自[前端进阶积累](http://obkoro1.com/web_accumulate/accumulate/effect/%E5%A4%8D%E5%88%B6%E7%B2%98%E8%B4%B4%E7%B3%BB%E5%88%97.html)，感谢该文章解决我所遇到的问题，特此记录。
