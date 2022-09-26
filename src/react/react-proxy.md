# React Proxy 代理配置

## 关于

由于浏览器的同源策略影响，我们无法进行不同域名下的数据请求。

但是我们可以通过 Proxy 来进行代理访问请求。

## 原理

Proxy 原理就是在本地开启一个微型服务器，我们项目请求链接到微型服务器上，然后再通过微型服务器转发到远程服务器。

因为服务器到服务器是没有同源影响的，所以这样可以有效解决跨域问题。

同时因为这个微型服务是开在我们本地的，和项目是处于同一端口上的，也是属于同源，所以不会触发跨域问题。

## 单地址

可以在 `package.json` 文件中添加以下代码块来进行代理：

```json
{
  "name": "basic_study",
  "version": "0.1.0",
  "private": true,
  // ... 省略配置
  "proxy": "http://localhost:5000" // 这里填写代理目标地址
}
```

> **文件修改完成之后需要重启项目，否则不生效！！！**

使用时可以直接填写项目地址请求：

```jsx
import axios from 'axios'
import React, { Component } from 'react'

export default class GetDataList extends Component {
  /**
   * @description 学习测试 axios 请求及 proxy 代理
   */
  getStudentData = async () => {
    // 代理服务和项目运行在同一地址，可直接使用 3000 端口
    let res = await axios('http://localhost:3000/students')
    console.log(res)
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击请求学生数据</button>
      </div>
    )
  }
}
```

但是这样配置只能有一个跨域请求地址，如果需要配置多个目标地址，这种写法就没办法满足了。

## 多地址（推荐）

在 `src` 目录下新建一个 `setupProxy.js` 文件，在文件中写入以下代码块：

```js
/**
 * @description Proxy 全局代理配置
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    // /api1 为 http://localhost:5000 别名，拦截请求检测到 /api1 会自动匹配此规则
    proxy('/api1', {
      target: 'http://localhost:5000', // 转发目标地址
      // 控制服务器收到的响应头中 Host 字段的值 true 为 目标地址，false 为 项目地址
      changeOrigin: true, // 默认值为 false，需改为 true
      pathRewrite: { '^/api1': '' } // 重写请求路径，将 /api1 替换为空串
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
    // ... 如果还有别的配置项，可以继续向下写
  )
}
```

`http-proxy-middleware` 模块在创建项目时已经被安装好，在 `package.json` 文件中的配置也是使用的这个模块，只是默认已经配置好了罢了。

> **文件创建完成之后需要重启项目，否则不生效！！！**

使用时需要在项目地址后添加 `/cname` 来请求：

```jsx
import axios from 'axios'
import React, { Component } from 'react'

export default class GetDataList extends Component {
  /**
   * @description 学习测试 axios 请求及 proxy 代理
   */
  getStudentData = async () => {
    // 项目地址之前添加 /api1
    let res = await axios('http://localhost:3000/api1/students')
    console.log(res)
  }
  getCarData = async () => {
    // 项目地址之前添加 /api2
    let res = await axios('http://localhost:3000/api2/cars')
    console.log(res)
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击请求学生数据</button>
        <button onClick={this.getCarData}>点击请求汽车数据</button>
      </div>
    )
  }
}
```
