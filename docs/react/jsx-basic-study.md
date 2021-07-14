---
title: JSX 基础语法
sidebarDepth: 2
autoPrev: react-staging
---

## 关于

JSX 就是在 JS 中使用标签的一种语法。

React 就是使用 JSX 来替代常规的 JavaScript 使用的。

## 基础语法

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
```

## 循环列表

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
```

## 创建组件

React 中提供了两种创建组件的方法，分别是**函数式组件**和**类式组件**。

### 函数式组件

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

### 类式组件

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

## 组件状态 (state)

React 中组件分为 [简单组件](https://react.docschina.org/) 和复杂组件(又称[有状态组件](https://react.docschina.org/))，[点击跳转官网](https://react.docschina.org/)下划可以看到实例。

简单组件可以理解为静态内容，不可以通过 js 操作动态更改内容。

有状态组件可以通过状态来动态更改展示的内容。

### 简单组件

```jsx
function App() {
  return (
    <div className="App">
      <h1>今天天气很炎热，微风。</h1>
    </div>
  )
}
```

### 有状态组件

```jsx
class App extends React.Component {
  constructor(props) {
    super(props)  // constructor 要求必须调用 super 继承。
    this.state = { isHost: true, wind: '微风' } // 设置 state 状态，必须为 {}。内部存放要使用的数据。
    this.changeWeather = this.changeWeather.bind(this)  // 为函数重新指定 this，如果不重新指定内部 this 为 undefined
  }
  render() {
    const { isHost, wind } = this.state // 简写，方便下方调用。
    // 事件注册。
    return <h2 onClick={this.changeWeather}>今天天气很{isHost ? "炎热" : "凉爽"},{wind}。</h2>
  }

  changeWeather() {
    // console.log(this)  // 经 bind() 指向，应为 App 类，否则为 undefined。
    
    // 状态不可直接更改，要使用 setState 更改。
    // this.isHost = !this.isHost // 错误，数据更改，但是 React 不认可，无法刷新页面。
    const { isHost } = this.state
    this.setState({ isHost: !isHost })  // 正确写法，setState 是一种更新，不是替换！！！
  }
}
```

有状态组件因为需要使用方法和继承来实现数据更新，所以多为类组件注册。

相反简单组件因为不需要更新数据，多为函数组件注册。

### 有状态组件简写版

上例代码是标准的有状态组件更新方法。

但是正常开发肯定不会这样做，因为会产生大量无用代码冗余。

我们可以通过类的初始化和 `es6` 的箭头函数来精简代码。

简写版代码块：

```jsx
class App extends React.Component {
  state = { isHost: true, wind: '微风' }  // 类内赋值会自行注册初始化
  render() {
    const { isHost, wind } = this.state
    return <h2 onClick={this.changeWeather}>今天天气很{isHost ? "炎热" : "凉爽"},{wind}</h2>
  }

  changeWeather = () => { // 箭头函数内是没有 this 的 this 指向父级
    const { isHost } = this.state
    this.setState({ isHost: !isHost })
  }
}
```

## 组件传值 (props)

`props` 组件传值，React 中可以直接在组件实例上写 `key={value}` 属性，组件内部有 `props` 属性自动接收。

:::warning 注意：
`props` 是只读的，不能通过代码进行修改！
:::

### 属性传值

```jsx {3,6,15}
class App extends React.Component {
  render() {
    // this.props.age = age + 1;  // error: props 是只读的，不能通过代码修改！
    return (
      <ul>
        <li>姓名：{this.props.name}</li>  {/* 使用传值 */}
        <li>性别：{this.props.sex}</li>
        <li>年龄：{this.props.age}</li>
      </ul>
    )
  }
}

ReactDOM.render(
  <App name='tom' sex='女' age={18} />, // 属性传值
  document.getElementById('root')
);
```

### 批量属性传值

如果存在多个属性需要传值，无法每个属性都写在组件上，就可以使用 `{...属性}` 的方法来进行传值。

```jsx {5,13,15}
class App extends React.Component {
  render() {
    return (
      <ul>
        <li>姓名：{this.props.name}</li>  {/* 使用传值 */}
        <li>性别：{this.props.sex}</li>
        <li>年龄：{this.props.age}</li>
      </ul>
    )
  }
}

const params = { name: 'tom', sex: '女', age: 18 };
ReactDOM.render(
  <App {...params} />, // 批量属性传值
  document.getElementById('root')
);
```

> 注：`{...params}` 不是 js 中的解构赋值。只有在 React 和 babel 共存中可以使用。
> 
> js 解析赋值无法直接对对象使用。

### 函数式 props

函数式组件中无法使用 `state` `refs`，但是可以使用 `props` 进行组件传值。

函数式组件中的传值会以参数的形式传递，并且所有属性都已经收集为一个对象。

```jsx
function App(props) { // 函数式传值
  return (
    <ul>
      <li>姓名：{props.name}</li>
      <li>性别：{props.sex}</li>
      <li>年龄：{props.age}</li>
    </ul>
  )
}

// Prop 验证和设置默认值
App.propTypes = {
  name: PropTypes.string,  // 16.x 之后写法，不是必须的
  sex: PropTypes.string.isRequired,  // isRequired 后缀，标识这具值是必传的
  age: PropTypes.number.isRequired
}
App.defaultProps = { // 设置默认值，如果没有传值会使用默认值。
  name: 'Jack'
}

const params = { sex: '女', age: 18 }
ReactDOM.render(
  <App {...params} />, // 批量属性传值
  document.getElementById('root')
);
```

> Prop 验证和设置默认值也是可以使用，只不过需要换一种写法。

## Prop 验证

在组件传值的时候规定需要什么类型的值，如果不满足则会报错警告。

为了定制 `prop` 验证方式，可以在原型上添加一个 `propTypes` 属性。

如果存在这个属性，组件在赋值时会进行基础类型验证。

### 使用说明

`React 15.x` 版本之前 `propTypes` 属性都是挂载在 `React` 对象上的，

但是把 `propTypes` 挂载在 `React` 上造成了 `React` 对象体积过大，并且这个属性也不是必须的并且常用的。

所以 `React 16.x` 之后，`propTypes` 进行了分包处理。

如果要使用，需要单独安装 `prop-types`。

### 安装

通过 `npm/yarn` 安装依赖包

```shell
npm install prop-types
# yarn add prop-types
```

### 使用

```jsx
class App extends React.Component {
  static propTypes = {
    // name: React.propTypes.string, // 15.x 版本使用这种方法进行验证
    name: PropTypes.string,  // 16.x 版本需要单独安装 PropTypes
    sex: PropTypes.string.isRequired,  // isRequired 后缀，标识这具值是必传的
    age: PropTypes.number.isRequired  // number 传值
  }
  
  static defaultProps = { // 设置默认值，如果没有传值会使用默认值。
    name: 'Jack'
  }

  render() {
    return (
      <ul>
        <li>姓名：{this.props.name}</li>  {/* 'Jack' */}
        <li>性别：{this.props.sex}</li>  {/* '女' */}
        <li>年龄：{this.props.age}</li>  {/* 18 */}
      </ul>
    )
  }
}

const params = { sex: '女', age: 18 };
ReactDOM.render(
  <App {...params} />,
  document.getElementById('root')
);
```

### 验证类型

`PropTypes` 提供了基础类型验证，并且可以通过 `isRequired` 后缀来确认这个值是否必传。

```jsx
static propTypes = {
  string: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  object: PropTypes.object.isRequired,
  array: PropTypes.array.isRequired,
}
```