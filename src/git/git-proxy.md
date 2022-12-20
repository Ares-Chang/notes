---
outline: [2, 4]
---

# Git Proxy

## 关于

由于近期 `GitHub` 被封锁，页面无法访问，只能通过[小飞机](../else/tools/FQ.md)来规避这个问题。

但是开启小飞机将导致 `git push` 无法推送，经常报错 `443` 连接超时。

**解决方法：`git` 提供了一个代理配置命令，可点击[查看文档](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy)**

## HTTPS

使用 `HTTP/HTTPS` 协议连接到 `Git` 仓库的代理方法

### 设置代理

#### 针对所有域名

```shell
git config --global http.proxy [protocol://]proxyhost[:port]
```

::: tip

- `--global` 修改的 `Git` 全局配置文件 `~/.gitconfig` 的内容，不加 `--global` 修改的是各 `Git` 仓库的 `.git/config` 文件内容。

- `protocol` 指代理的协议类型

- `proxyhost` 指代理地址访问路径

- `port` 指代理端口号，每个服务提供的端口号是不同的，需自行在小飞机内查询

:::

**示例：**

```shell
git config --global http.proxy http://127.0.0.1:7890
```

---

#### 针对特定域名

```shell
git config --global http.url.proxy [protocol://]proxyhost[:port]
```

::: tip

- `url` 为要代理的网址路由
  :::

**示例：**

如果想要代理 `https://github.com/<user>/<repository>.git` 的内容，可以按照以下方式操作。

```shell
git config --global http.https://github.com.proxy http://127.0.0.1:7890
```

以上示例为全局代理 `https://github.com` 内容。如果只想改变单个仓库，可以删除 `--global` 后，进入对应仓库操作即可。

---

### 取消代理

因为以上操作的都是全局代理，如 `gitlab` 或国内的 `gitee` 等仓库是不需要做代理即可访问的，做了代理反而速度下降，可以通过 `--unset` 移除代理配置。

```shell
git config --global --unset http.proxy
```

以上操作即可移除代理配置，可以通过 [`--list`](#查看-config-配置) 查看配置项。

## 查看 config 配置

```shell
git config --global --list
```

输出 `config` 配置，移除 `--global` 可查看当前库配置

## SSH

使用 `SSH` 协议连接到 `Git` 仓库的代理方法

> 暂时还未涉及使用 `SSH` 协议待日后尝试后更新。。。

## 参考资源

[一文让你了解如何为 Git 设置代理](https://ericclose.github.io/git-proxy-config.html)

[git 设置和取消代理](https://gist.github.com/laispace/666dd7b27e9116faece6)

[git 官方文档](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy)
