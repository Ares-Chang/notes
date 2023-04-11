# 清理无效的远程追踪分支

## 问题

如题，当在 Git 远端删除了一个分支，这时本地并不知道此操作，并不会同步。

此时在本地使用 `git branch -a` 依旧可以查看已被删除的分支，但是我们并不能移除它。

```shell {4-6}
λ git branch -a
develop
master
remotes/origin/@feat/heatMap # 已删除
remotes/origin/@feat/factoryAMap # 已删除
remotes/origin/@feat/createdPolygon # 已删除
```

当分支大多并且想要知道远端链接情况的时候，可以通过 [`git remote show [origin]`](./git-remote#查看某个远程仓库) 方法查看链接关系
::: details `git remote show origin` 详情

已删除的分支会进行 **stale** 标注

```shell {11-13}
λ git remote show origin
info: detecting host provider for 'https://github.com/xxx/xxx.git'...
info: detecting host provider for 'https://github.com/xxx/xxx.git'...
* remote github
  Fetch URL: https://github.com/xxx/xxx.git
  Push  URL: https://github.com/xxx/xxx.git
  HEAD branch: master
  Remote branch:
    develop                                     tracked
    master                                      tracked
    refs/remotes/origin/@feat/createdPolygon    stale (use 'git remote prune' to remove)
    refs/remotes/origin/@feat/factoryAMap       stale (use 'git remote prune' to remove)
    refs/remotes/origin/@feat/heatMap           stale (use 'git remote prune' to remove)
  Local ref configured for 'git push':
    develop              pushes to develop              (up to date)
    master               pushes to master               (up to date)
```

:::

## 解决方法

### `git fetch -p`

使用 `git fetch -p` 方法可以清除本地不存在远程分支的缓存。

```shell {1}
λ git fetch -p
info: detecting host provider for 'https://github.com/xxx/xxx.git'...
info: detecting host provider for 'https://github.com/xxx/xxx.git'...
From https://github.com/xxx/xxx.git
 - [deleted]           (none)     -> origin/test
```

展开来说，当我们在本地仓库执行 `git fetch` 命令时，git 会尝试从远程仓库中拉取最新的代码，包括分支、标签等内容，然后将这些内容存储在本地仓库的缓存中。但是，如果远程仓库中删除了某个分支或标签，那么 git 在执行 `fetch` 命令时并不会将本地缓存中对应的内容删除，这就会导致本地仓库和远程仓库的状态不一致。

为了解决这个问题，我们需要使用 `git fetch -p` 命令。该命令中的 `-p` 选项表示 `prune`，即清除本地不存在的远程分支的缓存。执行该命令后，git 会在拉取最新代码的同时，清除本地缓存中不存在的远程分支，保证本地仓库和远程仓库的状态一致。

### `git remote prune [origin]`

再或者，通过 [`git remote show [origin]`](./git-remote#查看某个远程仓库) 方法查看链接关系后，可使用 `git remote prune [origin]` 方法来清除无效链接。

> `[origin]` 需修改为 `remote` 别名

```shell {1}
λ git remote prune origin
info: detecting host provider for 'https://github.com/xxx/xxx.git'...
info: detecting host provider for 'https://github.com/xxx/xxx.git'...
Pruning origin
URL: https://github.com/xxx/xxx.git
 * [pruned] origin/@feat/createdPolygon
 * [pruned] origin/@feat/factoryAMap
 * [pruned] origin/@feat/heatMap
```

> 参考：[git-remote Documentation](https://git-scm.com/docs/git-remote#Documentation/git-remote.txt-empruneem)
