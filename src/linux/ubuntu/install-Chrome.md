# 安装 Chrome

## 安装

Chrome 不是开放源代码浏览器，它也不包含在标准 Ubuntu 存储库中。在 Ubuntu 上安装 Chrome 浏览器是一个非常简单的过程。我们将从官方网站下载安装文件，然后从命令行进行安装。

1. 下载谷歌浏览器

打开终端，使用 wget 下载最新的 Google Chrome .deb 软件包：

```shell
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

2. 安装 Google Chrome

在 Ubuntu 上安装软件包需要管理权限。以具有 sudo 特权的用户身份运行以下命令，以.deb 在系统上安装 Chrome 软件包：

```shell
sudo apt install ./google-chrome-stable_current_amd64.deb
```

出现提示时，输入您的用户密码，安装将开始。

至此 Chrome 已经安装完成，打开使用即可。

## 更新

在安装过程中，正式的 Google 存储库将添加到您的系统中。您可以使用以下 cat 命令来验证文件内容：

```shell
cat /etc/apt/sources.list.d/google-chrome.list
```

输出将如下所示：

```shell
### THIS FILE IS AUTOMATICALLY CONFIGURED ###
# You may comment out this entry, but any other modifications may be lost.
deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main
```

这样可以确保在通过桌面标准软件更新工具发布新版本时，您的 Google Chrome 安装会自动更新。
