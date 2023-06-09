# 设置大小写敏感

## 关于

由于 `Git` 默认是不区分大小写的，导致如果一个文件被 `Git` 记录到后，再修改大小写，`Git` 会认为这个文件没有做修改，不会被记录到变更中。

但是这时在代码中引用了这个文件，如果别人拉取代码后运行，就会出现找不到文件的情况。

## 解决方法

可以通过手动关闭 `Git` 的 [忽略大小写](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreignoreCase) 来解决这个问题。

```bash
git config core.ignorecase false # 关闭大小写忽略
```

> `core.ignorecase` 默认为 `true`，即忽略大小写。
