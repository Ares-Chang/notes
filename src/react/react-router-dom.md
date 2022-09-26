# React Router DOM 使用

## 关于

React 的路由配置学习。

React 路由分为两个版本：

- WEB 项目使用 [react-router-dom](https://reactrouter.com/web/guides/quick-start)

- Native 项目使用 [react-router-native](https://reactrouter.com/native/guides/quick-start)

正如官网说明：

> 组件是 React 强大的声明式编程模型的核心。React Router 是一组**导航组件**。

## 安装

可以直接通过 `npm/yarn` 来进行快速安装：

```shell
npm install react-router-dom
# yarn add react-router-dom
```

## 使用

1. 需要在最外层包裹 `BrowserRouter/HashRouter` 来声明已经被路由包含(可以直接包裹在 `<App>` 层)。

```jsx {11-13}
/**
 * index.js 入口文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <App {...params} />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

2. 把以下代码放置在 `App.js` 文件中

```jsx {2,3,11-46,48-56,62-79}
import React from 'react'
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'
import qs from 'querystring' // URL 参数拉拼接工具库

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 这些 class 是 bootstrap 类名 */}
        <div className='list-group' style={{ display: 'flex' }}>
          {/**
           * Link 区别与 NavLink，两者功能一致，
           * 但是 NavLink 在选中时会自动添加一个 active 类名，
           * 并可按需更改，可做为选中类名自定义样式
           */}
          {/* <Link className="list-group-item" to="a/1"> A </Link> */}
          {/**
           * NavLink 默认添加 active 类名，可通过 activeClassName 自定义类名。
           * 设置 strict 属性，可以开启路由严格匹配模式，默认不开启。
           */}
          {/* params 传值 */}
          <NavLink
            activeClassName='selected'
            className='list-group-item'
            to='/a/1'>
            A
          </NavLink>
          {/* query 传值 */}
          <NavLink
            activeClassName='selected'
            className='list-group-item'
            to='/b?id=2'>
            B
          </NavLink>
          {/* state 传值 */}
          <NavLink
            activeClassName='selected'
            className='list-group-item'
            to={{
              pathname: '/c',
              state: {
                id: 3
              }
            }}>
            C
          </NavLink>
        </div>
        {/* 路由注册 */}
        <Switch>
          {/* component 包裹组件，组件内可以接收到路由传值 */}
          <Route path='/a/:id' component={A} /> {/* params 传值 */}
          <Route path='/b' component={B} />
          <Route path='/c' component={C} />
          {/* 兜底重定向，查无路由跳转到首页 */}
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

/* 函数组件注册，props 通过参数传入，类式组件可直接通过 this.props 调用 */
function A(props) {
  console.log('params 传值：', props.match.params)
  return <h2>我的 A 组件</h2>
}
function B(props) {
  console.log('query 传值：', qs.parse(props.location.search.slice(1)))
  return <h2>我的 B 组件</h2>
}
function C(props) {
  /**
   * 由于 state 是获取缓存中的数据，单纯刷新数据更新可能不及时，
   * 需要深度刷新(ctrl + F5)清除缓存才能体现
   */
  console.log('state 传值：', props.location.state)
  return <h2>我的 C 组件</h2>
}

export default App
```

方法类路由跳转等功能都封装在了 `props.history` 属性中，如需了解可自行查看。

以上示例多为常用功能，其余功能如需了解可以查看 [React Router 官方文档](https://reactrouter.com/web/guides/quick-start)
