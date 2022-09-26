# JSX 基础语法

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
8. 若小写字母开头，则将该标签转为 html 中同名元素，若无同名元素，则报错。
9. 若大写字母开头，react 则渲染对应组件，若组件未定义，则报错。

例：

```jsx
function App() {
  const text = 'Hello,React!'
  return (
    // 虚拟 DOM 只能有一个根标签并且不需要引号
    <div className='App'>
      {' '}
      {/* 样式类名指定不要用 class，要使用 className。 */}
      <span style={{ fontSize: '24px' }}>{text}</span>{' '}
      {/* 内联样式要用对象形式写。 */}
      <br /> {/* 标签必须闭合 */}
      <p>这是一个小写字母</p>
      {/* <P>这里会报错，因为找不到对应的组件。</P> */}
    </div>
  )
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
    <div className='App'>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
```

## 创建组件

React 中提供了两种创建组件的方法，分别是**函数式组件**和**类式组件**。

### 函数式组件

简单一句话理解：函数式组件就是使用函数定义的组件。函数名就是组件名。

> 下列代码放入 index.js 中

```jsx
import React from 'react' // 引入 React 依赖
import ReactDOM from 'react-dom' // 引入虚拟 DOM 依赖

function App() {
  // 注册函数式组件，函数名就是组件名
  console.log(this) // 此处 this 是 undefined，因为处于严格模式中。
  return (
    // 函数式组件必须有返回值！！！
    <div className='App'>
      <h1>我是函数式组件。</h1>
    </div>
  )
}

// 渲染组件到页面
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* 使用函数式组件 */}
  </React.StrictMode>,
  document.getElementById('root')
)
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
import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
class App extends React.Component {
  // React 中使用类注册组件，必须继承 React.Component
  render() {
    // 类式组件必须包含 render，并且 render 必须有返回值。
    return <h2>我是类式组件</h2> // 另一种写法，只支持单独一行。
  }
}

// 渲染组件到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
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
    <div className='App'>
      <h1>今天天气很炎热，微风。</h1>
    </div>
  )
}
```

### 有状态组件

```jsx
class App extends React.Component {
  constructor(props) {
    super(props) // constructor 要求必须调用 super 继承。
    this.state = { isHost: true, wind: '微风' } // 设置 state 状态，必须为 {}。内部存放要使用的数据。
    this.changeWeather = this.changeWeather.bind(this) // 为函数重新指定 this，如果不重新指定内部 this 为 undefined
  }
  render() {
    const { isHost, wind } = this.state // 简写，方便下方调用。
    // 事件注册。
    return (
      <h2 onClick={this.changeWeather}>
        今天天气很{isHost ? '炎热' : '凉爽'},{wind}。
      </h2>
    )
  }

  changeWeather() {
    // console.log(this)  // 经 bind() 指向，应为 App 类，否则为 undefined。

    // 状态不可直接更改，要使用 setState 更改。
    // this.isHost = !this.isHost // 错误，数据更改，但是 React 不认可，无法刷新页面。
    const { isHost } = this.state
    this.setState({ isHost: !isHost }) // 正确写法，setState 是一种更新，不是替换！！！
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
  state = { isHost: true, wind: '微风' } // 类内赋值会自行注册初始化
  render() {
    const { isHost, wind } = this.state
    return (
      <h2 onClick={this.changeWeather}>
        今天天气很{isHost ? '炎热' : '凉爽'},{wind}
      </h2>
    )
  }

  changeWeather = () => {
    // 箭头函数内是没有 this 的 this 指向父级
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
        <li>姓名：{this.props.name}</li> {/* 使用传值 */}
        <li>性别：{this.props.sex}</li>
        <li>年龄：{this.props.age}</li>
      </ul>
    )
  }
}

ReactDOM.render(
  <App name='tom' sex='女' age={18} />, // 属性传值
  document.getElementById('root')
)
```

### 批量属性传值

如果存在多个属性需要传值，无法每个属性都写在组件上，就可以使用 `{...属性}` 的方法来进行传值。

