---
title: React 基础学习
sidebarDepth: 2
---

## 脚手架安装

**须知，React 脚手架基于 Node.js 请确保安装环境在线。**

在终端中输入以下命令安装官方脚手架：

```shell
npm install -g create-react-app
# yarn add create-react-app -g
```

安装完成之后执行：

```shell
create-react-app -V
# 成功输出版本号
```

查看是否安装成功

## 项目创建

脚手架安装成功之后执行以下命令创建项目：

```shell
create-react-app hello_world
```

项目创建成功启动项目：

```shell
cd hello_world

yarn start
```

启动成功会占用 `3000` 端口，如果端口已被占用，会提示你:

```shell
? Something is already running on port 3000.
# ? 端口3000上已经运行了一些东西。

Would you like to run the app on another port instead? » (Y/n)
# 你想在另一个端口上运行应用程序吗? » (Y/n)
```

输入 `Y` 之后会延续占用 `3001`,`3002` ....

## JSX

JSX 就是在 JS 中使用标签的一种语法。

React 就是使用 JSX 来替代常规的 JavaScript 使用的。

### 基础语法

1. 定义虚拟 DOM 时，不要写引号。（使用标签时）
2. 标签中使用 JS 表达式时要用 `{}` 包裹。
3. 样式类名指定不要用 `class`，要使用 `className`。
4. 内联样式要用对象形式写。
5. 虚拟 DOM 只能有一个根标签。
6. 标签必须闭合
7. 标签首字母
  1. 若小写字母开头，则将该标签转为 html 中同名元素，若无同名元素，则报错。
  2. 若大写字母开头，react 则渲染对应组件，若组件未定义，则报错。

例：

```jsx
function App() {
  const text = 'Hello,React!';
  return (
    // 虚拟 DOM 只能有一个根标签并且不需要引号
    <div className="App"> {/* 样式类名指定不要用 class，要使用 className。 */}
      <span style={{ fontSize: '24px' }}>{text}</span> {/* 内联样式要用对象形式写。 */}
      <br /> {/* 标签必须闭合 */}
      <p>这是一个小写字母</p>
      {/* <P>这里会报错，因为找不到对应的组件。</P> */}
    </div>
  );
}

export default App;
```

### 循环列表

要实现循环数据到页面中，Vue 中直接使用 `v-for` 就可以实现。

但是在 `React` 中就需要自己动手了。

::: warning 注意:
标签内 `{}` 中只可以使用 js **表达式**，不能直接写入 js 代码。

因此 `for` 循环是不能直接使用的。
:::

```jsx
function App() {
  // 循环列表
  const dataList = ['Angular', 'React', 'Vue']
  return (
    <div className="App">
      <ul>
        {dataList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
```

### 创建组件

React 中提供了两种创建组件的方法，分别是**函数式组件**和**类式组件**。

#### 函数式组件

简单一句话理解：函数式组件就是使用函数定义的组件。函数名就是组件名。

> 下列代码放入 index.js 中

```jsx
import React from 'react';	// 引入 React 依赖
import ReactDOM from 'react-dom';	// 引入虚拟 DOM 依赖

function App() {	// 注册函数式组件，函数名就是组件名
  console.log(this);  // 此处 this 是 undefined，因为处于严格模式中。
  return (	// 函数式组件必须有返回值！！！
    <div className="App">
      <h1>我是函数式组件。</h1>
    </div>
  )
}

// 渲染组件到页面
ReactDOM.render(
  <React.StrictMode>
    <App />	{/* 使用函数式组件 */}
  </React.StrictMode>,
  document.getElementById('root')
);
/**
 * 执行了 ReactDom.render(<App />, document.getElementById('root')) 之后，发生了什么？
 *  1. React 解析组件标签，找到 App 组件。
 *  2. 发现组件是函数定义的，随后调用该函数，将返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中。
 */
```

#### 类式组件

同理：类式组件就是用类注册的组件。类名就是组件名。

> 下列代码放入 index.js 中

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

// 类式组件
class App extends React.Component { // React 中使用类注册组件，必须继承 React.Component
  render() {  // 类式组件必须包含 render，并且 render 必须有返回值。
    return <h2>我是类式组件</h2>	// 另一种写法，只支持单独一行。
  }
}

// 渲染组件到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/**
 * 执行了 ReactDom.render(<App />, document.getElementById('root')) 之后，发生了什么？
 *  1. React 解析组件标签，找到 App 组件。
 *  2. 发现组件是类定义的，随后 new 出现该类的实例。并通过该实例调用到原型上的 render 方法。
 *  3. 将 render 返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中。
 */
```
