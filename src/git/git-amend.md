---
aside: false
---

# 覆盖上次提交内容

每次提交完成代码之后,发现某个地方有问题或者 commit 信息有误，但是我们又不想再添加一条记录。

这时我们只需要再次完成修改重新提交:

```shell
git add .
git commit --amend "commit 内容"
```

这时 commit 记录就会被覆盖，这个方法也可以单纯的用来修改 commit 记录
