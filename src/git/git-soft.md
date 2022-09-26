# 撤销上次提交

## 需求

当完成 `git commit` 后发现，代码没有完善存在 BUG 需要修改，想要撤销上次的提交记录重新再来。

## 解决方法

我们使用 `git reset` 来完成这个需求

```shell
git reset --soft HEAD^
```

### 参数细化

- --mixed

意思是：不删除工作空间改动代码，撤销 commit ，并且撤销 `git add .` 操作
这个为默认参数,`git reset --mixed HEAD^` 和 `git reset HEAD^` 效果是一样的。

- --soft

不删除工作空间改动代码，撤销 commit ，不撤销 `git add . `

- --hard

删除工作空间改动代码，撤销 commit ，撤销 `git add . `

注意完成这个操作后，就恢复到了上一次的 commit 状态。
