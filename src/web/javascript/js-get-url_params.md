# 快速获取 URL 中的参数

## 关于

以前想要获取 `url` 中的参数都是使用 `split` 进行分割，一层一层嵌套极其繁琐。

最近看到一篇文章，讲解封装 `split` 和正则解法，文章没什么意思。

但是自古评论出人才，评论里提出了一条我没有走过的路。

::: danger 注意：
以下方法存在版本要求，不兼容全系 IE 浏览器！！！
:::

## 实现

[`URL` 对象](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL)有一个 `searchParams` 属性，提供了一些处理 URL 的实用方法。

> PS: `searchParams` 也可以通过 [new URLSearchParams()](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 直接生成。

通过 `window.location` 获取的对象可以使用 `new URL()` 进行再次转换，或者通过 `new URLSearchParams()` 获取参数对象。

如果想要获取字符串中的参数可以直接通过 `new URL()` 来转变为 `URL 对象`。

```js
// 将字符串内容转换为 URL 对象，注意此处必须为有效链接，否则会抛出一个 TypeError
const _URL = new URL('https://www.baidu.com?a=1&b=2')

// 为演示，统一 URL 对象，正常可以使用 new URLSearchParams(window.location.search)
const _LOCATION = new URL(window.location)
```

通过 [`Object.fromEntries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) 转换为对象形式。

```js
// 获取 URL 对象的 searchParams
Object.fromEntries(new URL('https://www.baidu.com?a=1&b=2').searchParams) // {a: '1', b: '2'}

// 请自行模拟网址
// URLSearchParams 构造函数不会解析完整 URL，但是如果字符串起始位置有 ? 的话会被去除。
Object.fromEntries(new URLSearchParams(window.location.search)) // {a: '1', b: '2'}
```

此方法相较原来的 `split` 分割简单了很多，但是 `new URL` 无法兼容全系 IE 浏览器，如果要做兼容的话，还是换条路吧。

## 扩展

`new URLSearchParams` 还提供了很多实用的方法：

```js
// URLSearchParams 构造函数不会解析完整 URL，但是如果字符串起始位置有 ? 的话会被去除。
console.log(new URLSearchParams('https://www.baidu.com?a=1&b=2'))
// https://www.baidu.com?a 1
// b 2

const _URLP = new URLSearchParams('?a=1&b=2') // 返回一个 URLSearchParams 对象

// 遍历 URLSearchParams 属性值，_URLP 同 _URLP.entries() 实现效果相同
for (const [key, value] of _URLP) {
  console.log(key, value)
}
// a 1
// b 2

// 插入一个参数及值
_URLP.append('c', 3)

// 删除指定参数及值
_URLP.delete('b')

// 返回一个 iterator 可以遍历所有键值对
_URLP.entries()

// 获取指定搜索参数的第一个值
_URLP.get('a') // '1'

// 获取指定搜索参数的所有值，返回是一个数组。(如果值重复)
_URLP.getAll('a') // ['1']

// 返回一个 Boolean 判别是否存在此参数
_URLP.has('a') // true

// 返回 iterator 此对象包含了键/值对的所有键名。
_URLP.keys()

// 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值
_URLP.set('')

// 按键名排序
_URLP.sort()

// 返回搜索参数组成的字符串，可直接使用在URL上
_URLP.toString() // 'a=1&c=3'

// 返回iterator 此对象包含了键/值对的所有值。
_URLP.values()
```