```jsx {5,13,15}
class App extends React.Component {
  render() {
    return (
      <ul>
        <li>姓名：{this.props.name}</li> {/* 使用传值 */}
        <li>性别：{this.props.sex}</li>
        <li>年龄：{this.props.age}</li>
      </ul>
    )
  }
}

const params = { name: 'tom', sex: '女', age: 18 }
ReactDOM.render(
  <App {...params} />, // 批量属性传值
  document.getElementById('root')
)
```

> 注：`{...params}` 不是 js 中的解构赋值。只有在 React 和 babel 共存中可以使用。
>
> js 解析赋值无法直接对对象使用。

### 函数式 props

函数式组件中无法使用 `state` `refs`，但是可以使用 `props` 进行组件传值。

函数式组件中的传值会以参数的形式传递，并且所有属性都已经收集为一个对象。

```jsx
function App(props) {
  // 函数式传值
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
  name: PropTypes.string, // 16.x 之后写法，不是必须的
  sex: PropTypes.string.isRequired, // isRequired 后缀，标识这具值是必传的
  age: PropTypes.number.isRequired
}
App.defaultProps = {
  // 设置默认值，如果没有传值会使用默认值。
  name: 'Jack'
}

const params = { sex: '女', age: 18 }
ReactDOM.render(
  <App {...params} />, // 批量属性传值
  document.getElementById('root')
)
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
    name: PropTypes.string, // 16.x 版本需要单独安装 PropTypes
    sex: PropTypes.string.isRequired, // isRequired 后缀，标识这具值是必传的
    age: PropTypes.number.isRequired // number 传值
  }

  static defaultProps = {
    // 设置默认值，如果没有传值会使用默认值。
    name: 'Jack'
  }

  render() {
    return (
      <ul>
        <li>姓名：{this.props.name}</li> {/* 'Jack' */}
        <li>性别：{this.props.sex}</li> {/* '女' */}
        <li>年龄：{this.props.age}</li> {/* 18 */}
      </ul>
    )
  }
}

const params = { sex: '女', age: 18 }
ReactDOM.render(<App {...params} />, document.getElementById('root'))
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

## 获取组件 DOM (refs)

React 提倡少 `DOM` 操作，尽量不使用原生 `DOM`。

但是遇到必须要使用的情况，React 也提供了 `refs` 来解决这个问题。

`Refs` 分使用为三种：[~~字符串型~~](#字符串型)，[回调型](#回调型) 和 [`createRef`](#createRef) 同样官方也提示 [勿过度使用 Refs](https://react.docschina.org/docs/refs-and-the-dom.html#dont-overuse-refs)。

### 字符串型

~~字符串型~~在使用时只需要在标签上添加 `ref='name'` 来标识，React 就会自动收集在 `refs` 属性中。

但是这种方法官方**并不是很推荐**并[认为这是存在一些问题的](https://react.docschina.org/docs/refs-and-the-dom.html#legacy-api-string-refs)，可能会在未来哪个版本弃用这种方法。

```jsx
class App extends React.Component {
  showText = () => {
    // 通过 this.refs 调用
    const { input } = this.refs
    alert(input.value)
  }
  render() {
    return (
      <div>
        {/* 直接 ref='name' */}
        <input
          ref='input'
          onBlur={this.showText}
          type='text'
          placeholder='失去焦点弹窗输入内容！'
        />
      </div>
    )
  }
}
```

::: danger PS: 这段会报红!
Warning: A string ref, "input", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: [https://reactjs.org/link/strict-mode-string-ref](https://reactjs.org/link/strict-mode-string-ref)

**最新版本官方并不推荐使用 `String` 类型 `Refs`。**
:::

### 回调型

在官方弃用 `String` 型 `Refs` 后，推荐了一种新的使用方法，回调型 `Refs`。

回调型 `Refs`，字面意思，需要绑定一个回调函数来执行。

只需要给标签的 `ref` 属性绑定一个函数方法，React 在执行的过程中就会自动调用，并传入标签实例为参数。

```jsx
class App extends React.Component {
  showText = () => {
    // 在 this 中引出参数
    alert(this.input.value)
  }
  render() {
    return (
      <div>
        {/* React 在执行时会传入标签实例为参数（内联式注入） */}
        <input
          ref={e => (this.input = e)}
          onBlur={this.showText}
          type='text'
          placeholder='失去焦点弹窗输入内容！'
        />
      </div>
    )
  }
}
```

::: warning 关于回调型 Refs 说明：
如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 `DOM` 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 `ref` 并且设置新的。通过将 `ref` 的回调函数定义成 `class` 的绑定函数的方式可以避免上述问题，但是**大多数情况下它是无关紧要的**。
::: details Class 绑定式：

```js {5-7,12}
class App extends React.Component {
  showText = () => {
    alert(this.input.value)
  }
  setDome = e => {
    this.input = e
  }
  render() {
    return (
      <div>
        {/* class 绑定式 */}
        <input
          ref={this.setDome}
          onBlur={this.showText}
          type='text'
          placeholder='失去焦点弹窗输入内容！'
        />
      </div>
    )
  }
}
```

:::

### creatRef

回调型 `Refs` 现阶段有良好的兼容性，但是在 `React 16.3` 版本之后引入了 `React.createRef()` API。

相对的官方更为推荐的是这一种方法。

```jsx {2,4,10-15}
class App extends React.Component {
  myRef = React.createRef()
  showText = () => {
    alert(this.myRef.currenst.value)
  }
  render() {
    return (
      <div>
        {/* createRef 绑定式 */}
        <input
          ref={this.myRef}
          onBlur={this.showText}
          type='text'
          placeholder='失去焦点弹窗输入内容！'
        />
      </div>
    )
  }
}
```

::: warning 注意：
`createRef` 是挂载在 React 原型上的方法，调用时会产生一个存放 `ref` 的容器，但是这个容器是单人单用的，重复调用会被覆盖。
:::

## 事件处理

React 中的事件处理函数都是官方为了更好的兼容性自行封装的，需要区别原生的处理函数。

React 中把所有的处理函数都封装为 `onXxx`(注意大小写) 把 on 后面的单词首字母大写作为区分。

官方在自定义的事件处理函数中处理了大量兼容问题，其中的事件绑定都是使用的事件委托方式处理的(委托给了组件最外层元素)。

另外，上方也提到过，官方提倡 [勿过度使用 Refs](https://react.docschina.org/docs/refs-and-the-dom.html#dont-overuse-refs)。

和原生 DOM 相同，React 在部分自定义的事件处理函数中也传入了 `event` 对象，可以通过 `event.target` 来获取标签 DOM。

## 组件受控

React 中没有双向数据绑定的概念，但是 React 的中 `受控组件`，可以模拟双向绑定实现需求。

### 受控组件

[受控组件](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)，简单理解，就是把数据存放到 `state` 中，

数据实时更新，当用到的时候就是最新的值。类似 Vue 的双向数据绑定。

```jsx
class App extends React.Component {
  state = {
    userName: '',
    passWord: ''
  }

