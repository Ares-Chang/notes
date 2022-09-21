---
title: 解决 .gitignore 不生效问题
autoPrev: git-ignore
---

## 问题

当修改了 .gitignore 文件的配置后却不能生效，文件依旧被跟踪记录。

可能是在配置 .gitignore 文件之前，该文件已经被纳入版本管理，已经存在于本地缓存了，所以配置的文件无法起作用。

## 解决方法

- 可以删除本地信息，重新记录一下当前配置的文件信息

```shell
git rm -r --cached .   # 删除本地缓存信息重新记录
git add .
git commit -m "update .gitignore"
```

如果文件已经存在于远程仓库，可以强制覆盖或者通过 `git rm -r --cached [文件名]` 来重新记录提交一下。

> ps: 不提倡强制覆盖，但有时是个很有用的选项。
