# 日期格式化 YYMMDD 改为 YY-MM-DD

## 问题

近期处理微信统计数据时发现，微信服务器返回的时间格式都是 YYMMDD 格式的。

如：

```js
data: {
  time: '20180920' // ==> 2018/09/20
}
```

这样并不利于展示，需要我们自行处理为需要的格式。

## 解决方法

使用复杂一点的办法，可以使用 `slice` 进行数据分割再拼接。

但是，懒惰的力量驱使着我，不要这样做，太麻烦了，多累啊！

so，我们换一种方法，使用正则来解决这个问题。

`String` 有一个 [`replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 方法，可以替换匹配的文字，刚好这个方法是支持正则表达式的。

代码块：

```js
let data = {
  time: '20180920'
}
console.log(data.time.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3')) // 2018-09-20
```

完美解决，一行搞定。

由于 `replace` 的特殊性，第二个参数可以使用一些字符串做为参数。

具体内容可参照 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E4%BD%BF%E7%94%A8%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0) 文档内有详细说明。
