# 节流与防抖

## 关于

防抖：字面意思，防止抖动，规定时间内，频繁触发事件会被重置，避免事件被失误触发多次。

节流：控制流量，规定时间内，事件只会触发一次。

## 实现方法

### 防抖

实现方法：每次执行前判断当前是否有延时函数等待执行，如果有，就清空。

代码实现重在清零 `clearTimeout`，多用于添加按钮，输入信息等需要频繁发送请求的地方。

```js
function debounce(fn, delay = 500) {
  let timer
  return () => {
    if (timer) clearTimeout(timer) // 有定时器未执行就清除。
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
```

具体实现可以查看[代码块](#代码块)。

### 节流

实现方法：每次执行前会判断当前是否有等待执行的延时函数，如果有则 `return`

代码实现重在控制什么时候 `return`，多用于计算鼠标移动，下拉滚动等事件。

```js
function throttle(fn, delay = 500) {
  let timer
  return () => {
    if (timer) {
      return
    } // 有定时器未执行就退出。
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
```

具体实现可以查看[代码块](#代码块)。

### 总结

- 防抖：

所谓防抖，就是高频触发事件，但是在 n 秒内只会执行一次。在此期间再次被触发，则会重新计算执行时间。

- 节流：

所谓节流，就是在连续触发事件后的 n 秒内，只会执行一次方法，如果在此期间再次被触发，直接 `return` 退出

> 提炼：防抖就是控制次数，节流就是控制频率。需要根据业务需求来决定使用什么方法。

## 代码块

下列代码放入 `.html` 文件中。

```html
<button id="debounce">防抖</button>
<button id="throttle">节流</button>
<script>
  let btn_debounce = document.getElementById('debounce')
  let btn_throttle = document.getElementById('throttle')

  // 防抖
  function debounce(fn, delay = 500) {
    let timer
    return () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  }

  // 节流
  function throttle(fn, delay = 500) {
    let timer
    return () => {
      if (timer) {
        return
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }

  // 注册防抖
  btn_debounce.onclick = debounce(() => {
    console.log('多次点击只会执行一次！')
  }, 1000)

  // 注册节流
  btn_throttle.onclick = throttle(() => {
    console.log('一段时间内点击只会执行一次！')
  }, 1000)
</script>
```
