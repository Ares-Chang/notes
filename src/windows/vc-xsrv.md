# VcXsrv

通过 VcXsrv 可以在 Windows 上运行 X 服务器，从而在 Windows 上运行 Linux 桌面环境。

## 下载

访问 [VcXsrv 官网](https://sourceforge.net/projects/vcxsrv/) 下载最新版本。

安装时保持默认设置即可。

## 配置

- 选择 `Multiple windows` → 下一步

- `Display number` 设为 "0" → 下一步

- 勾选 `Disable access control`（重要！）→ 下一步

- 勾选 `Clipboard` 和 `Primary Selection` → 下一步

- 保存配置（可选）→ 完成

此时会在任务栏显示 VcXsrv 图标（表示服务已启动）。

## SSH 连接

通过 SSH 登录 Linux 机器，须要指定 `-Y` 参数，以启用 X11 转发：

```bash
ssh -Y user@linux-host
```

## Linux 配置

在 Linux 上安装 X11 依赖，通过 SSH 登录 Linux 机器，安装必要组件：

```bash
sudo apt update
sudo apt install -y xauth libxss1 libgtk-3-0 libgdk-pixbuf2.0-0
```

### 环境变量

启动时，须要设置环境变量 `DISPLAY`，值为 `localhost:0.0`，以指定 X 服务器地址。

```bash
export DISPLAY=localhost:0.0  # 指向 Windows 的 X Server
export ELECTRON_DISABLE_GPU=1 # 禁用 GPU 加速（避免兼容问题）
export ELECTRON_OZONE_PLATFORM_HINT=x11  # 强制使用 X11
```

::: warning 注意

如果不为同一台机器，则须要设置环境变量 `DISPLAY` 的 `localhost` 修改为你要使用机器的 IP 地址。

:::

## 启动应用

以 `Electron` 应用为例，启动时自动映射到 Windows 的 X Server。

```bash
pnpm run dev
```

成功启动后，在 Windows 上会弹出窗口，显示 `Electron` 应用。

否则，会有相应报错，检查相应配置或环境变量是否正确。

## .zshrc 配置

为避免每次启动时都手动设置环境变量，可以在 `.zshrc` 中添加以下配置：

```bash
# -------------------------------------------------- #
# VcXsrv X11 转发配置
# -------------------------------------------------- #
# 设置 DISPLAY 等变量（仅当通过 SSH 连接时生效）
if [ -n "$SSH_CONNECTION" ]; then
    # 从 SSH 连接信息中提取客户端 IP（即你的 Windows IP）
    WIN_IP=$(echo $SSH_CONNECTION | awk '{print $1}')
    
    # 如果成功获取到 IP，则设置变量
    if [ -n "$WIN_IP" ]; then
        export DISPLAY="$WIN_IP:0.0" # 指向 Windows 的 X Server
        export ELECTRON_DISABLE_GPU=1 # 禁用 GPU 加速（避免兼容问题）
        export ELECTRON_OZONE_PLATFORM_HINT=x11 # 强制使用 X11
    fi
fi
```

以上配置会自动设置 `DISPLAY` 等变量，从而在每次通过 SSH 连接时，自动映射到 Windows 的 X Server。

详细可以参见我的 [use](https://github.com/Ares-Chang/use) 中的 [`.zshrc` 配置](https://github.com/Ares-Chang/.config/blob/master/.zshrc)。