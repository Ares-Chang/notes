---
title: 常用方法
---

## 删除数组中的空白值

- 使用 `filter` 过滤

```js
var arr = ['1','','2','3','4','']
// 删除数组中的空字符串
var newArr = arr.filter(item => item.trim())	 // newArr => ["1", "2", "3", "4"]
```

## 对象转数组

- 使用 `Object.keys` 搭配 `map` 方法实现

```js
var obj = {1: 'one', 2: 'two', 3: 'three'}
// 对象转数组
var arr = Object.keys(obj).map(item => obj[item])		// arr => ["one", "two", "three"]
```

## 字符串数组转数字数组

- 使用 `map` 实现

```js
var arr = ['1','2',3,'4',5]
// 数组转换
var newArr = arr.map(Number)		// newArr => [1, 2, 3, 4, 5]
```

## 获取滚动到顶部距离(scrollTop)

- 为兼容 pc端、移动端、各种浏览器，使用以下方法

```js
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
```