# HEAD^ 提示 More?

## 问题

在回滚上次代码时用 `git reset --hard HEAD^` 却发现不能使用,会提示 `More?`,多按几次就会报错。

```shell
fatal: ambiguous argument 'HEAD^': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
```

## 原因

因为使用 `cmd` 控制台的原因，`cmd` 中的换行符默认是 `^`，而不是 `\`,所以它的 `more？` 的意思是问你下一行是否需要再输入，而 `^` 符号就被当做换行符而被 git 命令忽略掉了。

## 解决方法

- 加引号 `git reset --hard "HEAD^"`

- 多加一个^ `git reset --hard HEAD^^`

- 换成~ `git reset --hard HEAD~` 或者 `git reset --hard HEAD~1`

> ~ 后面的数字表示回退几次提交，默认是一次

或者换成 `git bash`，`powershell` 等就不会出现这种问题了
