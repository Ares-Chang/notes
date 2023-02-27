# git remote 命令

## 关于

为了操作远程仓库内容，需要使用 `git remote` 来连接到远程仓库，以便管理。

## 使用方法

### 查看远程仓库

如果想要查看已经配置的远程仓库服务器，可以运行 `git remote` 命令。

它会列出指定的每一个远程服务器的简写。

如果你是克隆的远程仓库，那么至少可以看到 `origin` --- 这是 Git 给仓库服务器的默认别名。

```sh
λ git clone [https://github.com/xxx/xxx.git]
Cloning into 'test'...
remote: Enumerating objects: 1857, done.
remote: Total 1857 (delta 0), reused 0 (delta 0), pack-reused 1857
Receiving objects: 100% (1857/1857), 334.06 KiB | 30.00 KiB/s, done.
Resolving deltas: 100% (837/837), done.

λ cd test\

λ git remote
origin
```

::: warning 注意：
λ 并不是输入的命令，和 Linux 终端中的 $ 一样，这是每行开始的符号。

我使用的 [Cmder](https://cmder.net/)，如果感兴趣可以点击查看我的 [Cmder 配置](/else/tools/cmder)。
:::

如果想要查看详细信息，可以在 `git remote` 后面加个 `-v`

表示展示读写远程仓库使用的 Git 保存的简写与其对应的 URL。

```sh
λ git remote -v
origin  https://github.com/xxx/xxx.git (fetch)
origin  https://github.com/xxx/xxx.git (push)
```

### 添加远程仓库

如果我们是通过 `git init` 创建的本地仓库，但是远程是空仓库的情况下

需要通过 `git remote add [shortname] [url]` 来链接本地仓库与远程仓库。

```sh
λ git remote add origin https://github.com/xxx/xxx.git

λ git remote -v
origin  https://github.com/xxx/xxx.git (fetch)
origin  https://github.com/xxx/xxx.git (push)
```

### 推送到默认远程仓库

我们更新了代码之后需要推送到远程仓库

可以使用 `git push [origin] [master]` 来进行推送

同时，如果以后默认推送到些仓库，可以在 `git push` 后面添加 `-u` 属性。

```sh
λ git push -u origin master
```

### 删除远程仓库

如果以后不需要用到此仓库，可以通过 `git remote remove [origin]` 来删除别名。

```sh
λ git remote remove origin
```

### 修改本地仓库别名

如果创建时别名输入错误，想要修改

可以通过 `git remote rename [old_name] [new_name]` 来修改别名。

```sh
λ git remote -v
origin  https://github.com/xxx/xxx.git (fetch)
origin  https://github.com/xxx/xxx.git (push)

λ git remote rename origin test

λ git remote -v
test    https://github.com/xxx/xxx.git (fetch)
test    https://github.com/xxx/xxx.git (push)
```

### 修改别名链接

如果创建别名时链接写错了，我们当然可以选择删除重建

同时也可以通过 `git remote set-url [origin] [url]` 来只修改链接地址。

```sh
λ git remote set-url origin https://github.com/xxx/xxxxx.git

λ git remote -v
origin  https://github.com/xxx/xxxxx.git (fetch)
origin  https://github.com/xxx/xxxxx.git (push)
```

### 查看某个远程仓库

如果想要查看某个远程仓库的详细信息

可以使用 `git remote show [origin]` 来实现，当然分支名称也可以换为 `url` 链接。

```sh
λ git remote show origin
* remote origin
  Fetch URL: https://github.com/xxx/xxx.git
  Push  URL: https://github.com/xxx/xxx.git
  HEAD branch: master
  Remote branches:
    master tracked
    ticgit tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

它同样会列出远程仓库的 URL 与跟踪分支的信息。

这些信息非常有用，它告诉你正处于 `master` 分支，并且如果运行 `git pull`，就会抓取所有的远程引用，

然后将远程 `master` 分支合并到本地 `master` 分支。它也会列出拉取到的所有远程引用。

### 清理分支的过期引用

如题，如果远端分支已删除，但本地分支通过 `git branch -a` 仍然可以看到远端分支链接。

可使用 `git remote prune [origin]` 来进行清理。

详情请参考 [清理无效的远程追踪分支](./git-remote-prune)