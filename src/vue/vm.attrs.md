# 组件属性透传

## 需求

很多时候，我们使用一些 `UI` 组件库的时候，需要进行二次封装，来满足我们的业务需求。

或者我们需要将父元素的一些数据传入到子元素方便应用展示

## 实现方法

### Props

props 可以用来做组件传值，需要在父组件传入，子组件用 props 接取参数，但是 props 传值方法是单向数据流的

#### 使用方法

```vue
<template>
  <div class="father">
    我是父组件
    <son :code="'我是子组件'" />
  </div>
</template>
<script>
import son from './son'
export default {
  components: {
    son
  }
}
</script>
```

```vue
<template>
  <div class="son">
    {{ code }}
  </div>
</template>

<script>
export default {
  props: ['code'] // 直接使用
}
</script>

<script>
export default {
  props: {
    // 传入验证
    code: {
      type: String, // 判断数据类型
      required: true // 判断是否必传
    }
  }
}
</script>
```

### vm.$attrs

官方定义：

> 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件——在创建高级别的组件时非常有用。

可以简单理解：调用一个组件的时候传入属性 (class 和 style 除外)，而且不在该组件内部的 props 中声明，就可以通过 `v-bind="$attrs"` 传入该组件的内部组件

#### 使用方法

```vue
<template>
  <div class="father">
    我是父组件
    <son :code="'我是子组件'" />
  </div>
</template>
<script>
import son from './son'
export default {
  components: {
    son
  }
}
</script>
```

```vue
<template>
  <div class="son">
    {{ $attrs.code }}
  </div>
</template>
```

:::warning 注意
`vm.$attrs` 不能读取被 `props` 选中数据
:::

### vm.$parent

官方定义：

> 父实例，如果当前实例有的话。

`vm.$parent` 可以读取父实例的所有信息，可直接获取数据来使用更改

#### 使用方法

```vue
<template>
  <div class="father">
    我是父组件
    <son />
  </div>
</template>
<script>
import son from './son'
export default {
  components: {
    son
  },
  data() {
    return {
      code: '我是子组件'
    }
  }
}
</script>
```

```vue
<template>
  <div class="son">
    {{ $parent.code }}
  </div>
</template>
```
