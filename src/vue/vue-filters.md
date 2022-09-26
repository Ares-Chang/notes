# 注册全局 filter

## 关于

后台系统中出现手机号码通常需要加密展示，如果直接后台返回数据没有加密就需要我们自行处理。

但每个页面中都有这个方法很繁琐,所以封装为全局过滤器来使用。

> `Vue` 允许自定义[过滤器](https://cn.vuejs.org/v2/guide/filters.html#ad)，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 `v-bind` 表达式。

## 实现方法

### 全局过滤器

- 创建一个全局 `filter` 文件，导出要封装的方法

```js
/**
 * 加密手机号码
 */
export const privatePhone = function (val) {
  let mobile = val.toString()
  return mobile.substring(0, 3) + '****' + mobile.substring(8, 11)
}
```

- 在 `main.js` 中注册为全局 `filter`

```js
import * as filters from './uilt/filters' // 引入 filter

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]) // 插入过滤器名和对应方法
})
```

- 在文件中使用 `filter` 进行过滤

```vue
<template>
  <div>
    {{ 17666666666 | privatePhone }}
  </div>
</template>
```

### 局部过滤器

还可以在文件内部定义过滤器，局部过滤器优先级高于全局，会优先调用。

```vue
<template>
  <div>
    {{ 17666666666 | privatePhone }}
  </div>
</template>
<script>
export default {
  filters: {
    privatePhone(val) {
      let mobile = val.toString()
      return mobile.substring(0, 3) + '****' + mobile.substring(8, 11)
    }
  }
}
</script>
```
