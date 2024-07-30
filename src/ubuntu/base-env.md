# 基础环境配置

以下列出为个人 Ubuntu 系统基础环境配置。

> 建议按步骤顺序执行 (当然你可以不听建议 😈)

## 更新包及软件

```sh
sudo apt update && sudo apt upgrade -y
```

> `-y` 代表在执行期间，对于需要确认的提示自动回答“Yes”

## curl

`curl` 是一个命令行工具，用于下载文件，以下程序中部分需要使用 `curl` 进行下载安装

```sh
sudo apt install curl -y
```

## Nvim or Vim

个人选择 Neovim，如果对版本要求不激进可以直接 `apt` 安装，否则详见 [Neovim 安装指引](https://github.com/neovim/neovim/blob/master/INSTALL.md)

```sh
sudo apt install neovim -y
```

`Ubuntu` 默认安装 `vi` 可直接使用，如果要安装 `vim` 可以使用下面命令

```sh
sudo apt install vim -y
```

::: tip 选什么选，我当然选择全都要！😁

```sh
sudo apt install neovim vim -y
```

:::

## SSH

安装 SSH 方便远程操作，详见 [SSH 安装](../linux/install-ssh.md)。

## Git

开发必备

```sh
sudo apt install git -y
```

## Zsh

安装 Zsh，详见 [安装 Zsh](../wsl/zsh/index.md)

## Oh My Zsh

安装 Oh My Zsh，详见 [Oh My Zsh](../wsl/zsh/oh-my-zsh.md)

## nvm

> 不需要 Node 环境可跳过

安装 nvm，详见 [nvm 使用](../node/nvm.md)

## VS Code

开发必备，[详细文档](https://code.visualstudio.com/docs/setup/linux)。

三个安装方案：

1. 使用 `snap` 进行安装，优点可自动更新(推荐)

```
sudo snap install code --classic
```

2. 将 [.deb package (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760868)，安装包下载到本地并运行以下进行安装。

```
sudo apt install ./<file>.deb

# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
```

> 安装 `.deb` 包将自动安装 `apt` 仓库和签名密钥，以启用使用系统的包管理器进行自动更新。

3. 手动安装存储库和密钥

```sh
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
rm -f packages.microsoft.gpg
```

然后更新包缓存并使用以下命令安装包：

```sh
sudo apt install apt-transport-https
sudo apt update
sudo apt install code # or code-insiders
```
