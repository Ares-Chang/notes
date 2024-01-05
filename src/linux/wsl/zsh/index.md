# 安装 Zsh

```sh
sudo apt-get install zsh
```

安装后执行切换指令，切换到指定 Shell 后，**进行重启**。

```sh
chsh -s /bin/zsh
```

重启后会提示新用户程序。

```sh
This is the Z Shell configuration function for new users,
zsh-newuser-install.
You are seeing this message because you have no zsh startup files
(the files .zshenv, .zprofile, .zshrc, .zlogin in the directory
~).  This function can help you with a few settings that should
make your use of the shell easier.

You can:

(q)  Quit and do nothing.  The function will be run again next time.

(0)  Exit, creating the file ~/.zshrc containing just a comment.
     That will prevent this function being run again.

(1)  Continue to the main menu.

(2)  Populate your ~/.zshrc with the configuration recommended
     by the system administrator and exit (you will need to edit
     the file by hand, if so desired).

--- Type one of the keys in parentheses ---
```

根据自己的需求进行选择。

> 可以 `q` 或者 `1` 退出，因为后续安装 `Oh My Zsh` 会覆盖 `zsh` 的配置。

## 其它命令

### 查看当前系统的 Shell

```sh
echo $SHELL
```

### 查看系统安装的 Shell

```sh
cat /etc/shells
```

### 切换 Shell

```sh
chsh -s /bin/zsh
```
