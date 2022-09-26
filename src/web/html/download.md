# 图片文件下载

## 需求

浏览器需要实现点击下载，首先想到的肯定是用 `<a>` 标签来嵌套实现。

但是实验过后却发现不是那么如意，我们使用图片来验证，点击之后却发现只是打开了图片，并没有产生下载步骤。

## 实现

### 方法一（需后端配合）：

可以通过后端接口来通知浏览器 `header` 信息，来实现下载。

```js
header('Content-type: image/jpeg')
header("Content-Disposition: attachment; filename='download.jpg'")
```

当直接访问的某个文件时，如果该文件是二进制等浏览器无法解析的文件，浏览器才会下载该文件，但如果浏览器可以自己解析该文件，则它会打开该文件并以自己的方式呈现出来，而不会下载，此时就需要设置消息响应头，告诉浏览器该文件需要下载而不是简单的打开。

然而在现在前后端分离的大趋势下，这种事情还跑去求后端就太累了。万事靠自己！

### 方法二：

我们希望点击"下载"链接下载图片而不是浏览，直接增加一个 `download` 属性就可以：

```html
<a href="./test.jpg" download="test_name.jpg">下载</a>
```

`download` 属性可以自定义下载名称，但这种方法只能下载同源的文件。

如果想要模拟，可以在 `vscode` 中下载个插件 `Live Server` 启用本地服务模拟。

### 方法三：

使用 `canvas` 下载跨域网站的图片

```js
// 调用方式
// 参数一： src
// 参数二： 图片名称，可选
export const downloadImage = (src, name) => {
  const image = new Image()
  // 解决跨域 canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous')
  image.onload = function () {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, image.width, image.height)
    const url = canvas.toDataURL('image/png')
    // 生成一个 a 标签
    const a = document.createElement('a')
    // 创建一个点击事件
    const event = new MouseEvent('click')
    // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
    a.download = name || '图片'
    // 将生成的 URL 设置为 a.href 属性
    a.href = url
    // 触发 a 的点击事件
    a.dispatchEvent(event)
  }
  image.src = src
}
```

[阅读原文](https://segmentfault.com/a/1190000016941409)

## 扩展：借助 HTML5 Blob 实现文本信息文件下载

原理简单理解为：把文本或者 js 字符串信息借肋 `Blob` 转换成二进制，然后通过 `<a>` 标签的 `download` 属性实现下载。

```js
let eleTextarea = [1, 2, 3, 4, 5]
let eleButton = document.querySelector('button')

// 下载文件方法
let funDownload = function (content, filename) {
  let eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'
  // 字符内容转变成blob地址
  let blob = new Blob([content])
  eleLink.href = URL.createObjectURL(blob)
  // 触发点击
  document.body.appendChild(eleLink)
  eleLink.click()
  // 然后移除
  document.body.removeChild(eleLink)
}

if ('download' in document.createElement('a')) {
  // 作为test.html文件下载
  eleButton.addEventListener('click', function () {
    funDownload(eleTextarea, 'test')
  })
} else {
  eleButton.onclick = function () {
    alert('浏览器不支持')
  }
}
```

其中，`content` 指需要下载的文本或字符串内容，`filename` 指下载到系统中的文件名称。

<br/>

参考自[张鑫旭](https://www.zhangxinxu.com/)大神的[JS 前端创建 html 或 json 文件并浏览器导出下载](https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/)
