# 版本回退报错

## 问题

在执行 `git reset --hard HEAD^` 时报错

```shell
fatal: ambiguous argument 'HEAD^': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
```

## 问题原因

1. 因为 `cmd` 控制台中换行符默认是 `^`，而不是`\`，所以`^`符号被 git 编译为换行符了

解决方法：[HEAD^ 提示 More?](./git-HEAD.md)

2. 该仓库到目前为止只有 `commit` 过一次代码，故已经是 `head` 版本，也会报这样的错。
