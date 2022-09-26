# JS Date 日期格式和字符串的相互转换

## 问题

业务需要：用户选择时间，给后台返回当前时间的字符串格式。

日期格式：`Sat Sep 12 2020 18:40:31 GMT+0800 (GMT+08:00)`

字符串格式：`"2020-09-12 18:40:41"`

## 解决方法

我们可以通过 `new Date()` 获取当前时间，可以使用自己封装的一个方法来实现格式转换。(现发现，new Date() 附有原生方法,汗 😓)

### 原生方法

- 转换为字符串
  - [`toLocaleDateString()`](https://www.runoob.com/jsref/jsref-tolocaledatestring.html): 根据本地时间格式，把 Date 对象的日期部分转换为字符串。
  - [`toTimeString()`](https://www.runoob.com/jsref/jsref-totimestring.html): 把 Date 对象的时间部分转换为字符串。

```js
let time = 'Sat Sep 12 2020 18:40:31 GMT+0800 (GMT+08:00)'
console.log(
  new Date(time).toLocaleDateString() +
    ' ' +
    new Date(time).toTimeString().slice(0, 8)
)
```

- 反向转换

```js
let time = '2020-09-12 18:40:31'
console.log(new Date(time))
```

### ~~转换为字符串~~

转换代码：

```js
var formatDate = function (date) {
  date = new Date(date)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  var d = date.getDate()
  d = d < 10 ? '0' + d : d
  var h = date.getHours()
  var minute = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = date.getSeconds()
  second = minute < 10 ? '0' + second : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}
```

使用：

```js
formatDate('Sat Sep 12 2020 18:40:31 GMT+0800 (GMT+08:00)') // "2020-09-12 18:40:31"
```

### ~~转换为时间格式~~

反向转换：

```js
var parserDate = function (date) {
  var t = Date.parse(date)
  if (!isNaN(t)) {
    return new Date(Date.parse(date.replace(/-/g, '/')))
  } else {
    return new Date()
  }
}
```

使用：

```js
parserDate('2020-09-12 18:40:41') // Sat Sep 12 2020 18:40:41 GMT+0800 (中国标准时间)
```

<br />

[阅读原文](https://blog.csdn.net/idomyway/article/details/78795673)
