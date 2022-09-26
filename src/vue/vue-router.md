# vue 路由跳转

## 关于

记录 `vue` 跳转的各种用法及使用场景（虽然不常用~）

## 详解

`vue` 项目内进行路由跳转分为标签和方法跳转。

### 标签跳转

- `router-link`

`<router-link to='需要跳转到的页面的路径'>`

浏览器在解析时， 会将它解析成一个类似于 `<a>` 标签的功能组件。

> 注意：路由地址内如果从 `/` 开始，就会从根路由查寻，如果不包含 `/` 则从当前路由开始查寻。
>
> 推荐为所有路由添加一个 name ，更为推荐 name 跳转

```vue
<template>
  <div>
    <router-link to="home">router-link 跳转</router-link>
    <router-link :to="{ name: 'home' }">name 跳转</router-link>
    <router-link :to="{ path: '/home' }">path 跳转</router-link>
  </div>
</template>
```

`router-link` 两种写法都是支持路由传参的。

```vue
<template>
  <div>
    <router-link :to="{ path: 'home', query: { id: 1 } }"
      >query 传参</router-link
    >
    <router-link :to="{ name: 'home', query: { id: 1 } }"
      >query 传参</router-link
    >
    <router-link :to="{ name: 'home', params: { id: 1 } }"
      >params 传参</router-link
    >
  </div>
</template>
```

> 所有 `params` 传参方式只支持 `name` 方式，不支持 `path` 方式。

### 方法跳转

- `$router.push()`

```js
this.$router.push('home')
this.$router.push({ name: 'home' })
this.$router.push({ path: '/home' })
```

- `$router.replace()`

```js
this.$router.replace('home')
this.$router.replace({ name: 'home' })
this.$router.replace({ path: '/home' })
```

- `$router.go(n)`

`n` 为参数，可以填写正负整数，n 为正整数页面向前进，n 为负整数页面向后退。

```js
this.$router.go(-1) // 后退
this.$router.go(1) // 前进
```

### 路由传参

所有的跳转方法都是可以进行路由传参的。

传参方式分为 `query` 和 `params` 两种方式

`query` 类似 `get` 方法，跳转之后会在页面 `url` 后面拼接参数。类似 `?id=1`，不建议传递保密信息。

`params` 类似 `post` 方法，跳转之后参数不会拼接，但是刷新页面参数会丢失。

> 再次提醒：`params` 方式不支持 `path` 传参，只支持 `name` 方式传参

```js
// push 的 query 方式
this.$router.push({ name: 'home', query: { id: '1' } })
this.$router.push({ path: '/home', query: { id: '1' } })

// push 的 params 方式
this.$router.push({ name: 'home', params: { id: '1' } })

// replace 的 query 方式
this.$router.replace({ name: 'home', query: { id: '1' } })
this.$router.replace({ path: '/home', query: { id: '1' } })

// replace 的 params 方式
this.$router.replace({ name: 'home', params: { id: '1' } })
```
