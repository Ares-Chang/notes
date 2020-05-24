---
title: '保存 git 帐户密码'
---

## 解决 git pull/push 每次都需要输入密码的问题

如果我们git clone的下载代码的时候是连接的https://而不是git@git (ssh)的形式，当我们操作git pull/push到远程的时候，总是提示我们输入账号和密码才能操作成功，频繁的输入账号和密码会很麻烦。

这时我们进入项目目录,输入:

```git
git config --global credential.helper store
```

之后再 pull 或 push 时只需再输入一次帐号密码,以后就会自动记录到 .gitconfig 文件中