# 合并分支失败

## 问题

从远程分支合并代码失败,手动合并提交时,代码丢失找不到冲突,再次拉取代码报错: `error: You have not concluded your merge (MERGE_HEAD exists).`

## 解决方法

- 保留本地的更改,中止合并 -> 重新合并 -> 重新拉取

```
git merge --abort
git reset --merge
git pull
```
