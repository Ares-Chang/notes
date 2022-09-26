# 安装 less 的错误处理

## 问题

已经安装完成 `less` `less-loader` 包，在项目中使用的时候，编译报错:

`Module build failed: TypeError: loaderContext.getResolve is not a function`

这个错误是指 `less-loader` 版本过高。

## 解决方法

卸载高版本的 `less-loader` ，重新安装指定版本

```bash
yarn remove less-loader

# npm uninstall less-loader
```

```bash
yarn add less-loader@4.1.0 --save

# npm install less-loader@4.1.0 --save
```
