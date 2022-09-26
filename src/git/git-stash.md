# git stash 暂存修改

## 需求

多人合作开发时，我们肯定会拥有自己的分支进行开发。当我们开发到一半时，有个 BUG 需要我们到其他分支进行修改，我们只能提交一次然后切换分支去修改。

但是这时 commit 记录上就有了很多脏的提交记录，这不是我们所希望的。

通过科学上网，找到 `git stash` 命令可以完美解决我们的需求。

## 用法

### 1. stash 当前修改

`git stash` 会把所有未提交的暂存修改保存都起来，用于后续恢复当前工作目录。

```shell
git stash
```

需要说明一点，stash 是本地的，不会通过 `git push` 命令上传到 git server 上。

实际应用中推荐给每个 stash 加一个 message，用于记录版本，使用 `git stash save` 取代 `git stash` 命令。示例如下：

```shell
git stash save "test-git-stash"
```

`git stash` 只能暂存已经 add 了的文件，如果想要保存未提交的可以添加指定参数：

使用 `-u` 或者`--include-untracked` 可以 stash 没有 `git add` 的文件。使用 `-a` 或者 `--all` 命令可以 stash 当前目录下的所有修改(包含被忽略文件)。

```shell
git stash -u	// 暂存未 add 文件

git stash -a	// 暂存所有文件(包含忽略文件)
```

::: danger 警告
尽量使用 `git stash -u` 不要使用 `git stash -a`。

`-a` 操作会暂存你所有的文件，不会解析你的 `.gitignore` ，会产生许多无法被读取的文件，到时可能无法重新应用到分支上。
:::

### 2. 查看现有 stash

可以使用 `git stash list` 命令，查看当前有多少 stash 暂存。

```shell
git stash list
```

### 3. 重新应用缓存的 stash

可以通过 `git stash pop` 命令恢复之前缓存的工作目录。

```shell
git stash pop
```

这个指令将缓存堆栈中的第一个 stash 删除，并将对应修改应用到当前的工作目录下。

也可以使用 `git stash apply` 命令，将缓存堆栈中的 stash 多次应用到工作目录中，但并不删除 stash 拷贝。

```shell
git stash apply
```

在使用 pop 或 apply 恢复暂存时可以通过 stash@{0} 指定使用哪个 stash。**默认使用最近的 stash（即 stash@{0}）。**

### 4. 移除 stash

可以使用 git stash drop 命令，后面可以跟着 stash 名字来删除这个暂存。

```shell
git stash drop stash@{0}
```

### 5. 查看指定 stash 的 diff

可以使用 `git stash show` 命令，后面可以跟着 stash 名字来查看这个暂存有什么内容。

```shell
git stash show stash@{0}
```

在该命令后面添加 -p 或 --patch 可以查看特定 stash 的全部 diff。

### 6. 从 stash 创建分支

当暂存的文件和现在修改的文件产生了冲突可以使用 `git stash bransh` 来新建一个分支，如果成功会删除 stash 暂存。

```shell
git stash bransh newbransh
```

[阅读原文](https://www.cnblogs.com/tocy/p/git-stash-reference.html)
