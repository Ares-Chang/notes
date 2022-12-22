# 常用遍历方法

## 关于

以下记录为 js 中常用的遍历方法，方便查看

> 以下代码块可直接放入控制台执行 && ⭐ 为个人常用度

## 遍历数组

### for 循环

基础操作，不做解释

代码块：

```js
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```

### forEach

`forEach` 使用时不需要自定义参数，使用相对方便

但是相较 `for 循环` 性能劣差

代码块:

```js
const arr = [1, 2, 3]
arr.forEach((item, index, arr) => {
  console.log(item) // 当前元素
  console.log(index) // 下标索引
  console.log(arr) // 正在操作的数组
})
```

### map⭐⭐⭐

`map()` 方法创建一个新数组，这个新数组由原数组循环中所 `return` 的值组成。

参数同 `forEach` 相同，可由 `item`, `index`, `arr` 组成。

> **方便，快捷，常用！！！**

代码块:

```js
const arr = [1, 2, 3]
const newArr = arr.map(item => item * 2)
console.log(newArr) // [2, 4, 6]
```

### filter⭐⭐

`filter` 与 `map` 大体相同，但是 `map` 是为了改变值存在，`filter` 是为了筛选值存在。

如果循环过程中 `return` 了 `false` 值，当前 `item` 就不会被记录到新数组。

代码块:

```js
const arr = [1, 2, 3, 4]
// 只记录双数
const newArr = arr.filter(item => {
  if (item % 2) return false
  return item
})
console.log(newArr) // [2, 4]
```

### some

`some` 函数的作用是遍历数组中是否要满足条件的存在，如果存在，就返回 `true` ,并且不再向后执行。

代码块:

```js
const arr = [1, 2, 3, 2, 1]
const newArr = arr.some(item => {
  console.log(item) // 1, 2, 3
  return item === 3 // 等于 3 就不会再向后执行了
})
console.log('是否存在:', newArr)
```

### every

`every` 函数与 `some` 极为相似，也是用于查找数组是否满足某种条件。

但是，`every` 函数必须每一项都是 `true` 才返回 `true`，否则返回 `false`

可以简单理解为：`some` 查到之后就返回 `true`，但是 `every` 查到之后就返回 `false`

代码块:

```js
const arr = [1, 3, 4, 5]
const newArr = arr.every(item => item === 2)
console.log(newArr) // false
```

### reduce && reduceRight

`reduce` 和 `reduceRight` 函数都会迭代数组的所有项，然后构建一个最终返回的值。

`reduce` 会从数组第一项开始，遍历到最后。

`reduceRight` 更好相反，反从最后一个遍历到第一项。

因为 `reduce` 函数会为每个元素执行一个提供的 `reducer` 函数，每一次运行前会先将上一次的计算结果作为参数传入，最后把所有结果的和返回。

所以这两个函数多用于数组求和，可以快速方便的实现。

代码块:

```js
// 数组求和
const arr = [1, 2, 3, 4, 5]
const newArr = arr.reduce((prev, cur) => prev + cur)
console.log(newArr) // 15
```

`reduce` 函数的参数与众不同，它的第一个参数代表上一个值，第二个参数才是当前值。

并且，`reduce` 函数接受的第二个参数值为开始执行的索引

代码块：

```js
const arr = [1, 2]
arr.reduce((prev, cur, index, arr) => {
  console.log(prev, cur, index, arr)
}, 0) // 第二个参数传入 0 ，表示会从 arr[0] 开始执行
```

### for...of⭐

`for...of` [为 ES6 引入的一个特性更新](https://es6.ruanyifeng.com/#docs/iterator#for---of-%E5%BE%AA%E7%8E%AF)，可以使用的范围包括数组、`Set` 和 `Map` 结构、某些类似数组的对象（比如`arguments对象`、`DOM NodeList 对象`）、后文的 `Generator` 对象，以及字符串。

代码块:

```js
const arr = [1, 2, 3]
for (const item of arr) {
  console.log(item) // 1 2 3
}
```

## 遍历对象

### for...in

`for...in` 语句以任意顺序迭代一个对象的除 `Symbol` 以外的可枚举属性，包括继承的可枚举属性。

代码块:

```js
const obj = { a: 1, b: 2, c: 3 }
for (const key in obj) {
  console.log(key, obj[key])
}
```

同时 `for...in` 词句也可以遍历数组，因为数组也是一种 `Object`

但是并[不是非常推荐这样操作](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in#%E6%95%B0%E7%BB%84%E8%BF%AD%E4%BB%A3%E5%92%8C_for...in)，正常遍历数组，可以使用 [`for...of`](#for-of) 操作。

> 遍历数组时 `key` 值为数组对应项下标

### Object.keys()⭐⭐

`ES5` 引入了 `Object.keys()` 方法，会返回当前对象的所有**可遍历属性**的键名。 值为一个新数组。可再由 `map` 等数组方法遍历取值。

代码块:

```js
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj).map(item => {
  console.log(item, obj[item]) // a 1  b 2  c 3
})
```

### Object.values()

`ES2017` 引入了跟 `Object.keys` 配套的 `Object.values()` ，此方法会返回当前对象所有**可遍历属性**的 `value` 值为一个新数组。

代码块:

```js
const obj = { a: 1, b: 2, c: 3 }
Object.values(obj).map(item => {
  console.log(item) // 1 2 3
})
```

### Object.entries()

`Object.entries()` 也是 `ES2017` 一起引入的，此方法会结合当前对象的 `key` `value` 为一个数组形式返回。

代码块:

```js
const obj = { a: 1, b: 2, c: 3 }
Object.entries(obj).map(item => {
  console.log(item) // ['a', 1] ['b', 2] ['c', 3]
})
```
