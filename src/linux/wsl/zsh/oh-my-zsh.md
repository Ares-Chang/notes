# Oh My Zsh !!!

终极 Shell 解决方案 [Oh My Zsh](https://ohmyz.sh/)。

## 安装

`zsh` 中执行以下命令安装

::: code-group

```sh [GitHub]
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```sh [镜像]
sh -c "$(curl -fsSL https://install.ohmyz.sh/)"
```

:::

> 由于下载链接在 `github` 上，墙内可能安装失败，可以尝试使用 `ohmyzsh镜像` 安装。

安装成功后会在 `~` 目录下创建 `.zshrc` 配置文件，以后会经常使用。

> `.zshrc` 文件修改后需要重新加载 `zsh`，才能生效。
>
> [官方推荐](https://github.com/ohmyzsh/ohmyzsh/wiki/FAQ#how-do-i-reload-the-zshrc-file)使用 `omz reload` 进行 reload，应避免使用 `source ~/.zshrc`。

## 命令

`ohmyzsh` 有很多命令，但并不常用，想要了解可以通过 `omz --help` 命令来查看。

```sh
➜  ~ omz --help
Usage: omz <command> [options]

Available commands:

  help                Print this help message
  changelog           Print the changelog
  plugin <command>    Manage plugins
  pr     <command>    Manage Oh My Zsh Pull Requests
  reload              Reload the current zsh session
  theme  <command>    Manage themes
  update              Update Oh My Zsh
  version             Show the version
```

## 插件

必开插件推荐:

- 安装内置，须手动开启
  - z - 跳转常用目录
  - git - 内置一些 git 命令别名
  - aliases - 可以分组查看别名信息
- 须安装第三方插件
  - [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) - 命令行语法高亮
  - [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) - 命令自动补全

以上为必开插件，谁用谁迷糊！

第三方插件克隆 git 仓库到 `$ZSH_CUSTOM/plugins`(默认为 `~/.oh-my-zsh/custom/plugins`) 文件夹下，视为安装。

## 主题

更换主题只需要把 `.zshrc` 中的 `ZSH_THEME` 设置为想要的主题即可。

如果根本第三方主题，需要安装到 `$ZSH_CUSTOM/themes`，同插件。

## 别名

系统内置了一些内置别名，可以通过 `alias` 命令查看。

如果开启了 `aliases` 插件，可以通过 `als` 命令分组查看。

想要自己设置一部分别名，可以在 `.zshrc` 文件中添加，如:

```sh [.zshrc]
alias cmua='vim ~/.zshrc'
alias cls='clear'
```

重启后命令即生效。

## 我的配置

- [我正在使用的](https://github.com/Ares-Chang/use)
- [我的 `.zshrc` 配置](https://github.com/Ares-Chang/.config/blob/master/.zshrc)

## 有趣的命令

以下命令为 `ohmyzsh` 创建，只能在 `ohmyzsh` 中使用。

- `mkcd` - 创建并切换目录
- `zsh_stats` - 列出前 20 个使用频率最高的命令
- `take` - 功能类似 `mkcd` (可以完成替代)，不过 `take` 可以识别远程 `URL` 信息。