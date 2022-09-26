# 解决 map 中无法进行 async 问题

## 问题

近期在写项目时遇到一个问题：

业务需要，要使用数据中的每一项值进行请求（在不讨论做法是否合理的情况下）。

但是实际执行却发现，`map` 中使用 `async/await` 无法进行异步，最外层无法及时获取数据。

> `forEach` 等 `es6` 遍历也存在相同问题。

代码块：

```js
console.log('start')
;[1, 2, 3].map(async item => {
  // 模拟请求
  console.log(
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(item)
      }, 1000)
    })
  )
})
console.log('end')
// console 顺序 => start, end, 1, 2, 3
```

显然，这并不符合我们的预期。

## 解决方法

最初以为写法有问题，是不是写错了，但是用 `for` 循环实现了一遍却没有这个问题。

代码块：

```js
;(async () => {
  // 自执行函数，可直接放入浏览器执行
  console.log('start')
  const arr = [1, 2, 3]
  for (let i = 0; i < arr.length; i++) {
    console.log(
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(arr[i])
        }, 1000)
      })
    )
  }
  console.log('end')
})()
// console 顺序 => start, 1, 2, 3, end
```

> `for` 循环相对 `for of` 更便于理解，但是个人并不是很喜欢，个取所需。

显然，这是 `map` 中并没有等待数据返回就直接 `return` 了。

`console` 一下可以看到，`map` 返回了三个 `Promise` 对象，并没有等待执行异步操作。

既然这样，那只能使用 [`Promise.all`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 来完成统一的数据获取了。

代码块：

```js
;(async () => {
  console.log('start')
  // Promise.all 统一调用，这里也需要 await 操作
  await Promise.all(
    [1, 2, 3].map(async item => {
      // 模拟请求
      console.log(
        await new Promise(resolve => {
          setTimeout(() => {
            resolve(item)
          }, 1000)
        })
      )
    })
  )
  console.log('end')
})()
// console 顺序 => start, 1, 2, 3, end
```

但是需要注意，如果需要多层 `map` 每层 `map` 外都需要使用 `Promise.all` 包裹。

因为每层 `Promise.all` 也需要异步操作，否则还是不会被执行。

```js
;(async () => {
  console.log('start')
  // 每层 map 都需要 Promise.all
  await Promise.all(
    [
      [1, 2, 3],
      [4, 5, 6]
    ].map(async item => {
      // 每层 map 都需要 Promise.all
      await Promise.all(
        item.map(async item => {
          // 模拟请求
          console.log(
            await new Promise(resolve => {
              setTimeout(() => {
                resolve(item)
              }, 1000)
            })
          )
        })
      )
    })
  )
  console.log('end')
})()
```

综上所述，`Promise.all` 固然可以解决这个问题，但是如果层级多了，代码反而繁琐不好理解了。（ps：我最初的想法是优化一下的。。。没想到越优化越复杂）

## 最优解（暂）

所以，我找了另外一种解决方法：

可以使用 `for of` 来实现，简单好理解，不会产生 `map` 的提前返回问题。

```js
;(async () => {
  console.log('start')
  const arr = [1, 2, 3]
  for (const item of arr) {
    // item 为每一项
    console.log(
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(item)
        }, 1000)
      })
    )
  }
  console.log('end')
})()
```

关于 `map` 循环，此方案可能不是最优解，如果有更好的办法请分享出来，感谢。
