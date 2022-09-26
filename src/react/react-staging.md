# React 脚手架安装

## 脚手架安装

**须知，React 脚手架基于 Node.js 请确保安装环境在线。**

在终端中输入以下命令安装官方脚手架：

```shell
npm install -g create-react-app
# yarn add create-react-app -g
```

安装完成之后执行：

```shell
create-react-app -V
# 成功输出版本号
```

查看是否安装成功

## 项目创建

脚手架安装成功之后执行以下命令创建项目：

```shell
create-react-app hello_world
```

项目创建成功启动项目：

```shell
cd hello_world

yarn start
```

启动成功会占用 `3000` 端口，如果端口已被占用，会提示你:

```shell
? Something is already running on port 3000.
# ? 端口3000上已经运行了一些东西。

Would you like to run the app on another port instead? » (Y/n)
# 你想在另一个端口上运行应用程序吗? » (Y/n)
```

输入 `Y` 之后会延续占用 `3001`,`3002` ....