  handleButton = e => {
    e.preventDefault() // 阻止 form 跳转
    const { userName, passWord } = this.state
    console.log(`你输入的用户名为：${userName}，输入的密码为：${passWord}`)
  }

  render() {
    return (
      <form onSubmit={this.handleButton}>
        {/* 动态更改数据状态，只要用户触发，就会更改 */}
        用户名：
        <input
          onChange={e => this.setState({ userName: e.target.value })}
          type='text'
        />
        密码：
        <input
          onChange={e => this.setState({ passWord: e.target.value })}
          type='password'
        />
        <button>提交</button>
      </form>
    )
  }
}
```

### 非受控组件

[非受控组件](https://zh-hans.reactjs.org/docs/uncontrolled-components.html)就是不管数据再怎么改变，只有在我需要用到的时候才会去取回这个值。

但是这个方法还是需要用到 `Refs` 来实现，同样，大多数情况下官方并[不推荐这种做法](https://zh-hans.reactjs.org/docs/uncontrolled-components.html)。

```jsx
class App extends React.Component {
  handleButton = e => {
    e.preventDefault() // 阻止 form 跳转
    const { userName, passWord } = this // 只有点击 button 时都会获取用户输入数据
    console.log(
      `你输入的用户名为：${userName.value}，输入的密码为：${passWord.value}`
    )
  }

