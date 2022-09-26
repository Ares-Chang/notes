# git 中忽略某个文件

## 需求

需求如题，想在 git 中忽略某个文件的跟踪，不记录修改。

> ps: 如果文件已经被纳入 git 跟踪，想去除本地跟踪，但不影响线上，可参考 [使用 `git update-index` 命令](#使用-git-update-index-命令)。

## 实现

### 配置 `.gitignore` 文件

基础方法，可自由配置想要忽略的文件。

使用方法：只需要在根目录创建一个 `.gitignore` 文件就可以

```sh
# 忽略可以键入 文件名/文件夹名/文件类型 等
# 符合条件都可以被忽略

# 忽略所有 .txt 文件
*.txt
# 忽略 1.jpg 文件
1.jpg
# 忽略 node_modules 文件夹及下所有文件
node_modules
```

但注意！**如果想要忽略的文件已经被纳入 git 跟踪了，那么后写入的忽略就不生效了。**

这时候如果还想要忽略，并且以后不再修改(类 env 文件)。

可以参考 [解决 .gitignore 不生效问题](./inoperative-gitignore.md)，文章中提供了解决方法。

> 注意，修改 `.gitignore`，会影响所有仓库使用者。

### 使用 `git update-index` 命令

如果文件已被跟踪，但是本地要修改，不要提交到远程，可以使用

```sh
git update-index --assume-unchanged FILE  # FILE 替换为要取消的文件路径
```

执行过后，此文件在本地的所有跟踪将不被记录。如果想要重新记录，需要运行

```sh
git update-index --no-assume-unchanged FILE
```

> 此操作只会影响本地账户，不会对远程有任何影响

### 配置 `.git/info/exclude` 文件

如果只是想取消跟踪一个只在本机本地的文件，但是又不想在 `.gitignore` 中留痕。

可以修改 `.git/info/exclude` 文件，此文件只会在本机生效。

这个文件和 `.gitignore` 是相等的，能实现的同样可以实现，不能实现的也不能实现。

区别只在于不上传到远程。

> 此操作同样不会影响到远程。
