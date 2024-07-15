# scp 远程拷贝

Linux scp 命令用于 Linux 之间复制文件和目录。

scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令。

scp 是加密的，rcp 是不加密的，scp 是 rcp 的加强版。

## 使用

简易写法:

```sh
scp [可选参数] file_source file_target 
```

## 拷贝到远程

```sh
scp ./text.txt root@10.0.0.5:/home/root/text.txt
```

从本地拷贝 `text.txt` 文件到 10.0.0.5 的 `/home/root` 目录下。

## 拷贝到本地

```sh
scp -r root@10.0.0.5:/home/root/test ./
```

从 10.0.0.5 的 `/home/root/test` 目录拷贝到当前目录下。

## 常用参数

- `-C`: 压缩拷贝
- `-r`: 递归拷贝文件和目录
- `-q`: 不输出任何提示
- `-v`: 输出详细信息
- `-P`: 指定端口

[更多参数可参考](https://www.runoob.com/linux/linux-comm-scp.html)