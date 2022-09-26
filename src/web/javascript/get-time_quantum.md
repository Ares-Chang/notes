# 获取本周、本月、本季度时间段

## 需求

使用 js 计算出本周、本月、本季度的开始时间和结束时间。

## 解决方法

### 本周

```js
let now = new Date()
let nowDayOfWeek = now.getDay() || 7 // 今天本周的第几天 & now.getDay 周日返回 0
const start = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() - (nowDayOfWeek - 1)
)
const end = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + (7 - nowDayOfWeek)
)
console.log([start, end])
```

### 本月

```js
let now = new Date()
let nowMonth = now.getMonth() // 当前月
let nowYear = now.getFullYear() // 当前年
console.log([
  new Date(nowYear, nowMonth, 1),
  new Date(
    nowYear,
    nowMonth,
    new Date(nowYear, nowMonth + 1, 0).getDate() // 下个月初减一天
  )
])
```

### 本季度

```js
let now = new Date()
let nowMonth = now.getMonth() // 当前月
let nowYear = now.getFullYear() // 当前年
console.log([
  new Date(nowYear, nowMonth, 1),
  new Date(
    nowYear,
    nowMonth + 2, // 本月 + 2 === 本季度
    new Date(nowYear, nowMonth + 3, 0).getDate()
  )
])
```

> ps: 如果要把日期转换为数字字符串可以使用 `new Date('Mon Feb 22 2021 00:00:00 GMT+0800 (GMT+08:00)').toLocaleDateString()` 方法，如果需要时分秒，可以参考[JS Date 日期格式和字符串的相互转换](./js-newDate.md)
