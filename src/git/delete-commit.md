---
aside: false
---

# 删除某次提交记录

- git revert

```shell
git revert HEAD
git push origin master
```

- git reset

```shell
git reset --hard "commit id"
```

> 注意 revert 和 reset 的区别 :
>
> revert 是放弃指定提交的修改，但是会生成一次新的提交，需要填写提交注释，以前的历史记录都在，而 reset 是指将 HEAD 指针指到指定提交，历史记录中不会出现放弃的提交记录。
