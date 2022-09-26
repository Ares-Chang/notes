# Git 常用命令

## 基本提交流程

1. 初始化一个仓库 `git init` 只做一次就可以，会自动创建一个隐藏的.git 文件夹

2. 把工作区修改，保存提交到暂存区 `git add .`

3. 从暂存区提交到仓库 `git commit -m [本次改动说明]`

## 查看信息

- 查看 `git log` 查看从当前版本开始，到第一次的提交记录

- 查看所有记录 `git reflog` 查看所有的，历史提交记录,包含已恢复信息

- 查看当前状态 `git status`

## 查看修改内容

- `git diff` 查看工作区(work dict)和暂存区(stage)的区别

## 版本回退 && 恢复文件

恢复 `git checkout` 从仓库恢复对应版本

- 从工作区恢复

```shell
	git checkout -- 文件名	// 恢复单个文件
	git checkout .			// 恢复全部文件
```

- 从暂存区恢复

```shell
	git reset HEAD 文件名	// 恢复单个文件
	git reset HEAD 			// 恢复全部文件
```

- 从仓库恢复

```shell
	git checkout 提交的流水号（只写一部分都行） 文件名	// 恢复单个文件
	git reset --hard 提交的流水号（只写一部分都行）	// 恢复全部文件
	git reset --hard HEAD^							// 恢复全部文件
```

> HEAD 表示当前版本，也就是最新的提交
>
> HEAD^ 上一个版本
>
> HEAD^^ 上上一个版本
>
> HEAD~100 往上 100 个版本

## 查看命令历史

`git reflog` 会打印从当前版本到最开始的所有记录和 `HEAD@{num}` ，搭配 `git reset` 使用来用做版本回退.

## 分支

### 查看分支

- 查看本地所有分支 `git branch`
- 查看远程所有分支 `git branch -a`

> 远程分支会用红色表示出来（如果你开了颜色支持的话）

### 切换分支

- 切换分支 `git chechout 分支名`
- 新建并切换分支 `git chechout -b 分支名`

### 新建分支

- 添加新分支 `git branch 分支名`

### 删除分支

- 删除本地分支 `git branch -d 分支名`

> 删除分支不会删除代码

- 删除远程分支

方法一：--delete 删除远程分支

```shell
git push origin --delete 分支名
```

方法二：推送一个空分支到远程分支，其实就相当于删除远程分支

```shell
git push origin :分支名
```

### 合并分支

- 合并分支 `git merge 分支名` 把指定分支合并到当前分支

- 变基 `git rebase 分支名` 也可以合并分支记录，但当前分支记录会在最前面

> `git rebase` 相对 `git merge` 来说 commit 记录会更加的清爽一些
>
> 但是工作中大多数使用 `git merge` 来完成操作
>
> 想要了解具体内容自行 Google

### 拉取远程分支

- 拉取并合并

可以使用 `git pull` 拉取当前分支远程代码并合并到本地

- 仅拉取

可以使用 `git fetch origin` 拉取远程所有分支代码但不会合并，需要手动合并

如果想要拉取其他分支远程，可以使用 `git fetch origin 分支名`

- 拉取并创建一个新的分支

创建新分支并不会和本地代码冲突，所以使用 `git pull` 或 `git fetch` 都是可以的

```shell
git pull origin [远程分支名]:[本地分支名]

git fetch origin [远程分支名]:[本地分支名]
```

- 拉取远程其他分支并在本地创建相同分支可以使用：

```shell
git checkout -b 本地分支名 origin/远程分支名
```

- 拉取远程其他分支且合并到本分支

```shell
git pull origin 远程分支名
```

## 查看仓库代码区别

- `git diff` 不加参数即默认比较工作区与暂存区代码不同并罗列出来

## 克隆仓库

从远程 GitHub 上下载仓库

- `git clone [地址]`
