# 原生 AJAX

## 基本格式

一个完整的 AJAX 请求包括四个步骤:

1. new 一个 xhr 对象
2. 设置请求信息
3. 设置回调函数，处理请求结果
4. 发送请求

```js
// 第一步： 新建一个XMLHttpRequest对象(xhr)
let xhr = new XMLHttpRequest()
// 第二步： 设置请求。 xhr.open(请求的方式, 请求的url地址);
xhr.open('get', 'common/getCurrentTime')
// 第三步：设置回调函数
xhr.onload = function () {
  // responseText 中保存了服务商返回的数据
  console.log('服务端返回数据:', xhr.responseText)
}
// 第四步： 发送请求。 xhr.send()
xhr.send()
```

## GET 请求

如果 get 请求需要带参数，就附加在请求的 url 地址后面。
例如：`localhost:3005/getapitest?a=1&b=2`

```js
// 第一步： 新建一个XMLHttpRequest对象(xhr)
let xhr = new XMLHttpRequest()
// 第二步： 设置请求。 xhr.open(请求的方式, 请求的url地址);
xhr.open('get', '/ajax.php?a=1&b=2')
// 第三步：设置回调函数
xhr.onload = function () {
  // responseText 中保存了服务商返回的数据
  console.log('服务端返回数据:', xhr.responseText)
}
// 第四步： 发送请求。 xhr.send()
xhr.send()
```

## POST 请求

请求 post 类型的接口时，有两点区别：

1. 参数写在 send 方法中
2. 要单独设置请求头。

```js
//1. 创建xhr对象
var xhr = new XMLHttpRequest()
//2. 初始化请求
xhr.open('post', 服务器上接口的地址)
//3. 设置请求头，固定写法
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
//4. 监听响应的回调函数
xhr.onload = function () {
  console.log(xhr.responseText)
}
//5. 发送请求
xhr.send('a=1&b=3') // 这里填写提交给服务器数据字符串
```

## 封装一个 AJAX

模仿 JQuery 的 $ajax() 封装一个原生 AJAX 请求

```js
function ajax(option) {
  // 如果 url 没传，应该拿 当前的地址
  // 当前地址怎么获取啊
  var url = option.url || window.location.href
  var data = option.data
  var type = option.type || 'GET'
  var success = option.success || null
  var error = option.error || null
  // 考虑到传入的type 可能会有 大小写不一致的情况。
  type = type.toUpperCase()
  // 1 考虑对数据的处理操作
  //    - 有数据
  //        将数据处理为 urlencoded 格式的
  //    - 没数据
  if (data.length !== 0) {
    var arr = []
    for (var key in data) {
      arr.push(key + '=' + data[key])
    }
    data = arr.join('&')
  } else {
    data = ''
  }
  // 2. 创建 XHR对象
  var xhr = new XMLHttpRequest()
  // 3. 调用 open 方法url
  // 如果是 get 请求，参数在 url 后面
  xhr.open(type, type === 'GET' ? url + '?' + data : url)
  // 如果是 post 请求 参数在 send 里面
  if (type === 'POST')
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  // 4. 调用send
  xhr.send(type === 'GET' ? null : data)
  // 5. 最难的异步 ，
  xhr.onreadystatechange = function () {
    // 我们已经知道了，响应体需要在 状态4的时候才是下载完成
    // this.readyState
    // 响应下载成功
    if (this.readyState === 4) {
      // 其实还有一个叫 状态码的东西需要判断，200 成功
      // 2开头代表成功, 3开头是重定向, 4开头代表客户端响应  5开头是响应错误
      // 并且 状态码正确
      if (this.status === 200) {
        // 根据响应头判断响应信息是否是 json 格式 的
        console.log(this.getResponseHeader('content-type').indexOf('json'))
        //
        if (this.getResponseHeader('content-type').indexOf('json') !== -1) {
          var result = JSON.parse(this.responseText)
          success && success(result)
        } else {
          var result = xhr.responseText
          success && success(result)
        }
      } else {
        error && error()
      }
    }
  }
}
```
