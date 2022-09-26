# Modal 嵌入 Form 表单验证之防止关闭

## 需求

在 Modal 弹窗中嵌入一个 Form 表单用来做信息收集，要求表单必选项填写完全才可关闭

我们正常写法，点击确认弹窗就会自动关闭。

## 实现方法

Modal 弹窗组件中有一个 loading 属性，可以控制弹窗是否关闭，并把确认按钮开启 loading 状态

确认方法中直接设置 loading 无法直接生效，需要搭配 `Vue.$nextTick()` 来使用

## 代码实现

```vue
<template>
  <Button type="primary" @click="modal = true">点击打开实例</Button>
  <Modal v-model="modal" title="Title" :loading="loading" @on-ok="asyncOK">
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :show-message="false"
      :label-width="80"
    >
      <FormItem label="Name" prop="name">
        <Input v-model="formValidate.name" placeholder="请填写姓名"></Input>
      </FormItem>
      <FormItem label="E-mail" prop="mail">
        <Input v-model="formValidate.mail" placeholder="请填写邮箱"></Input>
      </FormItem>
    </Form>
  </Modal>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
      loading: true,
      formValidate: {},
      ruleValidate: {
        name: [{ required: true, trigger: 'blur' }],
        mail: [
          { required: true, trigger: 'blur' },
          { type: 'email', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    asyncOK() {
      this.$refs['formValidate'].validate(valid => {
        if (valid) {
          this.$Message.success('成功!')
          this.modal = false
        } else {
          this.$Message.error('请填写必选项!')
          this.loading = false // 关闭 loading
          this.$nextTick(() => {
            this.loading = true // 下次渲染前打开 loading
          })
        }
      })
    }
  }
}
</script>
```
