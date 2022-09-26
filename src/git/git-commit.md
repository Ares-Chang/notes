---
outline: [2, 4]
---

# git commit 规范

## 提交规范

简洁明了的 commit 可以让你快速了也解情况，了解本次提交发生了什么。

按照规定来完成，`commit messages` 由 header 、body 、footer 三部分组成。

header 又包含 type 、scope 、subject 。header 是必需的，不过其中的 scope 是可选的。

body 和 footer 可以省略。

```
<type>(<scope>): <subject>
// 空行
<BLANK LINE>
<body>
// 空行
<BLANK LINE>
<footer>
```

> ps: 注：为了能在 github 以及各种 git 工具中看得更清晰，`commit messages` 的每一行都不要超过 100 个字符。

### Header

#### Type

只能是下列几种类型之一:

- feat: 新功能
- fix: bug 修复
- docs: 仅修改文档
- style: 修改格式（空格，格式化，省略分号等），对代码运行没有影响
- refactor: 重构（既不是修 bug ，也不是加功能）
- build: 构建流程、外部依赖变更，比如升级 npm 包、修改 webpack 配置等
- perf: 性能优化
- test: 测试相关
- chore: 对构建过程或辅助工具和库（如文档生成）的更改
- ci: ci 相关的更改

除此之外，还有一个特殊的类型 revert ，如果当前提交是为了撤销之前的某次提交，应该用 revert 开头，后面加上被撤销的提交的 header，在 body 中应该注明： `This reverts commit <hash>.`，hash 指的就是将要被撤销的 `commit SHA` 。

**例如：**

```
revert: feat(user): add user type

This reverts commit ca16a365467e17915f0273392f4a13331b17617d.
```

#### Scope

scope 可以指定提交更改的影响范围，这个视项目而定，当修改影响超过单个的 scope 时，可以指定为 \*

#### Subject

subject 是指更改的简洁描述，长度约定在 50 个字符以内，通常遵循以下几个规范：

- 用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes
- 第一个字母小写
- 结尾不加句号（.）

### Body

body 部分是对本地 commit 的详细描述，可以分成多行。

跟 subject 类似，用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes。

body 应该说明修改的原因和更改前后的行为对比。

### Footer

footer 基本用在这两种情况：

- 不兼容的改动（ Breaking Changes ）,通常用 BREAKING CHANGE: 开头，后面跟一个空格或两个换行符。剩余的部分就是用来说明这个变动的信息和迁移方法等。

- 关闭 Issue。

[阅读原文](https://juejin.im/post/6854573220176068615)
