---
aside: false
---

# wsl 不支持 localhost 代理

wsl 启动后输出以下内容：

```sh
wsl: 检测到 localhost 代理配置，但未镜像到 WSL。NAT 模式下的 WSL 不支持 localhost 代理。
```

`WSL2 2.0.0` 更新内容，支持和 `Windows` 使用相同的网络(镜像网络)

翻译一下就是 wsl 和 windows 共享网络配置了。

但是支持貌似并不友好，在人提了 [issues](https://github.com/microsoft/WSL/issues/10753) ，暂时解决了这个问题。

1. 打开或创建 wsl 配置文件(位于 `%USERPROFILE%\.wslconfig`)，然后输入以下内容：

```sh
[experimental]
autoMemoryReclaim=gradual  # gradual  | dropcache | disabled
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
```

2. `wsl --shwtdown` 关闭重启。