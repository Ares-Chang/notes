# IOS 系统验证码自动填充两次问题

## 问题

BUG：IOS 系统内获取验证码，点击输入时会自动被复制两遍到输入框内。

## 问题产生

这应该是个 IOS 系统 BUG，要不就是 `weixin` 浏览器内核的问题。（PS：这不是前端的问题 😈）

导致验证码信息到达之后会重复触发 `UITextFieldTextDidChangeNotification` 监听事件，验证码复制了两次。

## 解决方法

因为这是个不可抗力原因导致，我们无法为其做完美的优化。

只能限制 `input` 的最大字符输入长度。设置属性 `maxlength="6"`

但是当 `input` 的 `type` 类型为 `number` 时，`maxlength="6"` 就不起作用了，这个时候需要在 `input` 里添加属性：`oninput="if(value.length>6) value = value.slice(0,6)"`

```html
<input
  type="text"
  placeholder="请输入短信验证码"
  maxlength="6"
  oninput="if(value.length>6) value = value.slice(0,6)"
/>
```
