# 获取本机 IP

## 需求

vue cli 2x 默认是不能开启项目局域网访问的,但是经过我们的努力成功开启,但是项目开启显示路径是不正确的。所以我们要自己修改一下,通过 node 环境来获取本机的 IP 来用来显示。

## 解决方法

- 在当前项目的 build 目录下新建一个 `get-ip.js` 文件用来获取本机 ip 地址

```js
// build/get-ip.js

var os = require('os'),
  ip = '',
  ifaces = os.networkInterfaces() // 获取本机ip
out: for (var i in ifaces) {
  for (var j in ifaces.WLAN) {
    var val = ifaces.WLAN[j]
    if (val.family === 'IPv4' && val.address !== '127.0.0.1') {
      ip = val.address
      break out
    }
  }
}
module.exports = ip
```

当前获取的 ip 地址是连接 WIFI 情况下的 IPV4 地址,如果另有需求,可以打印 ifaces 自行查找调用.
