# 开始

以下安装环境基于 `Win + Wsl2` 环境，其它环境可参考 [Docker 官方文档](https://docs.docker.com/)

## 安装并验证

1. 查看 [下载页面](https://docs.docker.com/desktop/install/windows-install/) 下载 Docker Desktop for Windows
2. 按照通常的安装说明安装 Docker Desktop。根据你使用的 Windows 版本，Docker Desktop 可能会在安装过程中提示你打开 WSL 2。阅读屏幕上显示的信息并打开 WSL 2 功能以继续。
3. 启动 Docker Desktop，打开 "设置" 面板。
4. 在 "常规" 选项卡中，选择 "使用基于 WSL 2 的引擎"。
5. 应用并重新启动。
6. 若要验证是否安装成功，可以启动 `WSL`，运行 `docker --version`，以查看版本号。
7. 通过使用 `docker run hello-world` 运行简单的内置 Docker 映像，测试安装是否正常工作
