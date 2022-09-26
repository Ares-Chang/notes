# 获取用户授权信息

## 需求

通过微信小程序获取用户基本信息，手机号等授权信息

## 解决方法

因为微信小程序的版本更新，已经不能通过其他方法来调取用户授权，只能通过用户点击 `button` 按钮来触发

## 获取手机号

### 原理步骤

- 第一步：通过调用 `uni.login` 接口，获取一个 `code` 值

- 第二步：拿到 `code` 值，将其发送给后台。后台通过请求获取 `openid` 和 `sessionkey`。

- 第三步：通过 `button` 触发调用 `getPhoneNumber` 方法来获取用户授权

- 第四步：将获取到的参数 `encryptedData` 、`iv` 传回给后台来进行手机号解密

### 参数说明

- code：用户登录凭证。开发者需要在开发者服务器后台，使用 code 换取 openid 和 session_key 等信息

- openid：用户身份唯一标识

- sessionkey：会话密钥，用于搭配 encryptedData 和 iv 来解密用户信息

- encryptedData: 包含用户敏感数据信息

- iv: 加密算法的初始向量

### 代码示例

结构：

```html
<template>
  <button
    class="btn-info"
    plain="true"
    open-type="getPhoneNumber"
    @getphonenumber="getPhoneNumber"
  ></button>
</template>
```

行为：

```js
export default {
  data() {
    return {
      ...
    }
  }
  methods: {
    async wxlogin() {
      let [err, loginRes] = await uni.login({
        provider: 'weixin',
      });
      await uni.request({
        url: `后台获取 openid 接口`
      })
    },
    getPhoneNumber(e) {
      var that = this;
      uni.checkSession({
        success() {
          var ency = e.detail.encryptedData;
          var iv = e.detail.iv;
          if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
            ...
            // 用户拒绝授权
            ...
          } else { //同意授权
            uni.request({
              method: 'POST',
              url: '后台解密接口',
              data: {
                encrypted_data: ency,
                iv: iv,
              },
              success: (res) => {
                console.log("解密成功")
                console.log(res)
              },
              fail: function(res) {
                console.log("解密失败~~~~~~~~~~~~~");
                console.log(res);
              }
            });
          }
        },
        fail() {
          console.log("session_key 已经失效，需要重新执行登录流程");
          that.wxlogin(); //重新登录
        },
        complete() {
          that.shade = false
        }
      })
    },
  }
}
```

:::warning 注意：
获取 code 一定要在获取加密数据之前，因为获取的加密数据是和获取的 code 单向关联的，如果先获取加密数据，再获取 code ，拿到的 sessionKey 可能会不同导致解密失败。
:::
