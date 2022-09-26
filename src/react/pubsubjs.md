# PubSubJS 发布订阅机制

## 关于

`PubSub` 解释为 '发布订阅'。

'发布订阅' 的流程简单理解为 '发布信息 -> 订阅信息'。

刚好，发布订阅机制可以有效的解决 React 中兄弟组件通信困难的问题。

所以，[`PubSubJS`](https://github.com/mroderick/PubSubJS) 应运而生。

[`PubSubJS`](https://github.com/mroderick/PubSubJS) 是一个用 JavaScript 编写的基于主题的发布/订阅库。

## 使用

`PubSubJS` 可以直接使用 `npm/yarn` 下载依赖，运行以下命令：

```bash
npm install pubsub-js
# yarn add pubsub-js
```

`PubSubJS` 通过 `subscribe` 方法订阅消息，通过 `publish` 方法发布消息。

官方中写入了一小段代码块可以帮助理解：

```js
import PubSub from 'pubsub-js'
// CommonJS 使用以下方法引入
// const PubSub = require('pubsub-js');

// 创建一个函数来订阅主题
var mySubscriber = function (msg, data) {
  // msg 返回主题名称
  // data 返回主题发布信息内容
  console.log(msg, data)
}

// 将该函数添加到特定主题的订阅者列表中
// 主题订阅后会返回的一个 token，我们可以保留此 token 以便能够取消订阅
var token = PubSub.subscribe('MY TOPIC', mySubscriber)

// 发布信息
PubSub.publish('MY TOPIC', 'hello world!')

// 发布信息的同步方法，小心使用！！！
PubSub.publishSync('MY TOPIC', 'hello world!')
```

这只是 `PubSubJS` 的几个简单用法，如果想要详细了解可以查看 [PubSubJS GitHub 仓库](https://github.com/mroderick/PubSubJS)

## 案例

以下案例 `Header` 组件和 `List` 组件为兄弟关系，点击 `Header` 组件会给 `List` 组件传递信息。

**Header 组件:**

```jsx
import React, { Component } from 'react'
import { publish } from 'pubsub-js'

export default class Header extends Component {
  handleSearch = async () => {
    // 发布一个名为 Hello 的主题
    publish('Hello', '我是 Header 组件发送的问候！')
  }
  render() {
    return <button onClick={this.handleSearch}>点击给 List 发送信息</button>
  }
}
```

**List 组件:**

```jsx
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
  state = {
    Message: '' // 展示信息，存储 Header 发送的信息
  }

  componentDidMount() {
    // 订阅名为 Hello 的消息主题
    this.token = PubSub.subscribe('Hello', (msg, data) => {
      this.setState({
        Message: data
      })
    })
  }

  // 在组件销毁之前取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { Message } = this.state
    return <h2>{Message}</h2>
  }
}
```
