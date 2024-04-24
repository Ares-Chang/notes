# Upload 上传成功后 input 框无法赋值

## 问题

最近在使用 iview 组件库时，遇到了利用 Upload 上传成功后获取到 url 赋值给 input 但是无法成功的问题。

```html
<i-col span="16">
  <Form-item label="icon链接" prop="iconUrl">
    <i-input v-model="formData.iconUrl" placeholder="icon链接" readonly />
  </Form-item>
</i-col>
<i-col span="3">
  <Form-item :label-width="1">
    <Upload
      style="width: 300px;"
      action="../sys/AliyunOss/upload"
      :format="['jpg','jpeg','png']"
      max-size="10"
      :on-success="handleSuccessIconUrl"
      :on-format-error="handleFormatError"
      :show-upload-list="false"
      :before-upload="uploadBooImg"
      :on-exceeded-size="handleMaxSize"
    >
      <i-button icon="ios-cloud-upload-outline">上传图片</i-button>
    </Upload>
  </Form-item>
</i-col>
```

效果如下:

![](./images/iview-upload-value/iview-upload-value.png)

## 产生原因

当看 vue 文档的时候，会发现有这么一句话：如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。

受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。

## 解决方法

### 方法一

图片虽然上传成功,但是赋值却没有成功,因为在定义 formData 时未定义 iconUrl 属性造成的组件赋值失败.

这里默认在 formData 将 iconUrl 属性定义一下就可以解决这个问题.

### 方法二 ( 推荐 )

我们可以使用 `this.$set(this.data,key,value)` 来实现视图的响应式更新。

```js
uploadBooImg() {
  ...

  this.$set(this.formData,'iconUrl',`图片链接`)

  ...
}
```

### 方法三 ( 不推荐 )

可以使用 `vm.$forceUpdate()` 来强制重新渲染当前组件内容来达到效果。

[官方解释](https://cn.vuejs.org/v2/api/#vm-forceUpdate)：迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

<br />

具体使用请参考 [官方文档](https://cn.vuejs.org/v2/api/#Vue-set)
