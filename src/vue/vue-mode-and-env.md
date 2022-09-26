# Vue 中模式及环境变量配置

## 关于

项目但烦涉及到请求之类的肯定会了解，设置一个 `BASE_URL` 的重要性。

如果不会设置并且只想要简单的配置一下直接使用的话可以看下之前的 [Vue 配置多环境接口地址](./vue-env)

霸特！并不推荐使用，之前的配置比较简单，不安全并且并没有用到脚手架提供的便捷。

有简单的为什么不用呢？？？谁会和简单过意不去。

## 模式

**模式**是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：

- `development` 模式用于 `vue-cli-service serve` 启动开发环境
- `test` 模式用于 `vue-cli-service test:unit` 实现单元测试
- `production` 模式用于 `vue-cli-service build` 和 `vue-cli-service test:e2e` 实现打包生产环境

你可以通过传递 `--mode` 选项参数为命令行覆写默认的模式。例如:

```json
"serve": "vue-cli-service serve",
"dev": "vue-cli-service serve --mode dev",	// 自定义运行，此模式需要自行创建 .env.dev 文件
"build": "vue-cli-service build",
"build:test": "vue-cli-service build --mode development",	// 自定义打包，使用开发配置文件
```

当运行 `vue-cli-service` 命令时，所有的环境变量都从对应的环境文件中载入。如果文件内部不包含 `NODE_ENV` 变量，它的值将取决于模式，例如，在 `production` 模式下被设置为 `"production"`，在 `test` 模式下被设置为 `"test"`，默认则是 `"development"`。

`NODE_ENV` 将决定您的应用运行的模式，是开发，生产还是测试，因此也决定了创建哪种 `webpack` 配置。

::: warning NODE_ENV
如果在环境中有默认的 `NODE_ENV`，你应该移除它或在运行 `vue-cli-service` 命令的时候明确地设置 `NODE_ENV`。
:::

## 环境变量

### 文件名

环境变量需要对应的环境变量文件来引入到脚手架中来。

你可以在你的项目根目录中放置下列文件来指定环境变量：

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

`mode` 的值可以根据你需要的模式来进行配置，

默认提供了 `development`、`test`、`production` 等脚手架配置。

如上例 [模式](#模式) 中，创建了一个 `dev` 环境，但是匹配不上对应的默认文件，只能我们自行创建一个 `.env.dev` 文件来写入自定义配置。

> **PS：默认配置文件可被覆写，只需要创建对应模式文件就可以。**

### 内容

`.env` 文件中的环境变量为**键值对**模式，如：

```sh
FOO = bar
VUE_APP_NOT_SECRET_CODE = some_value
```

::: danger 注意：

环境变量会随着构建打包嵌入到输出代码，意味着任何人都有机会能够看到它。

不要在你的应用程序中存储任何机密信息（例如私有 API 密钥）！

:::

并且，**只有 `NODE_ENV`，`BASE_URL` 和以 `VUE_APP_` 开头的变量将通过 `webpack.DefinePlugin` 静态地嵌入到客户端侧的代码中**。这是为了避免意外公开机器上可能具有相同名称的私钥。

**注意：如果要想在代码中使用环境变量，请以 `VUE_APP_` 开头！！！**

### 加载优先级

::: tip 环境文件加载优先级

为一个特定模式准备的环境文件 (例如 `.env.production`) 将会比一般的环境文件 (例如 `.env`) 拥有更高的优先级。

此外，`Vue CLI` 启动时已经存在的环境变量拥有最高优先级，并不会被 `.env` 文件覆写。

`.env` 环境文件是通过运行 `vue-cli-service` 命令载入的，因此环境文件发生变化，你需要重启服务。

:::

## 在客户端中使用环境变量

只有**以 `VUE_APP_` 开头的变量会被 `webpack.DefinePlugin` 静态嵌入到客户端侧的包中**。你可以在应用的代码中这样访问它们：

```js
console.log(process.env.VUE_APP_SECRET)
```

在构建过程中，`process.env.VUE_APP_SECRET` 将会被相应的值所取代。在 `VUE_APP_SECRET=secret` 的情况下，它会被替换为 `"secret"`。

除了 `VUE_APP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

- `NODE_ENV` - 会是 `"development"`、`"production"` 或 `"test"` 中的一个。具体的值取决于应用运行的[模式](#模式)。
- `BASE_URL` - 会和 `vue.config.js` 中的 `publicPath` 选项相符，即你的应用会部署到的基础路径。

所有解析出来的环境变量都可以在 `public/index.html` 中以 [HTML 插值](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E6%8F%92%E5%80%BC)中介绍的方式使用。

## 结尾

文章摘录自 [Vue CLI 官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)，原文文档内容讲的非常的细致。并且还有许多我没有摘录过来的细枝末节，如果兴趣可以自行查看。

本文没有提供详细的代码案例，但是如果仔细看完文档会发现，实现环境变量非常简单，只是创建几个文件的事情。

如果实在没看明白就去[官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)多看几遍，可能是我摘录的问题 🤪。
