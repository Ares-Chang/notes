# 表单验证踩坑记录

## 表单验证的属性

```js
ruleValidate: {
  name: [
    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
  ]
}
```

- type :

  - string: 必须是字符串类型。这是默认类型
  - number: 必须是数字
  - boolean: 必须是布尔型的
  - method: 必须是类型函数
  - regexp: 必须是 ReGEXP 的实例，或者是在创建新的 ReGEXP 时不会生成异常的字符串
  - integer: 必须是整数.
  - float: 必须是浮点数.
  - array: 必须是由 Array.isArray 确定的数组
  - object: 必须是类型对象而不是 Array.isArray
  - enum: 枚举中必须存在值。
  - date: 按日期确定的值必须有效
  - url: 必须是 URL 类型。
  - hex: 必须是十六进制。
  - email: 必须是电子邮件类型。

- required:true | false
- pattern :正则表达式
- min: 最小值
- max: 最大值
- Length : 长度
- enum: 验证字段是否存在其中

```js
{ message:'不包含a , u, g',trigger: 'change',type: 'enum',enum: ['a', 'u', 'g']}
```

- messages: 错误信息
- trigger : ‘change’ | ‘blur’
- whitespace : true | false
  - true:空白字符 ->错误提醒
  - false: 空白字符->不报错

```js
{ type: 'string', whitespace:true,message:'包含空白字符',trigger: 'change'}
```

## 表单必填标志显示偏移

使用情况：需要做一个以 Radio 单选框来控制表单内容的显示和隐藏。但是当单选框切换时，表单验证的 \* 号却跑偏了。

原因：`v-if` 会影响到 iview 表单的显示

解决方法：可以尝试使用 `v-show` 来代替 `v-if`

- `v-if` 只有在条件成立时才会生成 dom
- `v-show` 是先生成 dom ，再通过 css 控制显示隐藏

[阅读原文](https://blog.csdn.net/ddwddw4/article/details/89216594)
