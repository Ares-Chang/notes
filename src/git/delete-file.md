# 删除远程仓库中的文件

## 问题

在上传项目到 github 时忘记忽略某个文件,但这个文件只是在本地当个配置文件使用,但是文件已经上传,已经有了记录,所以 .gitignore 不生效,所以我们需要删除远程仓库中的文件.

## 解决方法

- 使用 git rm 来删除文件或文件夹

```shell
git rm --cached fileName  # fileName ==> 文件名
git rm -r --cached folderName  # folderName ==> 文件夹名
git commit -m '删除了文件'      # 提交,添加操作说明
git push -u origin master  # 提交记录到远程
```

> ps: git rm --cached 指令只会删除仓库中的记录并不会真实删除文件。
>
> 记的及时提交到远程仓库哦~