  render() {
    return (
      <form onSubmit={this.handleButton}>
        用户名：
        <input ref={e => (this.userName = e)} type='text' />
        密码：
        <input ref={e => (this.passWord = e)} type='password' />
        <button>提交</button>
      </form>
    )
  }
}
```

## 生命周期

生命周期是记录了一个组件从 挂载 -> 更新 -> 卸载 的完整活动流程。

`React 16` 是个大的版本更新，同样在 `React 16` 之后，生命周期也获得了更新。

官方删除了三个钩子，同时又新添加了两个钩子函数。

优化了整个 React 的生命周期运行效率。下列分别介绍了新旧的钩子及 Demo 演示。

### 生命周期（旧）

**生命周期的三个阶段的触发流程：**

1. 挂载阶段：由 `ReactDOM.render()` 触发 --- 初次渲染

   1. `constructor()`
   2. `componentWillMount()`
   3. `render()`
   4. `componentDidMount()` ===> 常用

2. 更新阶段：由组件内部 `this.setSate()` 或父组件 `render` 触发

   1. `shouldComponentUpdate()`
   2. `componentWillUpdate()`
   3. `render()`
   4. `componentDidUpdate()`

3. 卸载阶段：由 `ReactDOM.unmountComponentAtNode()` 触发

   1. `componentWillUnmount()` ===> 常用

上例缺少 `componentWillReceiveProps()` 下列会详细说明。

**生命周期图解：**

![](<./images/jsx-basic-study/react生命周期(旧).png>)

**代码块详解：**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

// 生命周期
class App extends React.Component {
  // 继承
  constructor(props) {
    /**
     * constructor 可以不写，如果写了必须调用 super()。
     */
    console.log('mount ---- constructor 调用了！')
    super(props)
    this.state = {
      count: 0 // 计数累加
    }
  }

  // 组件将要挂载的钩子
  componentWillMount() {
    /**
     * 这是一个旧的钩子函数，新版已被更名为 UNSAFE_componentWillMount。
     *
     * 组件挂载之前执行此钩子
     */
    console.log('mount ---- componentWillMount: 组件将要挂载了！')
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    /**
     * 常用！！！
     * 组件挂载完毕之后会执行此钩子。
     *
     * 一般在这个钩子中做一些初始化的事，
     * 例如：开启定时器、发送网络请求、订阅消息等...
     */
    console.log('mount ---- componentDidMount: 组件挂载完成了！')
  }

  // 控制组件是否更新的钩子
  shouldComponentUpdate() {
    /**
     * 每次需要更新之前都会触发这个钩子，
     * 只有返回为 true，才会触发 render 进行页面渲染。
     * 返回 false 不做处理。
     *
     * 这个钩子可以不写，不写的情况下默认返回 true。
     * 如果写了，必须要写返回值！！！
     */
    console.log(
      'update ---- shouldComponentUpdate: 我确认为真 render 才能渲染！'
    )
    return true
  }

  // 组件将要更新的钩子
  componentWillUpdate() {
    /**
     * 这是一个旧的钩子函数，新版已被更名为 UNSAFE_componentWillUpdate
     *
     * 组件更新之前会执行此钩子。
     */
    console.log('update ---- componentWillUpdate: 组件马上要更新了！')
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    /**
     * 组件更新完毕之后会执行此钩子。
     */
    console.log('update ---- componentDidUpdate: 组件更新完成了！')
  }

  // 初始化渲染、状态更新之后都会触发的钩子
  render() {
    // 常用！！！必须用！！！
    const { count } = this.state
    console.log(
      `${!count ? 'mount' : 'update'} ---- render: 每次需要渲染我都会触发！`
    )
    return (
      <div>
        <Children text='组件的生命周期' />
        <h2>当前求和：{count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          点我加1
        </button>
        <button onClick={this.unload}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }

  // 卸载组件的回调
  unload() {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    /**
     * 常用！！！
     * componentWillUnmount 会在组件卸载及销毁之前直接调用。
     * 可以在此方法中执行必要的清理操作，
     * 例如，清除 timer，取消网络请求或清除在 componentDidMount 中创建的订阅等。
     * componentWillUnmount 中不应调用 setState，因为该组件将永远不会重新渲染。
     * 组件实例卸载后，将永远不会再挂载它。
     */
    console.log('unload ---- componentWillUnmount: 组件将要卸载了！')
  }

  // 强制更新的回调
  force = () => {
    /**
     * 在不更改 state 中数据的情况下，强制重新渲染。
     * 不经过 shouldComponentUpdate 检验。
     */
    console.log('forceUpdate: 即将进入强制渲染流程！')
    this.forceUpdate()
  }
}

class Children extends React.Component {
  // props 更新会触发这个钩子
  componentWillReceiveProps(props) {
    /**
     * 这是一个旧的钩子函数，新版已被更名为 UNSAFE_componentWillReceiveProps
     *
     * 父组件更新 props 之后会触发 componentWillReceiveProps 钩子
     * 钩子会自带 props 参数，值为父组件传递的 props 属性
     *
     * 但是！这个钩子第一次挂载并不会生效，只有在父组件再次更新之后才会触发这个钩子！！！
     */
    console.log(
      'update ---- componentWillReceiveProps: 父组件更新了，我也想更新~'
    )
  }
  render() {
    return <h1>{this.props.text}</h1>
  }
}
```

