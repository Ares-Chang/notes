---
index: 3
---

# Git 三大分区

## 介绍

git 常用命令大部分是基于三大分区来执行的。先来了解一些专有名词吧。

- 工作区，也叫 Working Directory
- 暂存区，也叫 stage，index
- 版本库，也叫本地仓库，commit History

当我们建立一个 git 仓库就有了这三个概念。

## 工作区

显而易见，工作区就是我们平时编辑代码的区域。对于一些新增或编辑过的文件，如果没有被 add 添加到暂存区就会以红色形式显示在工作区。

## 暂存区

数据暂时存放的区域。当文件在工作区被 add 后就会存放在暂存区，相当于放入仓库前的检查，如果想要反悔修改还是可以操作的。

## 版本库

版本库就是一个本地存放并记录的仓库。数据在暂存区被 commit 提交到仓库中就会产生记录，留下痕迹。只有在 push 的时候才会提交到远程仓库中。
