# nrm

## 介绍

nrm 是一个 NPM 源管理器，允许你快速地在如下 NPM 源间切换：

- [npm](https://www.npmjs.com/)
- [cnpm](https://cnpmjs.org/)
- [strongloop](https://strongloop.com/)
- [european](http://npmjs.eu/)
- [australia](http://npmjs.org.au/)
- [nodejitsu](https://www.nodejitsu.com/)
- [taobao](http://npm.taobao.org/)

toabao 和 cnpm 镜像源在国内的下载速度相对快一点，推荐使用。

## 安装

```bash
# yarn add nrm -g
npm i -g nrm
```

`nrm -V` 查看是否安装成功

```bash
nrm -V
```

安装成功，显示版本号

```bash
1.2.1
```

## 使用

`nrm ls` 命令可以列出所有可供选择的源

```bash
nrm ls
```

显示带 \* 的是当前正在使用的源。

```bash
* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

## use 切换

使用 `nrm use <源>` 切换到对应的源

```bash
nrm use taobao
```

显示

```bash
Registry has been set to: https://registry.npm.taobao.org/
```

出现这句话就表示切换成功，再 ls 列出就已经在 taobao 镜像源选项了

```bash
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

## 增加源

你可以增加一个你想要的源地址。

```bash
# reigstry 为源名，url 为源的路径，home 为源的主页(可不写)。
nrm add  <registry> <url> [home]
```

## 删除源

想要删除一个源的地址

```bash
# reigstry为源名.
nrm del <registry>
```

## 测试速度

你还可以通过 `nrm test` 测试相应源的响应时间。

```bash
  npm ---- 3289ms
  yarn --- 2482ms
  cnpm --- 919ms
* taobao - 1318ms
  nj ----- Fetch Error
  npmMirror  2375ms
  edunpm - Fetch Error
```

可以多方比较，选中速度较快的一个镜像源。
