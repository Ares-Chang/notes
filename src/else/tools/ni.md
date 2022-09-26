# ni

## 关于

由于 `Vue 3` 把包管理器从 `yarn` 切换到了 [`pnpm`](https://pnpm.io/zh/)，`pnpm` 进入了我的认知。

但是由于我的项目对包管理器的性能需求并没有那么强烈，而 `pnpm` 对我又没有从 `npm` 到 `yarn` 时那么强烈的吸引力。

虽然日常使用过一两次，但我并没有强烈更换的想法。

这时看到了[贡献文档](https://github.com/vuejs/core/blob/main/.github/contributing.md#development-setup)中提到了一个叫做 [`ni`](https://github.com/antfu/ni) 的工具

::: tip
We also recommend installing ni to help switching between repos using different package managers. ni also provides the handy nr command which running npm scripts easier.
:::

`ni` 是由 Vue core team 成员 [antfu](https://github.com/antfu) 小哥开发，[这是仓库链接](https://github.com/antfu/ni)

`ni` 的出现抹平了各个包管理器的语法差异，可以统一使用一种语法进行安装、卸载、更新等操作。

## [How?](https://github.com/antfu/ni#how)

`ni` 假设您使用的是锁文件(并且您应该这样做)

在运行之前，它会检测您的 `yarn.lock` / `pnpm-lock.yaml` / `package-lock.json` 以了解当前的包管理器，并运行相应的命令。

## 使用方法

### 全局安装

```shell
npm i -g @antfu/ni
```

### `ni` - install

```shell
ni

# npm install
# yarn install
# pnpm install
```

```shell
ni axios

# npm i axios
# yarn add axios
# pnpm add axios
```

```shell
ni @types/node -D

# npm i @types/node -D
# yarn add @types/node -D
# pnpm add -D @types/node
```

```shell
ni -g iroiro

# npm i -g iroiro
# yarn global add iroiro
# pnpm add -g iroiro

# 这将使用默认代理，而不考虑当前工作目录
```

### `nr` - run

```shell
nr dev --port=3000

# npm run dev -- --port=3000
# yarn run dev --port=3000
# pnpm run dev -- --port=3000
```

```shell
nr

# 交互式地选择要运行的脚本，罗列出所有可执行命令
# supports https://www.npmjs.com/package/npm-scripts-info convention
```

```shell
nr -

# 重新运行最后一个命令
```

### `nx` - execute

```shell
nx jest

# npx jest
# yarn dlx jest
# pnpm dlx jest
```

### nu - upgrade

```shell
nu

# npm upgrade
# yarn upgrade
# pnpm update
```

```shell
nu -i

# (not available for npm)
# yarn upgrade-interactive
# pnpm update -i
```

### `nun` - uninstall

```shell
nun axios

# npm uninstall axios
# yarn remove axios
# pnpm remove axios
```

```shell
nun @types/node -D

# npm uninstall @types/node -D
# yarn remove @types/node -D
# pnpm remove -D @types/node
```

### `nci` - clean install

```shell
nci

# npm ci
# yarn install --frozen-lockfile
# pnpm install --frozen-lockfile
```

如果不存在相应的节点管理器，此命令将在整个过程中全局安装它。

### `na` - agent alias

```shell
na

# npm
# yarn
# pnpm
```

```shell
na run foo

# npm run foo
# yarn run foo
# pnpm run foo
```

### Change Directory

```shell
ni -C packages/foo vite
nr -C playground dev
```

### Config

```ini
; ~/.nirc

; fallback when no lock found
defaultAgent=npm # default "prompt"

; for global installs
globalAgent=npm
```

```shell
# ~/.bashrc

# 自定义配置文件路径
export NI_CONFIG_FILE="$HOME/.config/ni/nirc"
```

## 故障排除

`ni` 包与 Windows PowerShell 有冲突

PowerShell 有一个内置的新项目别名`ni`。要删除此包的别名：

::: details PowerShell 5.x

创建或编辑文件 C:\Windows\System32\WindowsPowerShell\v1.0\Microsoft.PowerShell_profile.ps1, 添加以下行:

```shell
Del alias:ni -Force
```

:::

::: details PowerShell 7.x

创建或编辑文件 C:\Program Files\PowerShell\7\Microsoft.PowerShell_profile.ps1, 添加以下行:

```shell
Remove-Alias -Name ni -Force
```

:::

以上内容皆摘录自 [`ni` 仓库文档](https://github.com/antfu/ni#ni)，所见即所得写法，很小清新。
