# SSH 安装

## 介绍

[安全外壳协议](https://zh.wikipedia.org/zh-hans/Secure_Shell)（Secure Shell Protocol，简称 SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境。

SSH 通过在网络中建立安全隧道来实现 SSH 客户端与服务器之间的连接。

SSH 最常见的用途是远程登录系统，人们通常利用 SSH 来传输命令行界面和远程执行命令。

## 检查包

SSH 分客户端 `openssh-client` 和 `openssh-server`

Linux 系统中默认已安装 `openssh-client`, 安装之前可以先检查一下。

```sh
dpkg -l | grep ssh
```

```sh {3}
ii  libssh-4:amd64                                 0.10.6-2build2                           amd64        tiny C SSH library (OpenSSL flavor)
ii  libssh-gcrypt-4:amd64                          0.10.6-2build2                           amd64        tiny C SSH library (gcrypt flavor)
ii  openssh-client                                 1:9.6p1-3ubuntu13.4                      amd64        secure shell (SSH) client, for secure access to remote machines
```

## 安装 ssh-server

```sh
sudo apt install openssh-server -y
```

安装后再次查看是否安装成功

```sh
dpkg -l | grep ssh
```

```sh {3,4}
ii  libssh-4:amd64                                 0.10.6-2build2                           amd64        tiny C SSH library (OpenSSL flavor)
ii  libssh-gcrypt-4:amd64                          0.10.6-2build2                           amd64        tiny C SSH library (gcrypt flavor)
ii  openssh-client                                 1:9.6p1-3ubuntu13.4                      amd64        secure shell (SSH) client, for secure access to remote machines
ii  openssh-server                                 1:9.6p1-3ubuntu13.4                      amd64        secure shell (SSH) server, for secure access from remote machines
ii  openssh-sftp-server                            1:9.6p1-3ubuntu13.4                      amd64        secure shell (SSH) sftp server module, for SFTP access from remote machines
ii  ssh-import-id                                  5.11-0ubuntu2                            all          securely retrieve an SSH public key and install it locally
```

## 启动 ssh-server

使用 `ps` 查看 `ssh-server` 是否启动成功

```sh
ps -ef | grep ssh
```

```sh {2}
1298 ?        00:00:00 gcr-ssh-agent
2159 ?        00:00:00 sshd
```

如果没有看到 `sshd` 代表 `ssh-server` 没有启动, 可以运行以下命令进行启动。

```sh
sudo service ssh start

# or
# sudo /etc/init.d/ssh start
```

两种命令都可以进行启动

## 配置

`ssh-server` 配置文件位于 `/etc/ssh/sshd_config`，可进行自定义修改，修改后须重启后生效。

```sh
# 停止 ssh 服务
sudo service ssh stop

# 启动 ssh 服务
sudo service ssh start
```

## ssh 连接

通过 `ip a` 查看当前 IP 地址。

切换到另外一台处于同一局域网的机器，替换 `userName` 和 `ip` 为自己的用户名和 IP 地址进行登录。

```sh
ssh [userName]@[ip]

# 例如:
# ssh chang@10.0.0.69
```

当然，也可以不指定用户名，只输入地址进行登录。

```sh
ssh 10.0.0.69
```

`SSH` 会尝试使用当前本地系统登录的用户名进行登录。
