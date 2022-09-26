# 常用方法

## 手机号加密

```js
let mobile = '17666666666'
mobile = mobile.substring(0, 3) + '****' + mobile.substring(8, 11)
```

## 数组排序并去重

- `new Set(arr)` ES6 数组去重

- `sort((a,b) => a-b)` 排序,正序

- `sort((a,b) => b-a)` 排序,反序

```js
let arr = [5, 1, 2, 3, 5, 1, 2]
let newArr = [...new Set(arr)].sort((a, b) => a - b) // newArr => [1, 2, 3, 5]
```

## 数组降维

- `arr.flat(Infinity)` Infinity 代表全部降维为一维数组,可以替换为数字,替换为几降维为几维

```js
let arr = [[1, 2, [3, [4, [5, [6]]]]]]
let newArr = arr.flat(Infinity) // newArr => [1, 2, 3, 4, 5, 6]
```

## 数组解构赋值应用

- 交换变量

```js
// 交换变量
;[a, b] = [b, a][(o.a, o.b)] = [o.b, o.a]
// 生成剩余数组
const [a, ...rest] = [...'asdf'] // a：'a'，rest: ["s", "d", "f"]
```

- 数组浅拷贝

```js
let arr = [1, 2, 3]
let newArr = [...arr] // newArr => [1,2,3]
// 对象同样适用
let obj = { a: 1, b: 2, c: 3 }
let newObj = { ...obj } // newArr => [a: 1,b: 2,c: 3]
```

- 数组合并

```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]
const arr = [...arr1, ...arr2, ...arr3] // arr => [1,2,3,4,5,6,7,8,9]
```

## 删除数组中的空白值

- 使用 `filter` 过滤

```js
let arr = ['1', '', '2', '3', '4', '']
// 删除数组中的空字符串
let newArr = arr.filter(item => item.trim()) // newArr => ["1", "2", "3", "4"]
```

## 对象转数组

- 使用 `Object.keys` 搭配 `map` 方法实现

```js
let obj = { 1: 'one', 2: 'two', 3: 'three' }
// 对象转数组
let arr = Object.keys(obj).map(item => obj[item]) // arr => ["one", "two", "three"]
```

## 字符串数组转数字数组

- 使用 `map` 实现

```js
let arr = ['1', '2', 3, '4', 5]
// 数组转换
let newArr = arr.map(Number) // newArr => [1, 2, 3, 4, 5]
```

## 数组取交差集

- 取交集

```js
const a = [0, 1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7, 8]
const newArray = [...new Set(a)].filter(item => b.includes(item))
// newArray => [3, 4, 5]
```

- 取差集

```js
const a = [0, 1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7, 8]
const newArray = [...new Set([...a, ...b])].filter(
  item => !b.includes(item) || !a.includes(item)
)
// newArray => [0, 1, 2, 6, 7, 8]
```

## 获取滚动到顶部距离(scrollTop)

- 为兼容 pc 端、移动端、各种浏览器，使用以下方法

```js
let scrollTop =
  document.documentElement.scrollTop ||
  window.pageYOffset ||
  document.body.scrollTop
```

## 获取时间戳

- 获取当前时间戳

```js
new Date().getTime()
```

- 获取指定时间戳

```js
new Date('2021-01-01 00:00:00').getTime()
```

## 获取当天 00:00:00 和 23:59:59 的时间戳

- 获取当前日期 ( 年/月/日 )

```js
console.log(new Date().toLocaleDateString())
```

- 获取当天 `00:00:00` 时间戳

```js
console.log(new Date(new Date().toLocaleDateString()).getTime())
```

- 获取当天 `23:59:59` 时间戳

```js
console.log(
  new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1
)
```

## 浅拷贝

- `Object.assign()`

```js
const obj = { a: 1, b: 2 }
const newObj = {}
Object.assign(newObj, obj)
newObj.a = 2 // newObj => { a: 2, b: 2 }  obj => { a: 1, b: 2 }
```

> ps: 该方法拷贝只针对简单类型,如为引用类型仍然只会拷贝路径

- 扩展运算符

```js
const obj = { a: 1, b: 2 }
const newObj = { ...obj } // {a: 1, b: 2}
```

## 深拷贝

- `JSON.stringify` 和 `JSON.parse`

> 用 JSON.stringify 把对象转换成字符串，再用 JSON.parse 把字符串转换成新的对象

```js
let obj = { a: 1, b: 2, c: [1, 2, 3] }
let newObj = JSON.parse(JSON.stringify(obj)) // newObj => {a: 1, b: 2, c: [1, 2, 3]}
```

注意:

1. 如果 obj 里有 RegExp、Error 对象，则序列化的结果将只得到空对象；
2. 如果 obj 里有函数，undefined，则序列化的结果会把函数或 undefined 丢失；
3. 如果 obj 里有 NaN、Infinity 和-Infinity，则序列化的结果会变成 null

- 使用递归的方式实现深拷贝

```js
function _deepClone(source) {
  let target
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = _deepClone(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}
```

## 生成随机字符串

```js
function randomString(len) {
  len = len || 8
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length
  var pwd = ''
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
```

## 数字转换为大写金额

- 用 JavaScript 将数字转换为大写金额

```js
var digitUppercase = function (n) {
  var fraction = ['角', '分']
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  var head = n < 0 ? '欠' : ''
  n = Math.abs(n)
  var s = ''
  for (var i = 0; i < fraction.length; i++) {
    if (i === fraction.length - 1) {
      // 末位小数进行四舍五入解决2.01等浮点数精度导致的小数丢失问题
      s += (
        digit[Math.round(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
      ).replace(/零./, '')
    } else {
      s += (
        digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
      ).replace(/零./, '')
    }
  }
  s = s || '整'
  n = Math.floor(n)
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = ''
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  )
}
```

## js 禁止移动端访问

- 通过 js 判断用户是 PC 还是移动端访问

```js
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  const hint = '本系统暂不支持移动端访问，请移至 PC 操作，谢谢配合！'
  document.getElementById('app').style.display = 'none'
  document.write(hint)
  alert(hint)
}
```
