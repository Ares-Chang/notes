---
title: Upload 上传成功后 input 框无法赋值
---

## 问题

最近在使用 iview 组件库时,遇到了利用 Upload 上传成功后获取到 url 赋值给 input 但是无法成功的问题.

```html
<i-col span="16">
	<Form-item label="icon链接" prop="iconUrl">
		<i-input v-model="formData.iconUrl" placeholder="icon链接" readonly/>
	</Form-item>
</i-col>
<i-col span="3">
	<Form-item :label-width="1">
		<Upload style="width: 300px;" action="../sys/AliyunOss/upload" :format="['jpg','jpeg','png']"
				max-size="10"
				:on-success="handleSuccessIconUrl" :on-format-error="handleFormatError"
				:show-upload-list="false"
				:on-exceeded-size="handleMaxSize">
			<i-button icon="ios-cloud-upload-outline">上传图片</i-button>
		</Upload>
	</Form-item>
</i-col>
```

效果如下:

<img class="zoom" :src="$withBase('/vue/iview-upload-value.png')">

## 解决方法

图片虽然上传成功,但是赋值却没有成功,因为在定义 formData时未定义 iconUrl 属性造成的组件赋值失败.

这里将 iconUrl 属性定义一下就可以解决这个问题.