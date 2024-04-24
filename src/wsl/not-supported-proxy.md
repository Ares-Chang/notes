---
aside: false
---

# WSL 不支持 localhost 代理

WSL 启动后输出以下内容：

```sh
wsl: 检测到 localhost 代理配置，但未镜像到 WSL。NAT 模式下的 WSL 不支持 localhost 代理。
```

`WSL2 2.0.0` 更新内容，支持和 `Windows` 使用相同的网络(镜像网络)

翻译一下就是 WSL 和 Windows 共享网络配置了。

但是支持貌似并不友好，在人提了 [issues](https://github.com/microsoft/WSL/issues/10753) ，暂时解决了这个问题。

1. 打开或创建 WSL 配置文件(位于 `%USERPROFILE%\.wslconfig`)，然后输入以下内容：

```sh
[experimental]
autoMemoryReclaim=gradual  # gradual  | dropcache | disabled
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
```

`.wslconfig` 存储在你的 `%UserProfile%` 目录中。用于在作为 WSL 2 版本运行的所有已安装的 Linux 发行版中全局配置设置。

要访问 `%UserProfile%` 目录，请在 `PowerShell` 中使用 `cd ~` 访问主目录（通常是用户配置文件 `C:\Users<UserName>`），或者可以打开 Windows 文件资源管理器并在地址栏中输入 `%UserProfile%`。 该目录路径应类似于：`C:\Users<UserName>.wslconfig`。

WSL 将检测这些文件是否存在，读取内容，并在每次启动 WSL 时自动应用配置设置。 如果文件缺失或格式错误（标记格式不正确），则 WSL 将继续正常启动，而不应用配置设置。

> 只能用于 WSL 2 运行的发行版。 作为 WSL 1 运行的发行版不受此配置的影响，因为它们不作为虚拟机运行。

2. `wsl --shwtdown` 关闭重启。
