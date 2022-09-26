# git 无法 push 成功问题

## 问题

某天 git push 到仓库的时候提示 `Please make sure you have the correct access rights and the repository exists`

我自己的仓库怎么会没有访问权限???

上网 Google 一下，原来是 ssh key 有问题，连接不上服务器

## 解决方法

1. 重置一下自己的用户名和密码

```shell
git config --global user.name "userName"

git config --global user.email "user@email.com"
```

2. 删除 .ssh 文件夹【C:\Users\(本地用户名)\.ssh】 中的 known_hosts(直接删除即可)

3. git 输入 ssh-keygen -t rsa -C "your@email.com"（请填你设置的邮箱地址）

如果执行成功，会返回：

Generating public/private rsa key pair.

Enter file in which to save the key (/Users/username/.ssh/id_rsa):

这里的 username 是电脑上的用户名，这个地址也是文件的存储地址，然后按回车.

然后系统会自动在.ssh 文件夹下生成两个文件，id_rsa 和 id_rsa.pub，用记事本打开 id_rsa.pub

将全部的内容复制

4. 打开https://github.com/，登陆你的账户，进入设置 SSH and GPG keys 新建一个 ssh key，把刚刚粘贴的复制进去,点击新建

5. 在 git 中输入命令 ssh -T git@github.com 然后输入 yes 回车就可以了

再次尝试 git push 就会成功访问
