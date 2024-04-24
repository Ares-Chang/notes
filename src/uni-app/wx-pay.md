# 微信支付接入

## 关于

最近在开发微信小程序，业务需要，接入微信支付来购买商品，以下为接入过程，以防后继踩坑。

## 支付接入

小程序的微信支付 api 需要预先开通才能应用，如何开通请参考[文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_11&index=2)

支付分为两个步骤：

1. 统一平台下单

2. 调起微信支付收银台

### 统一平台下单

前端获取用户临时 `code` 信息，返回后端处理，发送订单信息到 wx 统一下单。

> 注意：小程序内只能使用 jsapi 支付注意返回数据 type 类型

### 调起微信收银台

后台返回微信处理数据，接下来就要前端处理调起微信收银台了。

可以使用 [`uni.requestPayment`](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment)方法来处理直接应用。

示例代码：

```js
uni.requestPayment({
  provider: 'wxpay',
  timeStamp: String(Date.now()),
  nonceStr: 'A1B2C3D4E5',
  package: 'prepay_id=wx20180101abcdefg',
  signType: 'MD5',
  paySign: '',
  success: function (res) {
    console.log('success:' + JSON.stringify(res))
  },
  fail: function (err) {
    console.log('fail:' + JSON.stringify(err))
  }
})
```

基本数据微信都已经返回了，可以直接应用，但是注意，`timeStamp` `signType` `paySign`，这三个参数需要前端自己处理

- `timeStamp`: 时间戳必须和签名的时间是一致的，否则会导致签名验证失败。
- `signType`: 签名算法，需要和你的签名格式一致。
- `paySign`: 签名，这个需要前端自己通过 MD5 加密特定格式的数据返回微信。请参考[签名生成文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3)

> MD5 加密可以在 [`uniapp插件市场`](https://ext.dcloud.net.cn/) 里下载 [`js-md5`](https://ext.dcloud.net.cn/plugin?id=5) 来使用
>
> 如后继签名出问题，可以通过 [签名校验工具](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=20_1) 来进行比对

### 实例代码

```js
import md5 from '@/js_sdk/js-md5/build/md5.min.js'
export default {
  data() {
    return {
      dataList: [],
      code: ''
    }
  },
  onLoad(q) {
    this.getWxCode()
  },
  methods: {
    async getWxCode() {
      let [err, loginRes] = await uni.login({
        provider: 'weixin'
      })
      this.code = loginRes.code
    },
    async payMoney() {
      uni.checkSession({
        success: async () => {
          // 注意！签名 time 和 调起收银台的 time 一定要一致，这是个坑
          let time = JSON.stringify(new Date().getTime())

          let res = await this.$u.api.getCreate_order({
            code: this.code
          })
          if (!res) {
            return this.getWxCode().then(res => {
              this.payMoney()
            })
          }

          // 签名生成
          var pay = `appId=${res.original.data.appid}&nonceStr=${
            res.original.data.nonce_str
          }&package=${
            'prepay_id=' + res.original.data.prepay_id
          }&signType=MD5&timeStamp=${time}&key=支付密钥`
          var sign = md5(pay).toUpperCase()

          // 调起收银台
          uni.requestPayment({
            provider: 'wxpay',
            timeStamp: time,
            nonceStr: res.original.data.nonce_str,
            package: `prepay_id=${res.original.data.prepay_id}`,
            signType: 'MD5',
            paySign: sign,
            success: function (res) {
              console.log('success:' + JSON.stringify(res))
              // 回上一页
              uni.navigateBack({
                delta: 1
              })
            },
            fail: function (err) {
              console.log('fail:' + JSON.stringify(err))
            }
          })
        },
        fail: () => {
          console.log('session_key 已经失效，需要重新执行登录流程')
          this.wxlogin() //重新登录
        }
      })
    }
  }
}
```
