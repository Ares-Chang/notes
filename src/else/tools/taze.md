# taze

## 关于

`taze` 一个依赖更新小工具，可以保持项目内依赖处于安全范围内最新。

[它是大神 `antfu`，开发的一款 cli 小工具，点击跳转 GitHub 仓库](https://github.com/antfu/taze)

## 使用方法

### 下载

`taze` 可以通过 `npm` 下载全局使用或通过 `npx taze` 来使用。

```shell
npm install taze -g
```

### 使用

可以使用 `taze` 来打印在指定范围内的最新依赖版本

```shell
taze

# or

taze -r
```

但是此方法只会打印不会自动更新。

如果想要自动更新可以使用：

```shell
taze -wir # 写入文件并下载依赖，递归所以文件
```

### 常用

如果显示的设置最大允许版本，可以设置范围：

- `major` 检查所有变化，并更新最新稳定版本

- `minor` 检查同一个主要版本中，最新的一此小变化

```shell
# 最新稳定版
taze major -wir

# 同一主版本中，最新小版本
taze minor -wir
```

### 详细属性

想要了解详细属性可以通过 `taze --help` 来查看帮助文档。

```shell
taze --help

taze [args]

命令：
  taze usage      列出 packages 中使用的依赖包
  taze [mode]     保持您的 deps 最新                                [默认值]

位置：
  mode  版本范围解析的模式, 可选值 "default", "major", "minor", "latest" or "newest"
  [字符串] [可选值: "default", "major", "minor", "patch", "latest", "newest"] [默认值: "default"]

选项：
  -C, --cwd          指定当前工作目录                               [字符串] [默认值: ""]
      --loglevel     日志级别
          [字符串] [可选值: "debug", "info", "warn", "error", "silent"] [默认值: "error"]
  -s, --silent       完整的 silent                                 [布尔] [默认值: false]
  -r, --recursive    在 package.json 中递归搜索子目录               [布尔]
  -f, --force        强制从服务器获取，绕过缓存                      [布尔]
  -n, --include      只有包含的依赖项才会被检查更新                  [字符串]
  -x, --exclude      排除要检查的依赖项，将会覆盖 --包括选项          [字符串]
  -D, --dev          只更新 devDependencies                        [布尔]
  -P, --prod         只更新 dependencies                           [布尔]
  -w, --write        写入到 package.json                           [布尔] [默认值: false]
  -i, --install      碰撞后直接安装                                 [布尔] [默认值: false]
  -u, --update       碰撞后直接更新                                 [布尔] [默认值: false]
  -p, --prompt       更新检查后提示是否写入文件
                                                                   [布尔] [默认值: false]
      --outputRange  输出版本范围，可选值 "fixed", "major", "minor" or "patch"
                                                              [字符串] [默认值: "preseve"]
      --guard        如果存在现有的升级，则使用非零代码退出
                                                                    [布尔] [默认值: false]
  -a, --all          显示所有最新的包信息         [布尔] [默认值: false]
  -h, --help         显示帮助信息                                    [布尔]
  -v, --version      显示版本号                                      [布尔]
```

以上只介绍了一些我常用的方法，如果想看详细功能，可以访问 [@antfu/taze](https://github.com/antfu/taze) 进行查看。
