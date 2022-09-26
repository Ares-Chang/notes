# props 双向绑定问题

## 问题

最近在使用 iviewui 的 Modal 组件二次封装成独立组件使用时，子组件需要将关闭 Modal 状态返回给父组件，简单的说就是要实现父子组件之间的数据双向绑定问题。

但是程序运行时会出现一个错误:

```js
[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "Switch"'
```

组件内不能修改 props 传入的值，同时修改的值也不会同步到组件外层，即调用组件方不知道组件内部当前的状态是什么

## 官方解释

官方文档解释：prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。

虽然废弃了 props 的双向绑定对于整个项目整体而言是有利且正确的，但是在某些时候我们确实需要从组件内部修改 props 的需求

## 解决方法

可以通过以下方法来实现组件属性的双向绑定

子组件：

```vue
<template>
  <Modal
    title="弹框组件"
    v-model="SwitchData"
    class-name="vertical-center-modal"
    @on-ok="Confirm"
    @on-cancel="Cancel"
  >
    <div class="content">具体业务代码...</div>
  </Modal>
</template>
<script>
export default {
  name: 'SonCompenent',
  props: {
    Switch: Boolean
  },
  data() {
    return {
      // 在组件内保存 props 传递下来的值
      SwitchData: this.Switch
    }
  },
  //监听父组件对 props 属性 Switch 的修改，并同步到组件内的 SwitchData 属性
  watch: {
    Switch(val) {
      this.SwitchData = val
    }
  },
  methods: {
    Confirm() {
      // ...
      this.$emit('changeShowMod', false) // 子组件对开关状态修改后向父组件发送事件通知
    },
    Cancel() {
      // ...
      this.$emit('changeShowMod', false)
    }
  }
}
</script>
```

父组件修改

```vue
<template>
  <div class="FatherCompenent">
    <Button type="primary" @click="Switch = true">打开弹窗</Button>
    <SonCompenent :Switch="Switch" @changeShowMod="closeModal"></SonCompenent>
  </div>
</template>
<script>
import SonCompenent from './SonCompenent'
export default {
  name: 'FatherCompenent',
  data() {
    return {
      Switch: false
    }
  },
  components: {
    SonCompenent
  },
  methods: {
    closeModal(data) {
      this.Switch = data // 子组件触发父组件事件，进行数据变更，同步 Switch 数据
    }
  }
}
</script>
```

[阅读原文](https://segmentfault.com/a/1190000011783590)