### 生命周期（新）

`React 17.0.1` 在之前版本之上做了以下修改：

> 但是，以下修改官方表示是即将过时的，在新代码中应该[避免使用它们;](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

- 添加以下生命周期别名：

引入不安全生命周期的别名，将 `componentWillMount`，`componentWillReceiveProps`和 `componentWillUpdate` 三个钩子之前加上 `UNSAFE_` 前缀。

更名 `UNSAFE_componentWillMount`，`UNSAFE_componentWillReceiveProps`、 和`UNSAFE_componentWillUpdate` (未来版本会删除更名之前的钩子，只有新的“UNSAFE\_”生命周期名称将起作用。)

> 注意：因为新版的这三个生命周期的别名是不安全的，不可以在严格模式中直接使用，如果使用，控制台中会报一个错，会推荐使用别的安全的钩子函数替代。
>
> 虽然为这些生命周期添加 "UNSAFE*" 前缀，但是这里的 "UNSAFE*" **不是指安全性**，而是表示使用这些生命周期的代码在 React 的**未来版本**中更有可能出现 BUG，尤其是在启用异步渲染之后。

- 引入两个新的生命周期：

**静态的** `getDerivedStateFromProps` 和 `getSnapshotBeforeUpdate`，但是官方表示，这两个钩子函数的使用频率并不高。

其他具体详细更新点可以 [点击跳转官方文档，查看详细更新！及为何避免使用！](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

**新版触发流程：**

1. 初始化阶段：由 `ReactDOM.render()` 触发 --- 初次渲染

   1. `constructor()`
   2. `getDerivedStateFromProps()`
   3. `render()`
   4. `componentDidMount()` ===> 常用

2. 更新阶段：由组件内部 `this.setSate()` 或父组件 `render` 触发

   1. `getDerivedStateFromProps()`
   1. `shouldComponentUpdate()`
   1. `render()`
   1. `getSnapshotBeforeUpdate()`
   1. `componentDidUpdate()`

3. 卸载阶段：由 `ReactDOM.unmountComponentAtNode()` 触发

   1. `componentWillUnmount()` ===> 常用

**新版图解：**

![](<./images/jsx-basic-study/react生命周期(新).png>)

新版图解中隐藏了三个即将废弃的钩子，写入了两个新更新的钩子，并把卸载钩子单独成列，其他运行时并没有修改。

> 注：React 更新 DOM 和 refs 时我们并没有办法插手，在老版中也是有这个环节的只是因为没有应用场景，并没有体现。

**代码块详解：**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

// 生命周期
class App extends React.Component {
  // 继承
  constructor(props) {
    /**
     * constructor 可以不写，如果写了必须调用 super()。
     */
    console.log('mount ---- constructor 调用了！')
    super(props)
    this.state = {
      count: 0 // 计数累加
    }
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    /**
     * 组件挂载完毕之后会执行此钩子。
     */
    console.log('mount ---- componentDidMount: 组件挂载完成了！')
  }

  // 组件从 Props 中获取派生状态挂载完毕
  static getDerivedStateFromProps(props, state) {
    /**
     * 这个钩子并不常用，钩子有两个传值，props 为组件传递过来的值，state 为初始设置的值。
     * 这个钩子必须有返回值，返回值可以为 null 或者 状态对象
     *
     * 如果返回的是状态对象，那么 state 的值在任何时候都取决于 props。
     * 简单来说，如果这里返回了 props 状态值，那么以后 state 中存在的值就不能修改了！
     *
     * 官方表示派生状态会导致代码冗余，并使组件难以维护。慎用！！！
     */
    console.log(
      `${
        !state.count ? 'mount' : 'update'
      } ---- getDerivedStateFromProps: 组件派生状态挂载完毕！`
    )
    return props
  }

  // 控制组件是否更新的钩子
  shouldComponentUpdate() {
    /**
     * 每次需要更新之前都会触发这个钩子，
     * 只有返回为 true，才会触发 render 进行页面渲染。
     * 返回 false 不做处理。
     *
     * 这个钩子可以不写，不写的情况下默认返回 true。
     * 如果写了，必须要写返回值！！！
     */
    console.log(
      'update ---- shouldComponentUpdate: 我确认为真 render 才能渲染！'
    )
    return true
  }

  // 在更新之前获取快照
  getSnapshotBeforeUpdate(prevProps, prevState) {
    /**
     * getSnapshotBeforeUpdate() 会在最近一次渲染输出（提交到 DOM 节点）之前调用。
     * 钩子有两个传值，preProps 和 preState，值为更新修改之前的 props 和 state。
     * 钩子触发时必须有返回值，返回值可选为 null 或 快照(任何类型值都可以作为快照返回)。
     * 返回值将作为参数传递给 componentDidUpdate()
     *
     * 注：此场景使用并不见，使用几率不高。
     */
    console.log('update ---- getSnapshotBeforeUpdate: 在更新之前获取快照！')
    return null
  }

  // 组件更新完毕的钩子
  componentDidUpdate(prevProps, prevState, snapshot) {
    /**
     * 钩子有三个参数:
     * prevProps: 更新修改之前的 props
     * prevState: 更新修改之前的 state
     * snapshot: getSnapshotBeforeUpdate 传递过来的快照
     *
     * 组件更新完毕之后会执行此钩子。
     */
    console.log('update ---- componentDidUpdate: 组件更新完成了！')
  }

  // 初始化渲染、状态更新之后都会触发的钩子
  render() {
    const { count } = this.state
    console.log(
      `${!count ? 'mount' : 'update'} ---- render: 每次需要渲染我都会触发！`
    )
    return (
      <div>
        <h1>组件的生命周期</h1>
        <h2>当前求和：{count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          点我加1
        </button>
        <button onClick={this.unload}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }

  // 卸载组件的回调
  unload() {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    /**
     * componentWillUnmount 会在组件卸载及销毁之前直接调用。
     * 可以在此方法中执行必要的清理操作，
     * 例如，清除 timer，取消网络请求或清除在 componentDidMount 中创建的订阅等。
     * componentWillUnmount 中不应调用 setState，因为该组件将永远不会重新渲染。
     * 组件实例卸载后，将永远不会再挂载它。
     */
    console.log('unload ---- componentWillUnmount: 组件将要卸载了！')
  }

  // 强制更新的回调
  force = () => {
    /**
     * 在不更改 state 中数据的情况下，强制重新渲染。
     * 不经过 shouldComponentUpdate 检验。
     */
    console.log('forceUpdate: 即将进入强制渲染流程！')
    this.forceUpdate()
  }
}

export default App
```

React 新版本中更新的钩子并不常用，可以简单了解一下，具体可以参考 [官方文档](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)。
