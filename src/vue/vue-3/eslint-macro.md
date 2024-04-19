# Eslint 搭配 defineProps 报错问题

## 关于

在 `<script setup>` 中如果想要使用 `props` 和 `emits` 进行组件通信，

就必须使用 `defineProps` 和 `defineEmits` API 来进行预先声明。

根据[官方文档](https://v3.cn.vuejs.org/api/sfc-script-setup.html#defineprops-%E5%92%8C-defineemits)，这两个 API 都是只能在 `<script setup>` 中使用，并且**不需要单独引入**的**编译器宏**。

但是真正使用起来，如果不正常 `import` 引入，会被 `Eslint` 检测错误。

如果正常引入，控制台中会报一则 Warning：

```sh
[@vue/compiler-sfc] `defineProps` is a compiler macro and no longer needs to be imported.

[@vue/compiler-sfc] `defineEmits` is a compiler macro and no longer needs to be imported.
```

> 简单解释，这两个 api 我认识，不用你多此一举再引入了。

虽然 Warning 不是错误，但是它存在在哪里总觉得心里不舒服。

## 解决方法

由于此提示是 `Eslint` 报出，可以修改 `.eslintrc.js` 来禁止覆盖。

示例 `.eslintrc.js`：

```js
module.exports = {
  // 配置全局变量 "writable" 允许覆盖变量，"readonly" 禁止覆盖
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly'
  }
}
```

参考 [ESLint 配置文档](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals)
