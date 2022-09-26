# VSCode 在 60s 内无法连接到模拟器

## 问题

今天打开 VSCode 调试 Flutter 项目，发现程序激活了 emulator 但是无法打开项目。

尝试关闭，重启多次未果，发现 Dart 插件报错：

```
Error: Emulator didn't connect within 60 seconds	// 错误:模拟器没有在60秒内连接
```

## 解决方法

多种方法尝试无果，想到是否需要重新创建模拟器尝试。

幸亏查询到一个朋友遇到了和我一样的问题，帖子回复内容给了我一部分启发但未完全解决。

附赠[问题原贴](https://stackoverflow.com/questions/55677874/failed-to-launch-emulator-error-emulator-didnt-connect-within-60-seconds)，如果需要请点击查看。

### 解决思路

**下文为我的问题的具体解决思路，如果遇到相同问题可以参考，但不确保全部管用：**

因为我的模拟器是通过 Android Studio 安装的，同时参考了[上方朋友的回复](https://stackoverflow.com/questions/55677874/failed-to-launch-emulator-error-emulator-didnt-connect-within-60-seconds),

所以我尝试在 Android Studio 中停止了该模拟器，

同时抹除了模拟器的数据，并于 VSCode 中启动调试，重新安装该程序。

这次重启正常打开 APP 程序，完美解决问题。

### 具体操作流程

- 打开 Android Studio 点击 Tools -> AVD Manager。

- 选择无法正常使用的模拟器，点击 Actions 中向下的三角。

- 如模拟器未关闭，选择 Stop，先关闭 emulator。

- 关闭之后可以选择 Wipe Data 抹除用户数据信息。

完成以上操作，在 VSCode 中重新启动调试，应该就可以解决问题。
