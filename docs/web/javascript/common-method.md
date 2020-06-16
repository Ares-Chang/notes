---
title: 常用方法
---

## 数组排序并去重

- `new Set(arr)` ES6 数组去重

- `sort((a,b) => a-b)` 排序,正序

- `sort((a,b) => b-a)` 排序,反序

```js
let arr = [5,1,2,3,5,1,2]
let newArr = [...new Set(arr)].sort((a,b) => a-b)		// newArr => [1, 2, 3, 5]
```

## 数组降维

- `arr.flat(Infinity)` Infinity 代表全部降维为一维数组,可以替换为数字,替换为几降维为几维	

```js
let arr = [[1,2,[3,[4,[5,[6]]]]]]
let newArr = arr.flat(Infinity)		// newArr => [1, 2, 3, 4, 5, 6]
```

## 删除数组中的空白值

- 使用 `filter` 过滤

```js
let arr = ['1','','2','3','4','']
// 删除数组中的空字符串
let newArr = arr.filter(item => item.trim())	 // newArr => ["1", "2", "3", "4"]
```

## 对象转数组

- 使用 `Object.keys` 搭配 `map` 方法实现

```js
let obj = {1: 'one', 2: 'two', 3: 'three'}
// 对象转数组
let arr = Object.keys(obj).map(item => obj[item])		// arr => ["one", "two", "three"]
```

## 字符串数组转数字数组

- 使用 `map` 实现

```js
let arr = ['1','2',3,'4',5]
// 数组转换
let newArr = arr.map(Number)		// newArr => [1, 2, 3, 4, 5]
```

## 获取滚动到顶部距离(scrollTop)

- 为兼容 pc端、移动端、各种浏览器，使用以下方法

```js
let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
```

## 获取时间戳

- 获取当前时间戳

```js
Math.round(new Date() / 1000)
```

- 获取指定时间戳

```js
Math.round(new Date('2020-06-12 14:43:58') / 1000)
```

## 深拷贝

- `Object.assign()`

```js
const obj = { a: 1, b: 2 }
const newObj = {}
Object.assign(newObj, obj)
newObj.a = 2 // newObj => { a: 2, b: 2 }  obj => { a: 1, b: 2 }
```

> ps: 该方法深拷贝只针对简单类型,如为引用类型仍然只会拷贝路径

- `JSON.stringify` 和 `JSON.parse`

> 用 JSON.stringify 把对象转换成字符串，再用 JSON.parse 把字符串转换成新的对象

```js
let obj = { a: 1, b: 2, c: [1, 2, 3]}
let newObj = JSON.parse(JSON.stringify(obj))		// newObj => {a: 1, b: 2, c: [1, 2, 3]}
```

注意: 

1. 如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；
2. 如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；
3. 如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null

- 使用递归的方式实现深拷贝

```js
function _deepClone(source) {
  let target;
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
  len = len || 8;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
```