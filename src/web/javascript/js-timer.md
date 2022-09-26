# js 定时器代码块

## 关于

记录 js 定时器使用方法的代码块，方便调用。

## 代码块

### setTimeout

`setTimeout` 是一次性定时器，可以用来倒计时，执行一次必任务等场景。

**使用方法：**

```js
setTimeout([要执行的函数], [执行间隔时间])
```

**代码块：**

```js
setTimeout(() => {
  console.log('定时器一秒后执行！')
}, 1000)
```

### clearTimeout

`clearTimeout` 可用于取消未执行的 `setTimeout`。

**使用方法：**

```js
clearTimeout([需要清除的定时器ID])
```

**代码块：**

```js
let timer = setTimeout(() => {
  console.log('定时器不会被执行！')
}, 1000)
clearTimeout(timer)
```

### setInterval

`setInterval` 只要不停止或关闭页面就会一直执行。

**使用方法：**

```js
setInterval([要执行的函数], [执行间隔时间])
```

**代码块：**

```js
setInterval(() => {
  console.log('定时器每一秒执行一次！')
}, 1000)
```

### clearInterval

`clearInterval` 可用于取消执行 `setInterval`。

**使用方法：**

```js
clearInterval([需要清除的定时器ID])
```

**代码块：**

```js
let timer = setInterval(() => {
  console.log('一秒后定时器不会被执行了！')
}, 1000)

setTimeout(() => {
  clearInterval(timer)
}, 1000)
```

### 优化定时器

优化后，多次点击同一按钮只能触发一次执行结果。

`setInterval` 同理。

> 下面代码块放入 `.html` 文件中

```html
<button id="test">点我！</button>
<script>
  let btn = document.getElementById('test')

  let timer
  btn.onclick = () => {
    if (timer) {
      // 如果定时器存在进入
      clearTimeout(timer) // 每次清除定时器。
    }
    timer = setTimeout(() => {
      console.log('点击多次只会触发一次！')
    }, 1000)
  }
</script>
```

其他按钮效果可以参考[节流与防抖](./throttle-and-debounce)。
