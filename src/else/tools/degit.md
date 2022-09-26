# degit

## 关于

[`degit`](https://github.com/Rich-Harris/degit) 是一个 GitHub 仓库下载工具，区别于 `git clone`，`degit` 下载的仓库并不包含 `.git` 文件夹。

`degit` 会在 `https://github.com/some-user/some-repodegit` `some-user/some-repo (用户名/仓库名)` 上查找最新的提交，如果本地不存在相关的 `tar` 文件，将会进行下载。

[点击跳转 GitHub 仓库](https://github.com/Rich-Harris/degit)

## 应用场景

由于 `degit` 下载的仓库未包含 git 跟踪，多被用做下载社区模板仓库，为项目初始化。

## 为什么不是 `git clone --depth 1`

`degit` 与之对比有几大区别：

- 没有 `.git` 文件夹，代表着**不用手动删除或重置**，可以直接 `git init`。
- `degit` 在实现时增加了缓存策略，在有些情况下不需要重复下载代码，速度更快。
- **键入命令更少**（使用 `degit user/repo` 而不是 `git clone --depth 1 git@github.com:user/repo`）
- 灵活度更高，如前后置操作如 `actions` 的支持
- 更好的可扩展性，未来可以在 `degit` 基础上实现交互等更复杂的设计

**个人觉得，懒才是程序员第一生产力。**

## 注意

::: danger
`degit` 只支持 `GitHub`、`GitLab`、`BitBucket` 等，并不支持国内 `gitee` 或 私有云 等。请斟酌使用。
:::

## 使用方法

### 全局安装

```shell
npm install -g degit
```

### 下载仓库

`degit` 后跟 `用户名/仓库名` 进行下载

```shell
degit user/repo

# 等于这此命令
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo
```

### 其他云平台下载

```shell
# GitLab 下载
degit gitlab:user/repo
degit git@gitlab.com:user/repo
degit https://gitlab.com/user/repo

# BitBucket 下载
degit bitbucket:user/repo
degit git@bitbucket.org:user/repo
degit https://bitbucket.org/user/repo

# Sourcehut 下载
degit git.sr.ht/user/repo
degit git@git.sr.ht:user/repo
degit https://git.sr.ht/user/repo
```

### 指定 分支/tag/commit hash 下载

仓库后添加 `#` 号，可以指定仓库 `branch`、`tag`、`commit hash`

```shell
degit user/repo#dev       # 指定 branch
degit user/repo#v1.2.3    # 指定 release tag
degit user/repo#1234abcd  # 指定 commit hash
```

### 下载到特定文件夹 ❗❗❗

由于 `degit` 下载会默认下载到当前文件夹。

如果不 `cd` 到特定目录，下载的文件会**散落一地**。

`degit` 仓库名后还可以添加目标文件夹，可以免去 `cd` 指令，直接新建并下载到指定文件夹。

```shell
degit user/repo my-new-project  # 新建并下载到 my-new-project 文件夹
```

### 指定下载子目录

要下载的只是仓库中的某个目录页不是整体，可以在仓库后添加目录名称

```shell
degit user/repo/subdirectory  # 下载仓库下 subdirectory 文件夹内容
```

### 私有仓库

可以通过指定 `--mode=git` 来克隆私有仓库 `tar`。在这种模式下，`degit` 将在后台使用 `git`。

它比获取 `tarball` 慢得多，这就是它不是默认设置的原因。

注意：这通过 SSH 克隆，而不是 HTTPS。注意密钥的设置。

[点击查看 GitHub 仓库文档](https://github.com/Rich-Harris/degit)
