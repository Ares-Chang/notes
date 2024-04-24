# 常用命令

- [启动](#start) - 启动系统
- [`-l -v`](#verbose-v) - 列出系统详细信息
- [`--shutdown`](#shutdown) - 关闭所有系统

以上所列出仅为常用指令，其余的请学习使用 [`--help`](#help)

## `--help`

会了它，你就可以仗剑走天下了。双语文档，你值得拥有！

```shell
wsl --help
```

## `--install`

安装指令，默认安装 Ubuntu 发行版，其它可参考 [安装 WSL](https://learn.microsoft.com/zh-cn/windows/wsl/install)

## `--update`

更新 `WSL`

```shell
wsl --update
```

## `--status`

检查 `WSL` 状态

```shell
wsl --status
```

```sh
默认分发: Ubuntu
默认版本: 2
当前计算机配置不支持 WSL1。
若要使用 WSL1，请启用“Windows Subsystem for Linux”可选组件。
```

## `--version`

检查 `WSL` 版本

```shell
wsl --version
```

```sh
WSL 版本： 2.0.9.0
内核版本： 5.15.133.1-1
WSLg 版本： 1.0.59
MSRDC 版本： 1.2.4677
Direct3D 版本： 1.611.1-81528511
DXCore 版本： 10.0.25131.1002-220531-1700.rs-onecore-base2-hyp
Windows 版本： 10.0.22621.2861
```

## 指定默认版本

### `--set-version`

将 `WSL` 版本设置为 1 或 2

```shell
wsl --set-version Ubuntu 2
```

::: warning 警告
在 `WSL 1` 和 `WSL 2` 之间切换可能非常耗时，并且可能会由于两种体系结构之间的差异而导致失败。 对于包含大型项目的分发，建议在尝试转换之前备份文件。
:::

### `--set-default-version`

设置默认 `WSL` 版本

```shell
wsl --set-default-version 2
```

### `--set-default`

设置默认 `Linux` 发行版

```shell
wsl --set-default Ubuntu
```

## 启动 `wsl` 并进入指定目录 <Badge type="tip" text="常用" /> {#start}

```shell
wsl ~
```

`~` 可与 `wsl` 一起使用，以在用户的主目录中启动。 若要在 `WSL` 命令提示符中从任何目录跳回到主目录，可使用命令 `cd ~`。

`wsl` 后面无参数，默认进入当前目录。

## `--list`

简写 `-l`，列出分发版。

```shell
wsl --list
```

以下命令可与 `--list` 搭配使用

### `--all`

列出所有分发版，包括分发版

```shell
wsl --list --all
```

### `--running`

列出当前正在运行的分发版。

```shell
wsl --list --running
```

### `--quiet, -q`

仅显示分发版名称。

```shell
wsl --list --quiet
```

### `--verbose, -v` <Badge type="tip" text="常用" />

显示有关系统的详细信息。

```shell
wsl --list --verbose
```

### `--online, -o`

查看可通过在线商店获得的 `Linux` 发行版列表。

```shell
wsl --list --online
```

## 关闭 `wsl`

### `--shutdown` <Badge type="tip" text="常用" />

立即终止所有正在运行的发行版和 `WSL 2` 轻量级实用工具虚拟机。

```shell
wsl --shutdown
```

### `--terminate`

立即终止指定的发行版和 `WSL 2` 轻量级实用工具虚拟机。

```shell
wsl --terminate Ubuntu
```

## `--unregister`

注销或卸载 `Linux` 发行版

```shell
wsl --unregister Ubuntu
```

## 导入和导出发行版

将指定 `tar` 文件导入和导出为新的发行版。在标准输入中，文件名可以是 -。 选项包括：

- `--vhd`：指定导入/导出分发应为 `.vhdx` 文件而不是 `tar` 文件（这仅在使用 `WSL 2` 的情况下受支持）
- `--version`：（仅导入）指定将发行版导入为 `WSL 1` 还是 `WSL 2` 发行版

```shell
wsl --export <Distribution Name> <FileName>
```

```shell
wsl --import <Distribution Name> <InstallLocation> <FileName>
```

## 装载磁盘或设备

```shell
wsl --mount <DiskPath>
```

通过将 `<DiskPath>` 替换为物理磁盘所在的目录\文件路径，在所有 `WSL2` 发行版中附加和装载该磁盘。请参阅 [在 WSL 2 中装载 Linux 磁盘](https://learn.microsoft.com/zh-cn/windows/wsl/wsl2-mount-disk)。

选项包括：

- `--vhd`：指定 `<Disk>` 引用虚拟硬盘。
- `--name`：使用装入点的自定义名称装载磁盘
- `--bare`：将磁盘附加到 `WSL2`，但不进行装载。
- `--type <Filesystem>`：装载磁盘时使用的文件系统类型默认为 `ext4`（如果未指定）。 此命令也可输入为：`wsl` `--mount -t <Filesystem>`。可以使用 `blkid <BlockDevice>` 命令检测文件系统类型，例如：`blkid <dev/sdb1>`。
- `--partition <Partition Number>`：要装载的分区的索引号默认为整个磁盘（如果未指定）。
- `--options <MountOptions>`：装载磁盘时，可以包括一些特定于文件系统的选项。 例如，`wsl --mount -o "data-ordered"` 或 `wsl --mount -o "data=writeback` 之类的 `ext4` 装载选项。但是，目前仅支持特定于文件系统的选项。 不支持通用选项，例如 `ro`、`rw` 或 `noatime`。

## 卸载磁盘

卸载磁盘路径中给定的磁盘，如果未提供磁盘路径，则此命令将卸载并分离所有已装载的磁盘。

```shell
wsl --unmount <DiskPath>
```
