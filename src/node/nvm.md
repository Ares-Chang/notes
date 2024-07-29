# NVM

`nvm` 允许您通过命令行快速安装和使用不同版本的 `Node`。

例如:

```sh
$ nvm use 16
Now using node v16.9.1 (npm v7.21.1)
$ node -v
v16.9.1
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6
```

就这么简单！

## 关于

`nvm` 是 [node.js](https://nodejs.org/) 的版本管理器，设计为按用户安装，并按 `shell` 调用。`nvm` 适用于任何符合 `POSIX` 的 `shell`（`sh`、`dash`、`ksh`、`zsh`、`bash`），特别是在以下平台上：`unix`、`macOS` 和 [`Windows WSL`](https://github.com/nvm-sh/nvm#important-notes)。

## 安装

官方提供了安装脚本，可以执行自动安装。

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

如果对安装过程好奇可以查看 [官方文档](https://github.com/nvm-sh/nvm#install--update-script)

## 验证

安装完成后可以使用 `command -v nvm` 验证安装是否成功。

```sh
command -v nvm
```

此命令应返回 `nvm`，如果你收到 `command not found` 或根本没有响应，请关闭当前终端，将其重新打开，然后重试。

或者，您可以在命令行上为不同的 `shell` 运行以下命令：

- bash: `source ~/.bashrc`

- zsh: `source ~/.zshrc`

- ksh: `. ~/.profile`

## 常用指令

### 安装

- 安装最新版本

```sh
nvm install node
```

- 安装指定版本

```sh
nvm install 14.7.0
```

- 安装 LTS 版本

```sh
nvm install --lts
```

### 使用

```sh
nvm use 14.7.0 # 要切换的版本号

# nvm use --lts # 使用 LTS 版本
```

### 查看

- 查看已安装版本

```sh
nvm ls
```

- 查看哪些版本可供安装

```sh
nvm ls-remote
```

### 卸载

```sh
nvm uninstall 14.7.0
```

### 获取可执行文件的安装路径

```sh
nvm which 12.22
```

## 其它工具

虽然 `nvm` 目前是最常用的节点版本管理器，但需要考虑一些替代版本管理器：

- [`n`](https://www.npmjs.com/package/n#installation) 是长期存在的 `nvm` 替代方法，该方法使用略微不同的命令来完成相同的操作，并通过 `npm` 而不是 `bash` 脚本来安装。
- [`fnm`](https://github.com/Schniz/fnm#using-a-script) 是较新的版本管理器，它声称比 `nvm` 快得多。 （它还使用 [`Azure`](https://learn.microsoft.com/zh-cn/azure/devops/pipelines/get-started/what-is-azure-pipelines) 管道。）
- [`Volta`](https://github.com/volta-cli/volta#installing-volta) 是来自 `LinkedIn` 团队的新版本管理器，它声称改进了速度和跨平台支持。
- [`asdf-vm`](https://asdf-vm.com/#/core-manage-asdf-vm) 是适用于多种语言的单个 CLI，例如将 `ike gvm`、`nvm`、`rbenv` 和 `pyenv`（等）整合在一起。
- [`nvs`](https://github.com/jasongin/nvs)（Node 版本切换器）是跨平台的 `nvm` 替代方法，可与 [`VS Code` 集成](https://github.com/jasongin/nvs/blob/master/doc/VSCODE.md)。

其它详情可查看 [官方仓库](https://github.com/nvm-sh/nvm#install--update-script)。
