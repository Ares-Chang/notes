# Git 常用命令

## 基本提交流程

1. 初始化一个仓库 `git init` 只做一次就可以，会自动创建一个隐藏的.git文件夹

2. 把工作区修改，保存提交到暂存区 `git add .`

3. 从暂存区提交到仓库 `git commit -m [本次改动说明]`

## 查看信息

- 查看 `git log` 查看从当前版本开始，到第一次的提交记录

- 查看所有记录 `git reflog` 查看所有的，历史提交记录,包含已恢复信息

- 查看当前状态 `git status`

## 恢复文件

恢复 `git checkout` 从仓库恢复对应版本

- 从工作区恢复

```js
	git checkout -- 文件名	// 恢复单个文件
	git checkout .			// 恢复全部文件
```

- 从暂存区恢复

```js
	git reset HEAD 文件名	// 恢复单个文件
	git reset HEAD 			// 恢复全部文件
```

- 从仓库恢复

```js
	git checkout 提交的流水号（只写一部分都行） 文件名	// 恢复单个文件
	git reset --hard 提交的流水号（只写一部分都行）		// 恢复全部文件
```

## 分支

- 查看所有分支 `git branch`
- 添加新分支 `git branch 分支名`
- 切换分支 `git chechout 分支名`
- 新建并切换分支 `git chechout -b 分支名`
- 删除分支 `git branch -d 分支名`	删除分支不会删除代码
- 合并分支 `git merge 分支名`	把指定分支合并到当前分支

## 克隆仓库

从远程GitHub上下载仓库

- `git clone [地址]`
