# Module not found 找不到模块

## 问题

今天调试 [`Jenkins`](https://www.jenkins.io/) 持续集成工具遇到问题。

项目在自己电脑上运行打包正确，但是在服务器运行打包命令之后报错找不到模块：

```shell
Module not found: Error: Can't resolve '@/components/setup/applet' in '/shells/dev/web_front/xxx/src/router'
```

## 解决方法

经过一顿好找，锁定了问题产生原因：

是因为 `applet` 文件命名时使用的是大写 `Applet`，

但是在引入使用的时候写的是小写 `applet`。

加之 Windows 端并没有强类型检查，打包的时候不会检测大小写，就没有发现这个问题。

但是在 Linux 端这个问题暴露了出来。

**紧记，文件命名要规范。写时一时爽，找时跑断腿。**
